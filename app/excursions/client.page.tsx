"use client"

import { useState, useEffect } from "react"
import { ExcursionsSection } from "@/components/excursions-section"
import { type Locale, detectLocale, translations } from "@/lib/i18n"

function ExcursionsPageClient() {
  const [locale, setLocale] = useState<Locale>("ru")

  useEffect(() => {
    const detectedLocale = detectLocale()
    setLocale(detectedLocale)
  }, [])

  const t = translations[locale]

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-amber-50/30 to-white">
      <div className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/minsk-city-tour-architecture.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-white/92" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center mb-12 md:mb-16 gold-gradient-text text-muted">
            {t.excursions.title}
          </h1>

          <ExcursionsSection locale={locale} />
        </div>
      </div>
    </main>
  )
}

export default ExcursionsPageClient
export { ExcursionsPageClient }
