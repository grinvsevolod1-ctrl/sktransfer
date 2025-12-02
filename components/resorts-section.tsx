"use client"

import type { Locale } from "@/lib/i18n"
import { Mountain, Waves, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ResortsSectionProps {
  locale: Locale
}

export function ResortsSection({ locale }: ResortsSectionProps) {
  const resorts = [
    {
      name: locale === "ru" ? "Силичи" : locale === "en" ? "Silichi" : "西利奇",
      type: locale === "ru" ? "Горнолыжный комплекс" : locale === "en" ? "Ski Resort" : "滑雪胜地",
      distance: "30 км",
      image: "/ski-resort-snow-mountains-belarus.jpg",
      icon: Mountain,
    },
    {
      name: locale === "ru" ? "Логойск" : locale === "en" ? "Logoisk" : "洛戈伊斯克",
      type: locale === "ru" ? "Горнолыжный комплекс" : locale === "en" ? "Ski Resort" : "滑雪胜地",
      distance: "35 км",
      image: "/ski-resort-winter-sports-belarus.jpg",
      icon: Mountain,
    },
    {
      name: locale === "ru" ? "Раубичи" : locale === "en" ? "Raubichi" : "劳比奇",
      type: locale === "ru" ? "Спортивный комплекс" : locale === "en" ? "Sports Complex" : "体育综合体",
      distance: "25 км",
      image: "/modern-sports-complex-belarus.jpg",
      icon: Mountain,
    },
    {
      name: locale === "ru" ? "Санаторий Беларусь" : locale === "en" ? "Sanatorium Belarus" : "白俄罗斯疗养院",
      type: locale === "ru" ? "Санаторий" : locale === "en" ? "Sanatorium" : "疗养院",
      distance: "15 км",
      image: "/luxury-sanatorium-spa-resort.jpg",
      icon: Waves,
    },
    {
      name: locale === "ru" ? "Нарочь" : locale === "en" ? "Naroch" : "纳罗奇",
      type: locale === "ru" ? "Курортная зона" : locale === "en" ? "Resort Area" : "度假区",
      distance: "150 км",
      image: "/lake-resort-nature-belarus.jpg",
      icon: Waves,
    },
    {
      name: locale === "ru" ? "Минск-Арена" : locale === "en" ? "Minsk-Arena" : "明斯克竞技场",
      type: locale === "ru" ? "Ледовый дворец" : locale === "en" ? "Ice Palace" : "冰宫",
      distance: "10 км",
      image: "/modern-ice-arena-stadium.jpg",
      icon: Mountain,
    },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {resorts.map((resort, index) => {
        const Icon = resort.icon
        return (
          <div key={index} className="group relative transition-transform duration-300 hover:scale-[1.02]">
            <div className="relative glass-effect rounded-2xl overflow-hidden border border-[var(--gold)]/20 hover:border-[var(--gold)]/40 transition-colors">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                <img
                  src={resort.image || "/placeholder.svg"}
                  alt={resort.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 p-3 bg-[var(--gold)]/20 backdrop-blur-md rounded-full border border-[var(--gold)]/30">
                  <Icon className="h-5 w-5 text-[var(--gold)]" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[var(--gold)] transition-colors">
                  {resort.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{resort.type}</p>

                <div className="flex items-center justify-between pt-4 border-t border-[var(--gold)]/20">
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin className="h-4 w-4 text-[var(--gold)]" />
                    <span className="text-sm">{resort.distance}</span>
                  </div>
                  <Button
                    size="sm"
                    className="gold-gradient text-black font-semibold hover:shadow-lg hover:shadow-[var(--gold)]/50 transition-all"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
