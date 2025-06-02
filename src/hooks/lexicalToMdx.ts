import type { FieldHook } from 'payload'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'

import { convertLexicalToMarkdown, editorConfigFactory } from '@payloadcms/richtext-lexical'
import { Code } from '@/blocks/Code/config'
import { MediaBlock } from '@/blocks/MediaBlock/config'
import { Banner } from '@/blocks/Banner/config'

export const lexicalToMdxHook = (richTextFieldName: string): FieldHook => {
  return async ({ siblingData, req }) => {
    try {
      // Get the Lexical data from the sibling rich text field
      const lexicalData = siblingData[richTextFieldName] as SerializedEditorState
      if (!lexicalData || !lexicalData.root || !lexicalData.root.children) {
        return ''
      }
      // Get editor config
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
      // Convert to markdown
      const mdx = convertLexicalToMarkdown({
        data: lexicalData,
        editorConfig,
      })
      return mdx
    } catch (error) {
      console.error('Error converting Lexical to MDX:', error)
      return ''
    }
  }
}
