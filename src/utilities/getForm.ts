import { FormContact } from '@/types/ContactForm'

export const getForm = async (formId: string) => {
  try {
    const URL = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/forms/${formId}?depth=1`
    console.log(URL)
    const res = await fetch(URL)
    if (!res.ok) throw new Error('Failed to fetch form')
    return (await res.json()) as FormContact
  } catch (error) {
    console.error('Failed in getForm: ', error)
    return null
  }
}
