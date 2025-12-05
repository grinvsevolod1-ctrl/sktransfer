import type React from "react"
import type { Metadata, Viewport } from "next"
import { IBM_Plex_Sans, Bebas_Neue } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
})

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "SKTransfer.by — Премиум трансфер по Беларуси, России и Европе | Заказ онлайн 24/7",
  description:
    "Профессиональные трансферы премиум-класса по Беларуси, России, СНГ и Европе. Индивидуальные поездки, VIP-обслуживание, комфортабельные автомобили Mercedes. Трансфер в аэропорт Минск от 45 BYN, экскурсии с опытными гидами, поездки в горнолыжные курорты и санатории. Онлайн калькулятор стоимости. Заказ 24/7.",
  keywords: [
    "трансфер Минск",
    "трансфер Беларусь",
    "трансфер аэропорт Минск",
    "SK Transfer",
    "SKTransfer.by",
    "трансфер Россия",
    "VIP трансфер",
    "экскурсии Минск",
    "горнолыжные курорты Беларусь",
    "гид Минск",
    "трансфер Европа",
    "индивидуальный трансфер",
    "премиум трансфер",
    "Mercedes трансфер",
    "трансфер Силичи",
    "трансфер Логойск",
    "трансфер санаторий",
    "калькулятор трансфера",
    "заказать трансфер онлайн",
  ],
  authors: [{ name: "SK Transfer" }],
  creator: "SK Transfer",
  publisher: "SK Transfer",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    alternateLocale: ["en_US", "zh_CN"],
    url: "https://sktransfer.by",
    siteName: "SKTransfer.by",
    title: "SKTransfer.by — Премиум трансфер по Беларуси, России и Европе",
    description:
      "Профессиональные трансферы премиум-класса. Индивидуальные поездки, VIP-обслуживание, комфортабельные автомобили Mercedes. Более 15 лет опыта, более 50 000 довольных клиентов. Заказ онлайн 24/7.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SK Transfer - Премиум трансферы по Беларуси",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SKTransfer.by — Премиум трансфер",
    description: "Профессиональные трансферы премиум-класса по Беларуси, России и Европе. Более 15 лет опыта.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.png", sizes: "any" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#c9a961",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="" lang="ru">
      <head>
        <link rel="canonical" href="https://sktransfer.by" />
        <meta name="geo.region" content="BY-MI" />
        <meta name="geo.placename" content="Minsk" />
        <meta name="geo.position" content="53.9045;27.5615" />
        <meta name="ICBM" content="53.9045, 27.5615" />
      </head>
      <body className={`${ibmPlexSans.variable} ${bebasNeue.variable} font-sans antialiased`}>
        <ScrollToTop />
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
