"use client"

import { useState, useEffect } from "react"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { type Locale, detectLocale } from "@/lib/i18n"

export default function Home() {
  const [locale, setLocale] = useState<Locale>("ru")

  useEffect(() => {
    const detectedLocale = detectLocale()
    setLocale(detectedLocale)
  }, [])

  return (
    <main className="min-h-screen bg-gray-50">
      <HeroSection locale={locale} />
      <AboutSection locale={locale} />
      <ServicesSection locale={locale} />
      <TestimonialsSection locale={locale} />
      <CTASection locale={locale} />
    </main>
  )
}
