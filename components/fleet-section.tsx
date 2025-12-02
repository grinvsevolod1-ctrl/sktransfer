"use client"

import { type Locale, translations } from "@/lib/i18n"
import { Users, Briefcase, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"

interface FleetSectionProps {
  locale: Locale
}

export function FleetSection({ locale }: FleetSectionProps) {
  const t = translations[locale]
  const router = useRouter()

  const vehicles = [
    {
      id: "volkswagen-polo",
      category: t.tariffs.standard,
      model: "Volkswagen Polo",
      image: "/black-volkswagen-polo.jpg",
      passengers: 3,
      luggage: 2,
      price: "1.30",
    },
    {
      id: "skoda-superb",
      category: t.tariffs.comfort,
      model: "Skoda Superb",
      image: "/black-skoda-superb-luxury-sedan.jpg",
      passengers: 3,
      luggage: 3,
      price: "1.50",
    },
    {
      id: "mercedes-e-class",
      category: t.tariffs.business,
      model: "Mercedes-Benz E-Class",
      image: "/black-mercedes-e-class-luxury-sedan.jpg",
      passengers: 3,
      luggage: 2,
      price: "3.00",
    },
    {
      id: "mercedes-v-class",
      category: t.tariffs.minivan,
      model: "Mercedes-Benz V-Class",
      image: "/black-mercedes-v-class-luxury-minivan.jpg",
      passengers: 7,
      luggage: 6,
      price: "2.20",
    },
    {
      id: "mercedes-s-class",
      category: t.tariffs.vip,
      model: "Mercedes-Benz S-Class",
      image: "/black-mercedes-s-class-luxury-sedan-vip.jpg",
      passengers: 3,
      luggage: 3,
      price: "3.00",
    },
    {
      id: "mercedes-sprinter",
      category: t.tariffs.minibus,
      model: "Mercedes-Benz Sprinter",
      image: "/black-mercedes-sprinter-luxury-minibus.jpg",
      passengers: 18,
      luggage: 15,
      price: "3.00",
    },
  ]

  const handleVehicleClick = (vehicleId: string) => {
    router.push(`/fleet/${vehicleId}`)
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
      {vehicles.map((vehicle, index) => (
        <div
          key={index}
          className="group relative transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
          onClick={() => handleVehicleClick(vehicle.id)}
        >
          <div className="relative glass-effect rounded-2xl overflow-hidden border border-[var(--gold)]/30 hover:border-[var(--gold)]/50 transition-colors shadow-xl hover:shadow-2xl">
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20">
              <div className="backdrop-blur-md bg-[var(--gold)]/20 border border-[var(--gold)]/30 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
                <span className="text-xs tracking-wider text-[var(--gold-dark)] uppercase font-semibold">
                  {vehicle.category}
                </span>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />

              <img
                src={vehicle.image || "/placeholder.svg"}
                alt={vehicle.model}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-[var(--gold)]/20 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000" />
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between mb-4 sm:mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 group-hover:text-[var(--gold-dark)] transition-colors">
                    {vehicle.model}
                  </h3>
                  <div className="flex items-center gap-0.5 sm:gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Sparkles key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-[var(--gold)] text-[var(--gold)]" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-6 py-3 sm:py-4 border-y border-[var(--gold)]/20 mb-4 sm:mb-6">
                <div className="flex items-center gap-2 sm:gap-2.5 text-muted-foreground">
                  <div className="p-1.5 sm:p-2 bg-[var(--gold)]/10 rounded-lg">
                    <Users className="h-3 w-3 sm:h-4 sm:w-4 text-[var(--gold)]" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium">
                    {vehicle.passengers} {t.fleet.passengers}
                  </span>
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5 text-muted-foreground">
                  <div className="p-1.5 sm:p-2 bg-[var(--gold)]/10 rounded-lg">
                    <Briefcase className="h-3 w-3 sm:h-4 sm:w-4 text-[var(--gold)]" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium">
                    {vehicle.luggage} {t.fleet.luggage}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs sm:text-sm text-muted-foreground mb-1">
                    {locale === "ru" ? "от" : locale === "en" ? "from" : "起价"}
                  </div>
                  <div className="text-xl sm:text-2xl font-bold gold-gradient-text">{vehicle.price} BYN/км</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
