"use client"

import { Button } from "@/components/ui/button"
import { type Locale, translations } from "@/lib/i18n"
import Link from "next/link"
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react"

interface HeroSectionProps {
  locale: Locale
}

export function HeroSection({ locale }: HeroSectionProps) {
  const t = translations[locale]

  const features = [
    { ru: "Более 15 лет опыта", en: "Over 15 years of experience", zh: "超过15年的经验" },
    { ru: "Премиум автопарк", en: "Premium fleet", zh: "高端车队" },
    { ru: "Поддержка 24/7", en: "24/7 Support", zh: "24/7支持" },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/luxury-black-premium-car-night-cityscape.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/65 via-black/60 to-black/65" />

      <div className="container relative z-20 mx-auto px-4 sm:px-6 py-24 sm:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 sm:px-6 py-1.5 sm:py-2 border border-[var(--platinum)]/30 rounded-full backdrop-blur-sm glass-effect">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-[var(--platinum)]" />
            <span className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-[var(--platinum)] uppercase font-semibold">
              SKTransfer.by
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-6 sm:mb-8 tracking-tight leading-[1.1] sm:leading-tight text-balance px-4">
            <span className="block platinum-gradient-text">{t.hero.title}</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-6 sm:mb-8 text-pretty max-w-3xl mx-auto leading-relaxed px-4">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 px-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-white/70">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[var(--platinum)] flex-shrink-0" />
                <span className="text-sm sm:text-base font-medium">{feature[locale]}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link href="/calculator" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto platinum-gradient text-black text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-7 h-auto font-semibold hover:opacity-90 transition-opacity"
              >
                <span className="flex items-center justify-center">
                  {t.hero.cta}
                  <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5" />
                </span>
              </Button>
            </Link>

            <Link href="/fleet" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-7 h-auto border-[var(--platinum)]/50 text-[var(--platinum)] font-semibold glass-effect hover:bg-white/10 transition-colors bg-transparent"
              >
                {locale === "ru" ? "Наш автопарк" : locale === "en" ? "Our Fleet" : "我们的车队"}
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-16 sm:mt-24 max-w-3xl mx-auto px-4">
            <div className="text-center border-r border-[var(--platinum)]/20 last:border-r-0">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold platinum-gradient-text mb-1 sm:mb-2">15+</div>
              <div className="text-xs sm:text-sm text-white/60 uppercase tracking-wider font-medium">
                {locale === "ru" ? "Лет опыта" : locale === "en" ? "Years Experience" : "年经验"}
              </div>
            </div>
            <div className="text-center border-r border-[var(--platinum)]/20 last:border-r-0">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold platinum-gradient-text mb-1 sm:mb-2">50K+</div>
              <div className="text-xs sm:text-sm text-white/60 uppercase tracking-wider font-medium">
                {locale === "ru" ? "Клиентов" : locale === "en" ? "Clients" : "客户"}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold platinum-gradient-text mb-1 sm:mb-2">24/7</div>
              <div className="text-xs sm:text-sm text-white/60 uppercase tracking-wider font-medium">
                {locale === "ru" ? "Поддержка" : locale === "en" ? "Support" : "支持"}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-20">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-[var(--platinum)]/50 rounded-full p-1">
          <div className="w-1 h-2 sm:w-1.5 sm:h-3 bg-[var(--platinum)]/70 rounded-full mx-auto" />
        </div>
      </div>
    </section>
  )
}
