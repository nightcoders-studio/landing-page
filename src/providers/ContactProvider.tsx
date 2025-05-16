'use client'

import React, { createContext, ReactNode } from 'react'
import { FormContact } from '@/types/ContactForm'

type ContactContextType = {
  contactPromise: Promise<FormContact>
}

export const ContactContext = createContext<ContactContextType | null>(null)

export const ContactContextProvider = ({
  children,
  contactPromise,
}: {
  children: ReactNode
  contactPromise: Promise<FormContact>
}) => <ContactContext.Provider value={{ contactPromise }}>{children}</ContactContext.Provider>

export const useContactContext = () => {
  const context = React.useContext(ContactContext)
  if (!context) {
    throw new Error('useContactContext must be used within a ContactContextProvider')
  }
  return context
}
