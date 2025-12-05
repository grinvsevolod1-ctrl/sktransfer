"use client"

import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { useLanguage } from "@/lib/language-context"

export default function Home() {
  const { locale } = useLanguage()

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
