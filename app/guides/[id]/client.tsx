"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import type { Locale } from "@/lib/i18n"
import { Star, Languages, Award, MapPin, Users, ChevronLeft, ChevronRight } from "lucide-react"

interface GuidesData {
  [key: string]: {
    id: string
    name: { ru: string; en: string; zh: string }
    experience: { ru: string; en: string; zh: string }
    description: { ru: string; en: string; zh: string }
    languages: string[]
    rating: number
    tours: number
    images: string[]
    specializations: { ru: string[]; en: string[]; zh: string[] }
    popularRoutes: { ru: string[]; en: string[]; zh: string[] }
  }
}

interface GuideDetailPageClientProps {
  guidesData: GuidesData
  translations: { [locale: string]: { [key: string]: string } }
}

export default function GuideDetailPageClient({ guidesData, translations }: GuideDetailPageClientProps) {
  const params = useParams()
  const router = useRouter()
  const [locale, setLocale] = useState<Locale>("ru")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const detectLocale = () => {
      // Placeholder for actual locale detection logic if needed
      // For now, defaulting to 'ru' or could use a context provider
      return "ru" as Locale
    }
    const detectedLocale = detectLocale()
    setLocale(detectedLocale)
  }, [])

  const guideId = params.id as string
  const guide = guidesData[guideId as keyof typeof guidesData]

  if (!guide) {
    return <div>Guide not found</div>
  }

  const t = translations[locale]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % guide.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + guide.images.length) % guide.images.length)
  }

  const handleBookTour = () => {
    router.push("/contacts")
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-amber-50/30 to-white pt-32 pb-20">
      <div className="relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Back button */}
          <button
            onClick={() => router.back()}
            className="mb-8 flex items-center gap-2 text-gray-600 hover:text-[var(--gold)] transition-colors group"
          >
            <ChevronLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span>{locale === "ru" ? "Назад к гидам" : locale === "en" ? "Back to guides" : "返回导游"}</span>
          </button>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative min-h-[400px] max-h-[600px] rounded-2xl overflow-hidden group bg-gray-50 text-muted">
                <img
                  src={guide.images[currentImageIndex] || "/placeholder.svg"}
                  alt={guide.name[locale]}
                  className="w-full h-full object-contain"
                />

                {/* Navigation arrows */}
                {guide.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                    >
                      <ChevronLeft className="h-6 w-6 text-gray-800" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                    >
                      <ChevronRight className="h-6 w-6 text-gray-800" />
                    </button>
                  </>
                )}

                {/* Rating badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
                  <Star className="h-5 w-5 fill-[var(--gold)] text-[var(--gold)]" />
                  <span className="font-semibold text-gray-800">{guide.rating}.0</span>
                </div>
              </div>

              {/* Thumbnail grid */}
              {guide.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {guide.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`relative h-24 rounded-lg overflow-hidden border-2 transition-all bg-gray-50 ${
                        idx === currentImageIndex
                          ? "border-[var(--gold)] scale-95"
                          : "border-transparent hover:border-[var(--gold)]/50"
                      }`}
                    >
                      <img src={img || "/placeholder.svg"} alt="" className="w-full h-full object-contain" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Guide Info */}
            <div className="space-y-6">
              <div>
                <h1 className="font-display text-5xl md:text-6xl mb-4 gold-gradient-text">{guide.name[locale]}</h1>
                <p className="text-xl text-[var(--gold)] font-medium mb-6">{guide.experience[locale]}</p>

                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full border border-[var(--gold)]/20 text-muted">
                    <Users className="h-5 w-5 text-[var(--gold)]" />
                    <span className="text-sm font-medium">
                      {guide.tours}+ {locale === "ru" ? "экскурсий" : locale === "en" ? "tours" : "游览"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full border border-[var(--gold)]/20 text-muted">
                    <Award className="h-5 w-5 text-[var(--gold)]" />
                    <span className="text-sm font-medium">
                      {locale === "ru" ? "Аккредитован" : locale === "en" ? "Accredited" : "认证"}
                    </span>
                  </div>
                </div>

                <div className="glass-effect p-4 rounded-xl border border-[var(--gold)]/20 mb-6 text-foreground">
                  <div className="flex items-center gap-2 mb-2">
                    <Languages className="h-5 w-5 text-[var(--gold)]" />
                    <span className="font-semibold text-foreground">
                      {locale === "ru" ? "Языки" : locale === "en" ? "Languages" : "语言"}:
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-foreground">
                    {guide.languages.map((lang, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-[var(--gold)]/10 to-amber-100/50 border border-[var(--gold)]/20 rounded-full text-sm font-medium text-foreground"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="glass-effect p-6 rounded-2xl border border-[var(--gold)]/20">
                <p className="leading-relaxed text-foreground">{guide.description[locale]}</p>
              </div>

              {/* Specializations */}
              <div className="glass-effect p-6 rounded-2xl border border-[var(--gold)]/20 text-foreground">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-[var(--gold)]" />
                  {locale === "ru" ? "Специализация" : locale === "en" ? "Specialization" : "专业"}
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {guide.specializations[locale].map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                      {spec}
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Routes */}
              <div className="glass-effect p-6 rounded-2xl border border-[var(--gold)]/20">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[var(--gold)]" />
                  {locale === "ru" ? "Популярные маршруты" : locale === "en" ? "Popular Routes" : "热门路线"}
                </h3>
                <ul className="space-y-2">
                  {guide.popularRoutes[locale].map((route, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                      {route}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Book button */}
              <button
                onClick={handleBookTour}
                className="w-full py-4 px-8 gold-gradient font-semibold text-lg hover:shadow-lg hover:shadow-[var(--gold)]/30 transition-all hover:scale-[1.02] active:scale-[0.98] text-muted border-muted border-2 opacity-85 rounded-full"
              >
                {locale === "ru" ? "Заказать экскурсию" : locale === "en" ? "Book a tour" : "预订旅游"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
