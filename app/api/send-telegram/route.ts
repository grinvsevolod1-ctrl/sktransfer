import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, email, message, type } = body

    // Telegram bot token и chat ID должны быть в переменных окружения
    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!botToken || !chatId) {
      console.error("[v0] Telegram credentials not configured")
      return NextResponse.json({ error: "Telegram not configured" }, { status: 500 })
    }

    // Формируем сообщение для Telegram
    let telegramMessage = `🔔 <b>Новая заявка с сайта SKTransfer.by</b>\n\n`
    telegramMessage += `📋 <b>Тип:</b> ${type || "Контактная форма"}\n`
    telegramMessage += `👤 <b>Имя:</b> ${name}\n`
    telegramMessage += `📱 <b>Телефон:</b> ${phone}\n`

    if (email) {
      telegramMessage += `📧 <b>Email:</b> ${email}\n`
    }

    if (message) {
      telegramMessage += `💬 <b>Сообщение:</b>\n${message}\n`
    }

    telegramMessage += `\n⏰ <b>Время:</b> ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Minsk" })}`

    // Отправляем в Telegram
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`
    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: "HTML",
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error("[v0] Telegram API error:", data)
      return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
    }

    console.log("[v0] Message sent to Telegram successfully")
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Error sending to Telegram:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
