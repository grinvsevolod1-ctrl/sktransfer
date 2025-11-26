import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Политика конфиденциальности | SK Transfer - Премиум трансфер по Беларуси",
  description:
    "Политика конфиденциальности SK Transfer. Информация о сборе, использовании и защите персональных данных клиентов.",
  keywords: "политика конфиденциальности, защита данных, персональные данные, SK Transfer, трансфер Беларусь",
  openGraph: {
    title: "Политика конфиденциальности | SK Transfer",
    description: "Политика конфиденциальности и защиты персональных данных SK Transfer",
    type: "website",
  },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="bg-card border border-border rounded-xl p-6 sm:p-8 lg:p-12 shadow-sm">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[var(--gold-dark)] mb-4 sm:mb-6">
            Политика конфиденциальности
          </h1>

          <p className="text-sm text-muted-foreground mb-8 sm:mb-10">
            Последнее обновление: {new Date().toLocaleDateString("ru-RU")}
          </p>

          <div className="prose prose-sm sm:prose-base max-w-none space-y-6 sm:space-y-8">
            <section>
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-3 sm:mb-4">
                1. Общие положения
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных
                пользователей сайта sktransfer.by (далее — Сайт) компанией SK Transfer (далее — Компания).
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Используя Сайт, вы соглашаетесь с условиями настоящей Политики конфиденциальности. Если вы не согласны с
                условиями, пожалуйста, не используйте Сайт.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-3 sm:mb-4">
                2. Сбор персональных данных
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Мы собираем следующие категории персональных данных:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Имя и фамилия</li>
                <li>Контактный телефон</li>
                <li>Адрес электронной почты</li>
                <li>Адреса отправления и назначения</li>
                <li>Дата и время поездки</li>
                <li>Технические данные (IP-адрес, тип браузера, операционная система)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-3 sm:mb-4">
                3. Цели обработки данных
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Мы используем ваши персональные данные для следующих целей:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Предоставление услуг трансфера</li>
                <li>Обработка заказов и бронирований</li>
                <li>Связь с клиентами по вопросам заказов</li>
                <li>Улучшение качества услуг</li>
                <li>Выполнение договорных обязательств</li>
                <li>Соблюдение требований законодательства</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-3 sm:mb-4">
                4. Защита персональных данных
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Мы применяем технические и организационные меры для защиты ваших персональных данных от
                несанкционированного доступа, изменения, раскрытия или уничтожения. К таким мерам относятся:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-3">
                <li>Шифрование данных при передаче (SSL/TLS)</li>
                <li>Ограниченный доступ к персональным данным</li>
                <li>Регулярное резервное копирование</li>
                <li>Обучение сотрудников правилам обработки данных</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-3 sm:mb-4">
                5. Передача данных третьим лицам
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Мы не продаем и не передаем ваши персональные данные третьим лицам, за исключением случаев, необходимых
                для оказания услуг (например, передача данных водителям для выполнения заказа) или требуемых
                законодательством.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-3 sm:mb-4">
                6. Файлы cookie
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Наш Сайт использует файлы cookie для улучшения пользовательского опыта, анализа посещаемости и
                функционирования сервисов. Вы можете настроить свой браузер для отклонения файлов cookie, но это может
                ограничить функциональность Сайта.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-3 sm:mb-4">
                7. Ваши права
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">Вы имеете право:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Получать информацию о ваших персональных данных, которые мы обрабатываем</li>
                <li>Требовать исправления неточных данных</li>
                <li>Требовать удаления ваших персональных данных</li>
                <li>Отозвать согласие на обработку данных</li>
                <li>Подать жалобу в контролирующий орган</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-3 sm:mb-4">
                8. Срок хранения данных
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Мы храним ваши персональные данные только в течение срока, необходимого для достижения целей обработки
                или в соответствии с требованиями законодательства. После истечения этого срока данные удаляются или
                обезличиваются.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-3 sm:mb-4">
                9. Изменения в Политике конфиденциальности
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Мы оставляем за собой право вносить изменения в настоящую Политику конфиденциальности. Все изменения
                публикуются на данной странице. Рекомендуем периодически проверять эту страницу для ознакомления с
                актуальной версией Политики.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-3 sm:mb-4">
                10. Контактная информация
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Если у вас есть вопросы относительно настоящей Политики конфиденциальности или обработки ваших
                персональных данных, пожалуйста, свяжитесь с нами:
              </p>
              <div className="bg-muted/30 border border-border rounded-lg p-4 sm:p-6 space-y-2">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Email:</strong> info@sktransfer.by
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Телефон:</strong> +375 (29) 122-84-84
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Адрес:</strong> Республика Беларусь, г. Минск
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
