"use client"

import { X, Phone, Mail, MessageCircle, Send } from "lucide-react"
import { type Locale, translations } from "@/lib/i18n"

interface ContactModalProps {
  open: boolean
  onClose: () => void
  locale: Locale
}

export function ContactModal({ open, onClose, locale }: ContactModalProps) {
  const t = translations[locale]

  if (!open) return null

  /*WhatsApp icon*/
  const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 32 32"
    className="w-8 h-8 sm:w-10 sm:h-10 fill-white"
    aria-hidden="true"
  >
    <path d="M16 3C9.383 3 4 8.383 4 15c0 2.215.634 4.299 1.734 6.08L4 29l8.147-1.703A11.86 11.86 0 0 0 16 27c6.617 0 12-5.383 12-12S22.617 3 16 3zm0 21.6c-1.688 0-3.33-.434-4.8-1.26l-.342-.19-4.01.938.857-3.93-.222-.322A9.84 9.84 0 0 1 6.2 15c0-5.48 4.436-9.8 9.8-9.8s9.8 4.32 9.8 9.8-4.436 9.8-9.8 9.8zm6.28-7.32c-.31-.155-1.842-.907-2.125-1-.283-.102-.494-.155-.703.155-.21.31-.828 1.012-1.015 1.216-.188.207-.368.233-.683.078-1.82-.898-3.017-3.2-3.107-3.353-.092-.155-.01-.284.138-.44.142-.148.31-.385.464-.577.155-.207.207-.36.31-.566.103-.207.052-.39-.026-.546-.078-.155-.703-1.703-.965-2.334-.254-.613-.515-.532-.703-.54-.182-.007-.395-.01-.607-.01-.207 0-.546.078-.833.385-.286.31-1.088 1.065-1.088 2.596s1.125 2.965 1.28 3.17c.155.207 2.215 3.326 5.372 4.68 3.157 1.355 3.157.902 3.726.843.568-.058 1.842-.74 2.106-1.458.26-.718.26-1.338.182-1.458-.078-.128-.284-.207-.593-.36z" />
  </svg>
)


  const contactMethods = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+375 (29) 122-84-84",
      href: "tel:+375291228484",
      color: "from-amber-400 to-yellow-500",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@sktransfer.by",
      href: "mailto:info@sktransfer.by",
      color: "from-amber-400 to-yellow-500",
    },
  ]

  const messengers = [
    {
      name: "Telegram",
      icon: Send,
      href: "https://t.me/+375291228484",
      bgColor: "bg-[#0088cc]",
      hoverColor: "hover:bg-[#0088cc]/90",
    },
    {
      name: "WhatsApp",
      icon: WhatsAppIcon,
      href: "https://wa.me/375291228484",
      bgColor: "bg-[#25D366]",
      hoverColor: "hover:bg-[#25D366]/90",
    },
    {
      name: "Viber",
      icon: Phone,
      href: "viber://chat?number=375291228484",
      bgColor: "bg-[#7360f2]",
      hoverColor: "hover:bg-[#7360f2]/90",
    },
    {
      name: "WeChat",
      icon: MessageCircle,
      href: "weixin://",
      bgColor: "bg-[#09B83E]",
      hoverColor: "hover:bg-[#09B83E]/90",
    },
  ]

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fadeIn">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={onClose} />

      <div className="relative w-full max-w-[95vw] sm:max-w-2xl md:max-w-4xl max-h-[90vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl shadow-[var(--gold)]/20 animate-scaleIn overflow-hidden flex flex-col">
        <div className="absolute top-0 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-[var(--gold)] via-[var(--gold-dark)] to-[var(--gold)]" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 p-1.5 sm:p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors group z-10"
          aria-label="Close"
        >
          <X className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
        </button>

        <div className="p-4 sm:p-6 md:p-8 overflow-y-auto">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-display font-bold gold-gradient-text mb-2 text-muted">
              {locale === "ru" ? "Связаться с нами" : locale === "en" ? "Contact Us" : "联系我们"}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 px-2">
              {locale === "ru"
                ? "Выберите удобный способ связи"
                : locale === "en"
                  ? "Choose your preferred contact method"
                  : "选择您喜欢的联系方式"}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            {/* Main contact methods */}
            <div className="flex-1 space-y-3">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">
                {locale === "ru" ? "Прямая связь" : locale === "en" ? "Direct Contact" : "直接联系"}
              </h3>
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-[var(--gold)]/20 hover:border-[var(--gold)] hover:shadow-lg hover:shadow-[var(--gold)]/20 transition-all duration-300 group active:scale-95"
                >
                  <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br ${method.color} shadow-lg`}>
                    <method.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs sm:text-sm text-gray-600 mb-0.5">{method.label}</div>
                    <div className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-[var(--gold-dark)] transition-colors truncate">
                      {method.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Messengers section */}
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">
                {locale === "ru" ? "Мессенджеры" : locale === "en" ? "Messengers" : "即时通讯"}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {messengers.map((messenger) => (
                  <a
                    key={messenger.name}
                    href={messenger.href}
                    target={messenger.name === "WeChat" ? undefined : "_blank"}
                    rel={messenger.name === "WeChat" ? undefined : "noopener noreferrer"}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl ${messenger.bgColor} ${messenger.hoverColor} transition-all duration-300 hover:scale-105 hover:shadow-lg group active:scale-95`}
                  >
                    <messenger.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    <span className="text-xs sm:text-sm font-semibold text-white">{messenger.name}</span>
                    {messenger.subtitle && (
                      <span className="text-[10px] sm:text-xs text-white/80 text-center">{messenger.subtitle}</span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-6 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-amber-50 border border-[var(--gold)]/20">
            <p className="text-xs sm:text-sm text-center text-gray-600 leading-relaxed">
              {locale === "ru"
                ? "Мы на связи 24/7. Ответим в течение нескольких минут!"
                : locale === "en"
                  ? "We are available 24/7. We'll respond within minutes!"
                  : "我们全天候在线。几分钟内回复！"}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
