"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plane, ArrowRight, CheckCircle2 } from "lucide-react"
import { type Locale, translations } from "@/lib/i18n"
import { useState } from "react"
import { BookingModal } from "./booking-modal"

const AIRPORT_TARIFFS = {
  standard: {
    from: 70,
    to: 70,
    features: ["1-3 пассажира", "Sedan", "Базовый сервис"],
  },
  comfort: {
    from: 80,
    to: 80,
    features: ["1-3 пассажира", "Comfort класс", "WiFi в авто"],
  },
  business: {
    from: 140,
    to: 140,
    features: ["1-3 пассажира", "Mercedes S-класс", "Детское кресло"],
  },
  minivan: {
    from: 130,
    to: 130,
    features: ["До 8 пассажиров", "Volkswagen Caravella", "Больше багажа"],
  },
  vip: {
    from: 160,
    to: 160,
    features: ["1-3 пассажира", "Mercedes V-класс", "Премиум сервис"],
  },
  minibus: {
    from: 220,
    to: 220,
    features: ["До 19 пассажиров", "Микроавтобус", "Групповые поездки"],
  },
}

interface AirportTariffsProps {
  locale: Locale
}

export function AirportTariffs({ locale }: AirportTariffsProps) {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [selectedTariff, setSelectedTariff] = useState<string>("")
  const t = translations[locale]

  const handleBookTariff = (tariffName: string) => {
    setSelectedTariff(tariffName)
    setIsBookingModalOpen(true)
  }

  return (
    <>
      <Card className="p-4 sm:p-6 lg:p-8 border-2 border-[var(--gold)]/20 bg-muted">
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0">
            <Plane className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--gold)]" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black truncate">
              {t.calculator.airportTitle}
            </h3>
            <p className="text-xs sm:text-sm text-black mt-1">{t.calculator.airportSubtitle}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {Object.entries(AIRPORT_TARIFFS).map(([key, tariff]) => {
            const tariffKey = key as keyof typeof AIRPORT_TARIFFS
            const tariffName = t.tariffs[tariffKey as keyof typeof t.tariffs]

            return (
              <Card
                key={key}
                className="p-4 sm:p-5 bg-gradient-to-br from-white to-gray-50 border border-[var(--gold)]/20 hover:border-[var(--gold)]/40 transition-colors bg-muted"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-base sm:text-lg font-bold text-black break-words pr-2">{tariffName}</h4>
                </div>

                <div className="space-y-2 mb-4">
                  {tariff.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-black break-words">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 mb-4 pb-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <ArrowRight className="w-4 h-4 text-[var(--gold)] flex-shrink-0" />
                      <span className="text-sm text-black truncate">{t.calculator.fromAirport}</span>
                    </div>
                    <span className="font-bold text-lg text-black flex-shrink-0 ml-2">{tariff.from} BYN</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <ArrowRight className="w-4 h-4 text-[var(--gold)] flex-shrink-0" />
                      <span className="text-sm text-black truncate">{t.calculator.toAirport}</span>
                    </div>
                    <span className="font-bold text-lg text-black flex-shrink-0 ml-2">{tariff.to} BYN</span>
                  </div>
                </div>

                <Button
                  variant="default"
                  onClick={() => handleBookTariff(tariffName)}
                  className="w-full gold-gradient text-sm sm:text-base text-muted"
                  size="sm"
                >
                  {locale === "ru" ? "Заказать" : locale === "en" ? "Book" : "预订"}
                </Button>
              </Card>
            )
          })}
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-xs sm:text-sm text-blue-900 text-center break-words">
            {locale === "ru"
              ? "⏰ Встреча с табличкой в зале прилета • 🧳 Помощь с багажом • 📱 Отслеживание рейса"
              : locale === "en"
                ? "⏰ Meet & greet with sign • 🧳 Luggage assistance • 📱 Flight tracking"
                : "⏰ 接机服务 • 🧳 行李协助 • 📱 航班跟踪"}
          </p>
        </div>
      </Card>

      <BookingModal
        open={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        locale={locale}
        selectedTariff={selectedTariff}
        from={locale === "ru" ? "Аэропорт Минск-2" : "Minsk Airport"}
        to={locale === "ru" ? "Минск" : "Minsk"}
      />
    </>
  )
}
