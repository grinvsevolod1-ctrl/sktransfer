"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, Users, CheckCircle, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { type Locale, detectLocale } from "@/lib/i18n"

export default function ExcursionDetailPageClient({ excursionsData, translations }: any) {
  const params = useParams()
  const router = useRouter()
  const [locale, setLocale] = useState<Locale>("ru")
  const [mounted, setMounted] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    setMounted(true)
    setLocale(detectLocale())
  }, [])

  if (!mounted) {
    return null
  }

  const excursionId = params.id as string
  const excursion = excursionsData[excursionId]

  if (!excursion) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>{locale === "ru" ? "Экскурсия не найдена" : locale === "en" ? "Excursion not found" : "未找到游览"}</p>
      </div>
    )
  }

  const t = translations[locale]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % excursion.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + excursion.images.length) % excursion.images.length)
  }

  const handleBookExcursion = () => {
    router.push(`/calculator?excursion=${excursionId}`)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-amber-50/30 to-white pt-32 pb-20">
      <div className="container mx-auto px-4">
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="mb-8 hover:bg-accent hover:text-[var(--gold)] transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {locale === "ru" ? "Назад к экскурсиям" : locale === "en" ? "Back to excursions" : "返回游览"}
        </Button>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="relative min-h-[400px] max-h-[600px] rounded-2xl overflow-hidden group bg-gray-50">
              <img
                src={excursion.images[currentImageIndex] || "/placeholder.svg"}
                alt={excursion.name[locale]}
                className="w-full h-full object-contain"
              />

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {excursion.images.map((_: any, index: number) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex ? "bg-[var(--gold)] w-8" : "bg-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {excursion.images.slice(0, 4).map((image: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative h-20 rounded-lg overflow-hidden border-2 transition-all bg-gray-50 ${
                    index === currentImageIndex ? "border-[var(--gold)] scale-105" : "border-transparent"
                  }`}
                >
                  <img src={image || "/placeholder.svg"} alt="" className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 gold-gradient-text">{excursion.name[locale]}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">{excursion.description[locale]}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-effect p-6 rounded-xl border border-[var(--gold)]/20">
                <Clock className="h-8 w-8 text-[var(--gold)] mb-3" />
                <p className="text-sm text-muted-foreground mb-1">
                  {locale === "ru" ? "Длительность" : locale === "en" ? "Duration" : "持续时间"}
                </p>
                <p className="text-lg font-semibold">{excursion.duration[locale]}</p>
              </div>

              <div className="glass-effect p-6 rounded-xl border border-[var(--gold)]/20">
                <Users className="h-8 w-8 text-[var(--gold)] mb-3" />
                <p className="text-sm text-muted-foreground mb-1">
                  {locale === "ru" ? "Группа" : locale === "en" ? "Group" : "团队"}
                </p>
                <p className="text-lg font-semibold">{excursion.groupSize[locale]}</p>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-xl border border-[var(--gold)]/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">
                  {locale === "ru" ? "Стоимость" : locale === "en" ? "Price" : "价格"}
                </h3>
                <p className="text-2xl font-bold text-[var(--gold)]">{excursion.price[locale]}</p>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-xl border border-[var(--gold)]/20">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 text-[var(--gold)]" />
                {locale === "ru" ? "Основные точки маршрута" : locale === "en" ? "Highlights" : "亮点"}
              </h3>
              <ul className="space-y-3">
                {excursion.highlights[locale].map((highlight: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[var(--gold)] mt-0.5 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-effect p-6 rounded-xl border border-[var(--gold)]/20">
              <h3 className="text-xl font-semibold mb-4">
                {locale === "ru" ? "Включено в стоимость" : locale === "en" ? "Included" : "包括"}
              </h3>
              <ul className="space-y-3">
                {excursion.included[locale].map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[var(--gold)] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              onClick={handleBookExcursion}
              className="w-full gold-gradient text-white font-semibold text-lg py-6 hover:shadow-xl hover:shadow-[var(--gold)]/50 transition-all hover:scale-105 bg-slate-600"
            >
              {locale === "ru" ? "Заказать экскурсию" : locale === "en" ? "Book Excursion" : "预订游览"}
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
