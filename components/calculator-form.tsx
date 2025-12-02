"use client"

import { useRouter } from "next/navigation"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { MapPin, Navigation, Calculator, Sparkles, TrendingUp, Clock, CheckCircle2 } from "lucide-react"
import { type Locale, translations } from "@/lib/i18n"
import { BookingModal } from "./booking-modal"

const TARIFFS = {
  standard: { price: 1.3, icon: "🚗", color: "from-gray-500 to-gray-600" },
  comfort: { price: 1.5, icon: "✨", color: "from-blue-500 to-blue-600" },
  business: { price: 3.0, icon: "💼", color: "from-amber-500 to-amber-600" },
  minivan: { price: 2.2, icon: "🚐", color: "from-green-500 to-green-600" },
  vip: { price: 3.0, icon: "👑", color: "from-purple-500 to-purple-600" },
  minibus: { price: 3.0, icon: "🚌", color: "from-red-500 to-red-600" },
}

interface CalculatorFormProps {
  locale: Locale
}

export function CalculatorForm({ locale }: CalculatorFormProps) {
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [distance, setDistance] = useState("")
  const [selectedTariff, setSelectedTariff] = useState<keyof typeof TARIFFS | null>(null)
  const [results, setResults] = useState<Record<string, number> | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [bookingModalOpen, setBookingModalOpen] = useState(false)
  const [selectedBookingTariff, setSelectedBookingTariff] = useState<string>("")
  const router = useRouter()

  const t = translations[locale]

  const calculateAllPrices = () => {
    const dist = Number.parseFloat(distance)
    if (isNaN(dist) || dist <= 0) return

    setIsCalculating(true)

    // Simulate calculation animation
    setTimeout(() => {
      const calculatedResults: Record<string, number> = {}
      Object.entries(TARIFFS).forEach(([key, tariff]) => {
        calculatedResults[key] = dist * tariff.price
      })
      setResults(calculatedResults)
      setIsCalculating(false)
    }, 300)
  }

  const handleBooking = (tariffKey: string) => {
    const tariffNames: Record<string, string> = {
      standard: t.tariffs.standard,
      comfort: t.tariffs.comfort,
      business: t.tariffs.business,
      minivan: t.tariffs.minivan,
      vip: t.tariffs.vip,
      minibus: t.tariffs.minibus,
    }
    setSelectedBookingTariff(tariffNames[tariffKey] || tariffKey)
    setBookingModalOpen(true)
  }

  return (
    <>
      <div className="space-y-4 sm:space-y-6 w-full">
        <Card className="p-4 sm:p-6 lg:p-8 border-2 border-[var(--gold)]/20 w-full">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="p-2 sm:p-3 rounded-full bg-gradient-to-br from-[var(--gold)] to-amber-600 flex-shrink-0">
              <Calculator className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="min-w-0">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold gold-gradient-text truncate">
                {t.calculator.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground truncate">{t.calculator.subtitle}</p>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-5">
            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-sm font-medium">
                <MapPin className="w-4 h-4 text-[var(--gold)] flex-shrink-0" />
                <span className="truncate">{locale === "ru" ? "Откуда" : locale === "en" ? "From" : "从"}</span>
              </Label>
              <div className="relative">
                <Input
                  placeholder={
                    locale === "ru"
                      ? "Минск, Центральный район"
                      : locale === "en"
                        ? "Minsk, Central District"
                        : "明斯克中央区"
                  }
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="pl-10 border-[var(--gold)]/30 focus:border-[var(--gold)] transition-colors w-full bg-muted text-foreground"
                />
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--gold)]/50" />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-sm font-medium">
                <MapPin className="w-4 h-4 text-[var(--gold)] flex-shrink-0" />
                <span className="truncate">{locale === "ru" ? "Куда" : locale === "en" ? "To" : "到"}</span>
              </Label>
              <div className="relative">
                <Input
                  placeholder={
                    locale === "ru"
                      ? "Минск, Дворцовый район"
                      : locale === "en"
                        ? "Minsk, Palace District"
                        : "明斯克宫殿区"
                  }
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="pl-10 border-[var(--gold)]/30 focus:border-[var(--gold)] transition-colors w-full bg-muted text-foreground"
                />
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--gold)]/50" />
              </div>
            </div>

            <div className="flex justify-center">
              <div className="p-2 rounded-full bg-[var(--gold)]/10">
                <Navigation className="w-5 h-5 text-[var(--gold)]" />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-sm font-medium">
                <TrendingUp className="w-4 h-4 text-[var(--gold)] flex-shrink-0" />
                <span className="truncate">{t.calculator.distance}</span>
              </Label>
              <div className="relative">
                <Input
                  type="number"
                  placeholder="350"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  className="pl-10 pr-12 border-[var(--gold)]/30 focus:border-[var(--gold)] transition-colors text-base sm:text-lg font-semibold w-full bg-muted text-foreground"
                />
                <TrendingUp className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--gold)]/50" />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">км</span>
              </div>
            </div>

            <Button
              onClick={calculateAllPrices}
              disabled={!distance || Number.parseFloat(distance) <= 0}
              className="w-full gold-gradient hover:opacity-90 transition-opacity py-4 sm:py-6 text-base sm:text-lg font-semibold disabled:opacity-50 text-muted"
            >
              {isCalculating ? (
                <>
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  {locale === "ru" ? "Рассчитываем..." : locale === "en" ? "Calculating..." : "计算中..."}
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  {t.calculator.calculate}
                </>
              )}
            </Button>
          </div>
        </Card>

        {results && (
          <div className="grid gap-3 sm:gap-4 w-full">
            <div className="text-center mb-2">
              <h4 className="text-base sm:text-lg md:text-xl font-semibold gold-gradient-text flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="truncate">
                  {locale === "ru" ? "Сравнение тарифов" : locale === "en" ? "Tariff Comparison" : "关税比较"}
                </span>
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground px-4">
                {locale === "ru"
                  ? "Выберите подходящий вариант"
                  : locale === "en"
                    ? "Choose the best option"
                    : "选择最佳选项"}
              </p>
            </div>

            {Object.entries(TARIFFS).map(([key, tariff]) => {
              const price = results[key]
              const isSelected = selectedTariff === key
              const tariffKey = key as keyof typeof TARIFFS

              return (
                <Card
                  key={key}
                  className={`p-4 sm:p-6 cursor-pointer transition-all duration-200 w-full ${
                    isSelected
                      ? "border-2 border-[var(--gold)] shadow-lg"
                      : "border border-gray-200 hover:border-[var(--gold)]/50"
                  }`}
                  onClick={() => setSelectedTariff(tariffKey)}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1 w-full">
                      <div
                        className={`text-2xl sm:text-3xl md:text-4xl p-2 sm:p-3 rounded-2xl bg-gradient-to-br ${tariff.color} bg-opacity-10 flex-shrink-0`}
                      >
                        {tariff.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h5 className="font-semibold text-sm sm:text-base md:text-lg break-words">
                          {t.tariffs[tariffKey]}
                        </h5>
                        <p className="text-xs sm:text-sm text-muted-foreground break-words">
                          {tariff.price} BYN/км × {distance} км
                        </p>
                      </div>
                    </div>

                    <div className="text-left sm:text-right w-full sm:w-auto flex-shrink-0">
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold gold-gradient-text">
                        {price.toFixed(2)}
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground">BYN</div>
                    </div>
                  </div>

                  {isSelected && (
                    <Button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleBooking(key)
                      }}
                      className="w-full mt-3 sm:mt-4 gold-gradient hover:opacity-90 transition-opacity text-sm sm:text-base py-2 sm:py-3 text-muted"
                    >
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      {locale === "ru" ? "Заказать этот тариф" : locale === "en" ? "Book this tariff" : "预订此关税"}
                    </Button>
                  )}
                </Card>
              )
            })}
          </div>
        )}

        {results && (
          <div className="mt-4 p-4 rounded-lg bg-muted/50 border border-border">
            <p className="text-xs sm:text-sm text-muted-foreground text-center">ⓘ {t.calculator.priceDisclaimer}</p>
          </div>
        )}
      </div>

      <BookingModal
        open={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        locale={locale}
        selectedTariff={selectedBookingTariff}
        distance={distance}
        from={from}
        to={to}
      />
    </>
  )
}
