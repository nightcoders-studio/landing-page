import type { FieldHook, RichTextField } from 'payload'
import { convertMarkdownToLexical, editorConfigFactory } from '@payloadcms/richtext-lexical'

import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'
import { Banner } from '@/blocks/Banner/config'
import { Code } from '@/blocks/Code/config'
import { MediaBlock } from '@/blocks/MediaBlock/config'

export const mdxToLexicalHook = (richTextFieldName: string): FieldHook => {
  return async ({ value, data, siblingFields, req }) => {
    try {
      // Only process if MDX value is provided and different from current
      if (typeof value !== 'string' || !value.trim()) {
        return value
      }
      // Find the rich text field configuration
      const richTextField = siblingFields.find(
        (field): field is RichTextField =>
          'name' in field && field.name === richTextFieldName && field.type === 'richText',
      )
      if (!richTextField) {
        console.warn(`Rich text field "${richTextFieldName}" not found`)
        return value
      }
      // Get the editor config from the field
      const editorConfig = await editorConfigFactory.fromFeatures({
        config: req.payload.config,
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            BlocksFeature({ blocks: [Banner, Code, MediaBlock] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
            HorizontalRuleFeature(),
          ]
        },
      })

      // Convert MDX to Lexical
      const lexicalData = convertMarkdownToLexical({
        markdown: value,
        editorConfig,
      })
      // Update the data object with the new Lexical content
      if (data) {
        data[richTextFieldName] = lexicalData
      }
      // Return the MDX value (it won't be saved due to beforeChange hook)
      return value
    } catch (error) {
      console.error('Error converting MDX to Lexical:', error)
      // Return the original value without conversion on error
      return value
    }
  }
}
