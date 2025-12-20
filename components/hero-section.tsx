"use client"

import { Button } from "@/components/ui/button"
import { type Locale, translations } from "@/lib/i18n"
import Link from "next/link"
import { Calculator, Car, Compass, Sparkles } from "lucide-react"

interface HeroSectionProps {
  locale: Locale
}

export function HeroSection({ locale }: HeroSectionProps) {
  const t = translations[locale]

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0B0D] pt-24 sm:pt-28">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/mercedes-s-class-black-luxury-sedan-front-three-qu.jpg')",
        }}
        role="img"
        aria-label="Mercedes-Benz S-Class luxury sedan"
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0B0B0D]/85 via-[#0B0B0D]/75 to-[#0B0B0D]/90" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-12 animate-in fade-in slide-in-from-top duration-700">
          <Sparkles className="h-4 w-4 text-white" aria-hidden="true" />
          <span className="text-sm font-medium text-white tracking-wide">SKTransfer.by</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom duration-700 delay-150">
          <span className="bg-gradient-to-r from-white via-[#E8EAED] to-white bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            {locale === "ru"
              ? "Трансферы по Беларуси,"
              : locale === "en"
                ? "Transfers across Belarus,"
                : "白俄罗斯接送服务,"}
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#c9a86a] via-[#d4b068] to-[#c9a86a] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(201,168,106,0.5)]">
            {locale === "ru" ? "России и Европе" : locale === "en" ? "Russia and Europe" : "俄罗斯和欧洲"}
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-[#BFC5D2] mb-12 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom duration-700 delay-300">
          {locale === "ru"
            ? "Профессиональный сервис премиум-класса. Более 15 лет опыта."
            : locale === "en"
              ? "Premium professional service. Over 15 years of experience."
              : "高级专业服务。超过15年的经验。"}
        </p>

        <nav
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-in fade-in slide-in-from-bottom duration-700 delay-500"
          aria-label="Main actions"
        >
          <Link href="/calculator">
            <Button
              size="lg"
              className="group relative px-8 py-6 bg-gradient-to-r from-[#c9a86a] to-[#d4b068] text-black font-bold text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(201,168,106,0.4)] hover:shadow-[0_0_50px_rgba(201,168,106,0.6)]"
            >
              <Calculator className="mr-2 h-5 w-5" aria-hidden="true" />
              {locale === "ru" ? "Рассчитать стоимость" : locale === "en" ? "Calculate Price" : "计算价格"}
            </Button>
          </Link>

          <Link href="/fleet">
            <Button
              size="lg"
              variant="outline"
              className="group px-8 py-6 bg-white/5 backdrop-blur-sm border-2 border-white/20 text-white font-semibold text-lg rounded-full hover:bg-white/10 hover:border-white/40 hover:scale-105 transition-all duration-300"
            >
              <Car className="mr-2 h-5 w-5" aria-hidden="true" />
              {locale === "ru" ? "Наш автопарк" : locale === "en" ? "Our Fleet" : "我们的车队"}
            </Button>
          </Link>

          <Link href="/excursions">
            <Button
              size="lg"
              variant="outline"
              className="group px-8 py-6 bg-white/5 backdrop-blur-sm border-2 border-teal-400/30 text-white font-semibold text-lg rounded-full hover:bg-teal-400/10 hover:border-teal-400/50 hover:scale-105 transition-all duration-300"
            >
              <Compass
                className="mr-2 h-5 w-5 group-hover:rotate-90 transition-transform duration-500"
                aria-hidden="true"
              />
              {locale === "ru" ? "Экскурсии" : locale === "en" ? "Excursions" : "游览"}
            </Button>
          </Link>
        </nav>

        <aside
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 text-white animate-in fade-in slide-in-from-bottom duration-700 delay-700"
          aria-label="Company statistics"
        >
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#c9a86a] to-[#d4b068] bg-clip-text text-transparent mb-2">
              15+
            </div>
            <div className="text-sm sm:text-base text-[#BFC5D2] uppercase tracking-wider">
              {locale === "ru" ? "лет опыта" : locale === "en" ? "years experience" : "年经验"}
            </div>
          </div>

          <div className="hidden sm:block w-px h-16 bg-white/20" aria-hidden="true" />

          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#c9a86a] to-[#d4b068] bg-clip-text text-transparent mb-2">
              500+
            </div>
            <div className="text-sm sm:text-base text-[#BFC5D2] uppercase tracking-wider">
              {locale === "ru" ? "трансферов/мес" : locale === "en" ? "transfers/month" : "接送/月"}
            </div>
          </div>

          <div className="hidden sm:block w-px h-16 bg-white/20" aria-hidden="true" />

          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#c9a86a] to-[#d4b068] bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-sm sm:text-base text-[#BFC5D2] uppercase tracking-wider">
              {locale === "ru" ? "поддержка" : locale === "en" ? "support" : "支持"}
            </div>
          </div>
        </aside>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-[#c9a86a]/50 rounded-full p-1">
          <div className="w-1.5 h-3 bg-[#c9a86a] rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </header>
  )
}
