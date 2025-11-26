import GuideDetailPageClient from "./client"
import { translations } from "@/lib/i18n"

const guidesData = {
  andrey: {
    id: "andrey",
    name: { ru: "Андрей", en: "Andrey", zh: "安德烈" },
    experience: { ru: "Более 15 лет в туризме", en: "Over 15 years in tourism", zh: "旅游业超过15年" },
    description: {
      ru: "Более 15 лет работаю в туризме. Более 15 лет рассказываю гостям нашей страны о истории, красотах и легендах Беларуси. Более 15 лет стараюсь передать посетителям нашей республики хоть частичку своей любви к моей Родине. Провожу экскурсии по Минску и минской области, на русском и английском языках.",
      en: "I have been working in tourism for over 15 years. For more than 15 years I have been telling guests of our country about the history, beauties and legends of Belarus. I conduct excursions in Minsk and the Minsk region in Russian and English.",
      zh: "我在旅游业工作了15年以上。15年来，我一直向我们国家的客人讲述白俄罗斯的历史、美景和传说。我在明斯克和明斯克地区用俄语和英语进行游览。",
    },
    languages: ["Русский", "English"],
    rating: 5,
    tours: 1500,
    images: ["/andrey-guide-photo-1.jpg", "/andrey-guide-photo-2.jpg", "/andrey-guide-photo-1.jpg"],
    specializations: {
      ru: ["Историческая Беларусь", "Архитектура Минска", "Военная история", "Культурные традиции"],
      en: ["Historical Belarus", "Minsk Architecture", "Military History", "Cultural Traditions"],
      zh: ["历史白俄罗斯", "明斯克建筑", "军事历史", "文化传统"],
    },
    popularRoutes: {
      ru: ["Обзорная экскурсия по Минску", "Брестская крепость", "Мир и Несвиж", "Хатынь мемориал"],
      en: ["Minsk City Tour", "Brest Fortress", "Mir and Nesvizh", "Khatyn Memorial"],
      zh: ["明斯克城市游", "布列斯特要塞", "米尔和涅斯维日", "哈廷纪念馆"],
    },
  },
  maria: {
    id: "maria",
    name: { ru: "Мария", en: "Maria", zh: "玛丽亚" },
    experience: { ru: "Искусствовед и педагог", en: "Art historian and teacher", zh: "艺术史学家和教师" },
    description: {
      ru: "Искусствовед по диплому, педагог по работе, экскурсовод по аккредитации и фанат Минска по большой любви. Бесконечно влюблена в Минск и Беларусь! Своей страстью хотела бы заразить и Вас, дорогие путешественники! Я не просто рассказываю факты, но и погружаю Вас в атмосферу нашего уникального края.",
      en: "Art historian by diploma, teacher by work, tour guide by accreditation and Minsk fan by great love. Endlessly in love with Minsk and Belarus! I don't just tell facts, but immerse you in the atmosphere of our unique land.",
      zh: "文凭艺术史学家，职业教师，认证导游，热爱明斯克。无尽地爱着明斯克和白俄罗斯！我不仅讲述事实，还让您沉浸在我们独特土地的氛围中。",
    },
    languages: ["Русский"],
    rating: 5,
    tours: 1200,
    images: ["/maria-guide-photo-1.jpg", "/maria-guide-photo-1.jpg", "/maria-guide-photo-1.jpg"],
    specializations: {
      ru: ["Искусство и культура", "Музеи Минска", "Литературные маршруты", "Современный Минск"],
      en: ["Art and Culture", "Minsk Museums", "Literary Routes", "Modern Minsk"],
      zh: ["艺术与文化", "明斯克博物馆", "文学路线", "现代明斯克"],
    },
    popularRoutes: {
      ru: ["Художественная галерея", "Литературный Минск", "Троицкое предместье", "Верхний город"],
      en: ["Art Gallery", "Literary Minsk", "Trinity Suburb", "Upper Town"],
      zh: ["艺术画廊", "文学明斯克", "三一郊区", "上城"],
    },
  },
}

export async function generateStaticParams() {
  return [{ id: "andrey" }, { id: "maria" }]
}

export default function GuidePage() {
  return <GuideDetailPageClient guidesData={guidesData} translations={translations} />
}
