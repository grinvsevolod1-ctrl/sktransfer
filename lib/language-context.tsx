"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Locale, detectLocale } from "./i18n"

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ru")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedLocale = typeof window !== "undefined" ? (localStorage.getItem("locale") as Locale) : null
    const initialLocale = savedLocale || detectLocale()
    setLocaleState(initialLocale)
    setMounted(true)
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", newLocale)
    }
  }

  // Prevent hydration mismatch by returning null until mounted
  if (!mounted) {
    return null
  }

  return <LanguageContext.Provider value={{ locale, setLocale }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
