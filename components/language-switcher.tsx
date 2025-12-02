"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import type { Locale } from "@/lib/i18n"
import { Globe } from "lucide-react"

interface LanguageSwitcherProps {
  currentLocale: Locale
  onLocaleChange: (locale: Locale) => void
}

export function LanguageSwitcher({ currentLocale, onLocaleChange }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)

  const languages: { code: Locale; name: string; nativeName: string }[] = [
    { code: "ru", name: "Russian", nativeName: "Русский" },
    { code: "en", name: "English", nativeName: "English" },
    { code: "zh", name: "Chinese", nativeName: "中文" },
  ]

  const currentLanguage = languages.find((lang) => lang.code === currentLocale)

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-foreground hover:bg-accent"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{currentLanguage?.nativeName}</span>
      </Button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-full mt-2 z-50 min-w-[160px] bg-background border border-border shadow-lg">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  onLocaleChange(lang.code)
                  setIsOpen(false)
                }}
                className={`w-full px-4 py-3 text-left hover:bg-accent transition-colors ${
                  currentLocale === lang.code ? "bg-accent font-medium" : ""
                }`}
              >
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">{lang.nativeName}</span>
                  <span className="text-xs text-muted-foreground">{lang.name}</span>
                </div>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
