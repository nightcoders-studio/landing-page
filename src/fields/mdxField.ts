import { lexicalToMdxHook } from '@/hooks/lexicalToMdx'
import { mdxToLexicalHook } from '@/hooks/mdxToLexical'
import type { Field, FieldHook, TextareaField } from 'payload'
type MdxFieldOptions = {
  name: string
  richTextField: string
  label?: string
  admin?: {
    condition?: (data: any) => boolean
    position?: 'sidebar'
    description?: string
  }
}
export const createMdxField = (options: MdxFieldOptions): TextareaField => {
  const { name, richTextField, label, admin } = options
  return {
    name,
    type: 'textarea',
    label: label || `${richTextField} (MDX)`,
    admin: {
      description: 'This field syncs with the rich text field above. Edit in MDX format.',
      rows: 15,
      placeholder: 'Enter MDX content here...',
      ...admin,
    },
    hooks: {
      afterRead: [lexicalToMdxHook(richTextField)],
      beforeValidate: [mdxToLexicalHook(richTextField)],
      beforeChange: [
        (() => {
          return null
        }) as FieldHook,
      ],
    },
  }
}
