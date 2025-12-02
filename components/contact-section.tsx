"use client"

import type React from "react"
import { type Locale, translations } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send, Clock, MessageCircle } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

interface ContactSectionProps {
  locale: Locale
}

export function ContactSection({ locale }: ContactSectionProps) {
  const t = translations[locale]
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          type: "contact_form",
        }),
      })

      if (response.ok) {
        toast({
          title: locale === "ru" ? "Успешно отправлено!" : locale === "en" ? "Successfully sent!" : "发送成功！",
          description:
            locale === "ru"
              ? "Мы свяжемся с вами в ближайшее время"
              : locale === "en"
                ? "We will contact you shortly"
                : "我们会尽快与您联系",
        })
        setFormData({ name: "", phone: "", email: "", message: "" })
      } else {
        throw new Error("Failed to send")
      }
    } catch (error) {
      toast({
        title: locale === "ru" ? "Ошибка" : locale === "en" ? "Error" : "错误",
        description:
          locale === "ru" ? "Не удалось отправить сообщение" : locale === "en" ? "Failed to send message" : "发送失败",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/luxury-black-car-with-private-jet-in-background--c.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/92" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 gold-gradient-text">{t.contact.title}</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              {locale === "ru" ? "Мы на связи 24/7" : locale === "en" ? "We are available 24/7" : "我们全天候为您服务"}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="glass-effect-strong p-6 rounded-2xl hover-lift flex items-start gap-4">
                <div className="p-3 gold-gradient rounded-xl">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold mb-2 text-foreground">{t.contact.phone}</div>
                  <a
                    href="tel:+375291228484"
                    className="text-foreground/60 hover:text-[var(--gold)] transition-colors block"
                  >
                    +375 (29) 122-84-84
                  </a>
                </div>
              </div>

              <div className="glass-effect-strong p-6 rounded-2xl hover-lift flex items-start gap-4">
                <div className="p-3 gold-gradient rounded-xl">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold mb-2 text-foreground">{t.contact.email}</div>
                  <a
                    href="mailto:info@sktransfer.by"
                    className="text-foreground/60 hover:text-[var(--gold)] transition-colors"
                  >
                    info@sktransfer.by
                  </a>
                </div>
              </div>

              <div className="glass-effect-strong p-6 rounded-2xl hover-lift flex items-start gap-4">
                <div className="p-3 gold-gradient rounded-xl">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold mb-2 text-foreground">{t.contact.address}</div>
                  <p className="text-foreground/60">
                    {locale === "ru" ? "Минск, Беларусь" : locale === "en" ? "Minsk, Belarus" : "明斯克，白俄罗斯"}
                  </p>
                </div>
              </div>

              <div className="glass-effect-strong p-6 rounded-2xl hover-lift flex items-start gap-4">
                <div className="p-3 gold-gradient rounded-xl">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold mb-2 text-foreground">
                    {locale === "ru" ? "Часы работы" : locale === "en" ? "Working Hours" : "工作时间"}
                  </div>
                  <p className="text-foreground/60">
                    {locale === "ru"
                      ? "Круглосуточно, без выходных"
                      : locale === "en"
                        ? "24/7, Every Day"
                        : "全天候，每天"}
                  </p>
                </div>
              </div>

              {/* Messengers */}
              <div className="glass-effect-strong p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="h-6 w-6 text-[var(--gold)]" />
                  <h3 className="font-semibold text-foreground">{t.contact.messengers}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://t.me/+375291228484"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#0088cc] text-white rounded-lg hover:bg-[#0088cc]/90 transition-colors text-sm font-medium"
                  >
                    Telegram
                  </a>
                  <a
                    href="https://wa.me/375291228484"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#25D366]/90 transition-colors text-sm font-medium"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="viber://chat?number=375291228484"
                    className="px-4 py-2 bg-[#7360f2] text-white rounded-lg hover:bg-[#7360f2]/90 transition-colors text-sm font-medium"
                  >
                    Viber
                  </a>
                  <a
                    href="https://signal.me/#p/+375291228484"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#3a76f0] text-white rounded-lg hover:bg-[#3a76f0]/90 transition-colors text-sm font-medium"
                  >
                    Signal
                  </a>
                  <a
                    href="skype:sktransfer?chat"
                    className="px-4 py-2 bg-[#00aff0] text-white rounded-lg hover:bg-[#00aff0]/90 transition-colors text-sm font-medium"
                  >
                    Skype
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-effect-strong p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                {locale === "ru" ? "Отправить запрос" : locale === "en" ? "Send Request" : "发送请求"}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder={t.contact.form.name}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12 bg-white/50"
                  />
                </div>

                <div>
                  <Input
                    type="tel"
                    placeholder={t.contact.form.phone}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-12 bg-white/50"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder={t.contact.form.email}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12 bg-white/50"
                  />
                </div>

                <div>
                  <Textarea
                    placeholder={t.contact.form.message}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="resize-none bg-white/50"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full gold-gradient text-white hover:shadow-lg hover:shadow-[var(--gold)]/30 transition-all group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      {locale === "ru" ? "Отправка..." : locale === "en" ? "Sending..." : "发送中..."}
                    </>
                  ) : (
                    <>
                      {t.contact.form.submit}
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
