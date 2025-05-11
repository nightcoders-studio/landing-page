type RichTextNode = {
  detail: number
  format: number
  mode: string
  style: string
  text: string
  type: string
  version: number
}

type RichTextParagraph = {
  children: RichTextNode[]
  direction: string
  format: string
  indent: number
  type: string
  version: number
  textFormat?: number
  textStyle?: string
}

type RichTextContent = {
  root: {
    children: RichTextParagraph[]
    direction: string
    format: string
    indent: number
    type: string
    version: number
  }
}

type EmailConfig = {
  emailTo: string
  bcc: string
  replyTo: string
  emailFrom: string
  subject: string
  message: {
    root: {
      children: Array<any>
      direction: string
      format: string
      indent: number
      type: string
      version: number
    }
  }
  id: string
}

export type FormContact = {
  createdAt: string
  updatedAt: string
  title: string
  fields: FormField[]
  submitButtonLabel: string
  confirmationType: 'redirect' | 'message'
  redirect: {
    url: string
  }
  emails: EmailConfig[]
  hasAttachment: boolean
  confirmationMessage?: RichTextContent
  hasAttachmentLabel: string
  id: string
}

export type FormField = {
  blockType: string
  name: string
  label: string
  width: number
  required?: boolean
  id: string
  blockName?: string
  placeholder?: string
  options?: Array<{
    label: string
    value: string
    id: string
  }>
}
