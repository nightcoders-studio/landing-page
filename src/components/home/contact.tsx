'use client'
import { FormEvent, useEffect, useRef, useState } from 'react'
import FileUploader from './ui/upload-file'
import { FormContact, FormField } from '@/types/ContactForm'
import { useToast } from '../hooks/use-toast'
import { ToastAction } from '../ui/toast'

const getForm = async (formId: string) => {
  try {
    const URL = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/forms/${formId}?depth=1&draft=false&locale=undefined`
    const res = await fetch(URL)
    if (!res.ok) throw new Error('Failed to fetch form')
    return (await res.json()) as FormContact
  } catch (error) {
    console.error('Failed in getForm: ', error)
    return null
  }
}

const Contact = () => {
  const formId = '6820232f1753e62592e1fd73'
  const [cmsForm, setCmsForm] = useState<FormContact | null>(null)
  const [file, setFile] = useState<File | null>(null)

  const { toast } = useToast()

  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getForm(formId)
      setCmsForm(data)
    }
    fetchData()
  }, [formId])

  const renderField = (field: FormField) => {
    switch (field.blockType) {
      case 'textarea':
        return (
          <textarea
            name={field.name}
            id={field.name || field.id}
            placeholder={field.placeholder || `${field.label}`}
            className="mt-1 block w-full rounded-xl border border-brand-secondary px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand/50"
            rows={3}
            required={field.required}
          />
        )
      case 'select':
        return (
          <select
            name={field.name}
            id={field.name || field.id}
            className="mt-1 block w-full rounded-xl border border-brand-secondary px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand/50"
            required={field.required}
            defaultValue=""
          >
            <option value="" disabled>
              {field.placeholder || `Select ${field.label}`}
            </option>

            {field.options &&
              field.options.map((option) => (
                <option key={option.id} value={option.value}>
                  {option.label}
                </option>
              ))}
          </select>
        )
      default:
        return (
          <input
            type={field.blockType || 'text'}
            name={field.name}
            id={field.name || field.id}
            placeholder={field.placeholder || `Enter your ${field.label}`}
            className="mt-1 block w-full rounded-xl border border-brand-secondary px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand/50"
            required={field.required}
          />
        )
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let fileUploadedId = null
    const formData = new FormData(e.currentTarget)

    try {
      // Handle file upload if a file exists
      if (file) {
        const fileFormData = new FormData()
        fileFormData.append('file', file as File)
        fileFormData.append('_payload', JSON.stringify({ alt: (file as File).name }))

        const fileResponse = await fetch('/api/media', {
          method: 'POST',
          body: fileFormData,
        })

        if (!fileResponse.ok) {
          throw new Error('Failed to upload file')
        }

        const fileData = await fileResponse.json()
        fileUploadedId = fileData?.doc?.id
      }

      // Remove file from form data as it's handled separately
      formData.delete('file')

      // Prepare submission data
      const submissionData = Array.from(formData.entries()).map(([name, value]) => ({
        field: name,
        value: value.toString(),
      }))

      // Submit form data
      const response = await fetch('/api/form-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          form: formId,
          submissionData,
          ...(cmsForm?.hasAttachment && fileUploadedId ? { file: fileUploadedId } : {}),
        }),
      })

      if (response.ok) {
        toast({
          title: 'Thank you for reaching out to us!',
          description: "We've received your inquiry",
        })

        // Reset the form and file state on success
        formRef.current?.reset()
        setFile(null)
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      if (error instanceof Error) {
        toast({
          title: 'Error',
          description: `${error.message}, you can try again`,
          variant: 'destructive',
          action: (
            <ToastAction onClick={() => formRef.current?.requestSubmit()} altText="Try again">
              Try again
            </ToastAction>
          ),
        })
      }
    }
  }

  return (
    <div
      id="contact"
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('pattern.png')" }}
    >
      <div className="absolute inset-0 bg-white dark:bg-black opacity-80 z-0"></div>
      <div className="relative z-10 flex justify-center items-center md:p-4 xl:p-10 px-8 py-10">
        <div className="w-full max-w-lg bg-background dark:bg-transparent rounded-2xl shadow-md p-8 ring-1 ring-brand">
          <h3 className="text-2xl font-bold text-center mb-2">
            Start Your <span className="text-brand font-bold">Project</span>
          </h3>
          <p className="text-center text-gray-600 mb-6">
            We have assisted over 40+ clients in developing their digital products
          </p>

          {cmsForm ? (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {cmsForm.fields.map((field: FormField) => (
                <div
                  key={field.id || field.name}
                  className={`transition-all duration-200 ease-in-out ${field.width === 100 ? 'w-full' : 'w-full md:w-1/2'}`}
                >
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {field.label == 'Describe Your Problem or What You Want to Build'
                      ? 'Message'
                      : field.label}
                    {field.required && <span className="text-red-500 ml-1">*</span>}
                  </label>
                  {renderField(field)}
                </div>
              ))}

              {cmsForm.hasAttachment && (
                <div className="mt-6">
                  <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-2">
                    Attachment
                  </label>
                  <FileUploader initialFile={cmsForm.attachmentFile} onFileChange={setFile} />
                </div>
              )}

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-3 bg-brand text-white font-medium rounded-xl hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand/50 transition-colors duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          ) : (
            <div className="py-12 text-center">
              <p className="text-gray-500">Loading form...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contact
