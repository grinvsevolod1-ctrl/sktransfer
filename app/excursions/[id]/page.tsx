import ExcursionDetailPageClient from "./excursion-client"
import { translations } from "@/lib/i18n"

const excursionsData = {
  "minsk-city-tour": {
    id: "minsk-city-tour",
    name: {
      ru: "Обзорная экскурсия по Минску",
      en: "Minsk City Tour",
      zh: "明斯克城市游",
    },
    description: {
      ru: "Познакомьтесь с главными достопримечательностями столицы Беларуси. Увидите проспект Независимости, Троицкое предместье, Верхний город и многое другое.",
      en: "Discover the main attractions of Belarus capital. See Independence Avenue, Trinity Suburb, Upper Town and much more.",
      zh: "探索白俄罗斯首都的主要景点。参观独立大道、三一郊区、上城等。",
    },
    duration: { ru: "3 часа", en: "3 hours", zh: "3小时" },
    groupSize: { ru: "до 15 человек", en: "up to 15 people", zh: "最多15人" },
    price: { ru: "стоимость по согласованию", en: "price by agreement", zh: "价格协商" },
    images: [
      "/minsk-city-tour-architecture.jpg",
      "/minsk-independence-avenue.jpg",
      "/minsk-trinity-suburb.jpg",
      "/minsk-upper-town-view.jpg",
    ],
    highlights: {
      ru: [
        "Проспект Независимости",
        "Площадь Независимости",
        "Троицкое предместье",
        "Верхний город",
        "Остров слёз",
        "Национальная библиотека",
      ],
      en: [
        "Independence Avenue",
        "Independence Square",
        "Trinity Suburb",
        "Upper Town",
        "Island of Tears",
        "National Library",
      ],
      zh: ["独立大道", "独立广场", "三一郊区", "上城", "泪之岛", "国家图书馆"],
    },
    included: {
      ru: ["Трансфер", "Профессиональный гид", "Входные билеты"],
      en: ["Transfer", "Professional guide", "Entrance tickets"],
      zh: ["接送", "专业导游", "门票"],
    },
  },
  "brest-fortress": {
    id: "brest-fortress",
    name: {
      ru: "Брестская крепость",
      en: "Brest Fortress",
      zh: "布列斯特要塞",
    },
    description: {
      ru: "Посетите легендарную Брестскую крепость - символ мужества и героизма защитников в первые дни Великой Отечественной войны.",
      en: "Visit the legendary Brest Fortress - a symbol of courage and heroism of defenders in the first days of WWII.",
      zh: "参观传奇的布列斯特要塞 - 二战初期保卫者勇气和英雄主义的象征。",
    },
    duration: { ru: "Полный день", en: "Full day", zh: "全天" },
    groupSize: { ru: "до 20 человек", en: "up to 20 people", zh: "最多20人" },
    price: { ru: "стоимость по согласованию", en: "price by agreement", zh: "价格协商" },
    images: [
      "/brest-fortress-memorial-belarus.jpg",
      "/brest-fortress-entrance.jpg",
      "/brest-fortress-monument.jpg",
      "/brest-fortress-museum.jpg",
    ],
    highlights: {
      ru: [
        "Мемориальный комплекс",
        "Музей обороны",
        "Монумент 'Мужество'",
        "Холмские ворота",
        "Руины казарм",
        "Вечный огонь",
      ],
      en: ["Memorial Complex", "Defense Museum", "Courage Monument", "Kholm Gate", "Barracks Ruins", "Eternal Flame"],
      zh: ["纪念建筑群", "防御博物馆", "勇气纪念碑", "霍尔姆门", "兵营废墟", "永恒之火"],
    },
    included: {
      ru: ["Трансфер из Минска", "Профессиональный гид", "Входные билеты", "Обед"],
      en: ["Transfer from Minsk", "Professional guide", "Entrance tickets", "Lunch"],
      zh: ["从明斯克接送", "专业导游", "门票", "午餐"],
    },
  },
  "mir-nesvizh": {
    id: "mir-nesvizh",
    name: {
      ru: "Мирский и Несвижский замки",
      en: "Mir and Nesvizh Castles",
      zh: "米尔和涅斯维日城堡",
    },
    description: {
      ru: "Посетите два величественных замка, включенных в список Всемирного наследия ЮНЕСКО. Узнайте историю рода Радзивиллов.",
      en: "Visit two magnificent castles included in the UNESCO World Heritage List. Learn about the history of the Radziwill family.",
      zh: "参观两座被列入联合国教科文组织世界遗产名录的宏伟城堡。了解拉济维乌家族的历史。",
    },
    duration: { ru: "Полный день", en: "Full day", zh: "全天" },
    groupSize: { ru: "до 15 человек", en: "up to 15 people", zh: "最多15人" },
    price: { ru: "стоимость по согласованию", en: "price by agreement", zh: "价格协商" },
    images: [
      "/nesvizh-castle-belarus-unesco.jpg",
      "/mir-castle-belarus.jpg",
      "/nesvizh-castle-interior.jpg",
      "/mir-castle-towers.jpg",
    ],
    highlights: {
      ru: [
        "Мирский замок XVI века",
        "Несвижский дворцово-парковый ансамбль",
        "Фарный костёл",
        "Парк и озеро",
        "Музейные экспозиции",
        "Дегустация местной кухни",
      ],
      en: [
        "Mir Castle XVI century",
        "Nesvizh Palace Complex",
        "Farny Church",
        "Park and Lake",
        "Museum Exhibitions",
        "Local Cuisine Tasting",
      ],
      zh: ["16世纪米尔城堡", "涅斯维日宫殿建筑群", "法尔内教堂", "公园和湖泊", "博物馆展览", "当地美食品尝"],
    },
    included: {
      ru: ["Трансфер из Минска", "Профессиональный гид", "Входные билеты", "Обед"],
      en: ["Transfer from Minsk", "Professional guide", "Entrance tickets", "Lunch"],
      zh: ["从明斯克接送", "专业导游", "门票", "午餐"],
    },
  },
  "khatyn-memorial": {
    id: "khatyn-memorial",
    name: {
      ru: "Мемориальный комплекс Хатынь",
      en: "Khatyn Memorial Complex",
      zh: "哈廷纪念建筑群",
    },
    description: {
      ru: "Посетите трогательный мемориал памяти 149 белорусских деревень, сожженных вместе с жителями в годы войны.",
      en: "Visit the touching memorial dedicated to 149 Belarusian villages burned with their inhabitants during the war.",
      zh: "参观纪念战争期间与居民一起被烧毁的149个白俄罗斯村庄的感人纪念馆。",
    },
    duration: { ru: "4-5 часов", en: "4-5 hours", zh: "4-5小时" },
    groupSize: { ru: "до 20 человек", en: "up to 20 people", zh: "最多20人" },
    price: { ru: "стоимость по согласованию", en: "price by agreement", zh: "价格协商" },
    images: [
      "/khatyn-memorial-belarus.jpg",
      "/khatyn-eternal-flame.jpg",
      "/khatyn-cemetery-villages.jpg",
      "/khatyn-bells.jpg",
    ],
    highlights: {
      ru: [
        "Скульптура 'Непокоренный человек'",
        "Символические трубы-колокола",
        "Кладбище деревень",
        "Вечный огонь",
        "Музей истории Хатыни",
        "Стена памяти",
      ],
      en: [
        "Unconquered Man Sculpture",
        "Symbolic Bell-Chimneys",
        "Cemetery of Villages",
        "Eternal Flame",
        "Khatyn History Museum",
        "Memorial Wall",
      ],
      zh: ["不屈的人雕塑", "象征性的钟烟囱", "村庄公墓", "永恒之火", "哈廷历史博物馆", "纪念墙"],
    },
    included: {
      ru: ["Трансфер из Минска", "Профессиональный гид", "Входные билеты"],
      en: ["Transfer from Minsk", "Professional guide", "Entrance tickets"],
      zh: ["从明斯克接送", "专业导游", "门票"],
    },
  },
  "dudutki-museum": {
    id: "dudutki-museum",
    name: {
      ru: "Музей народных ремесел Дудутки",
      en: "Dudutki Folk Crafts Museum",
      zh: "杜杜特基民间工艺博物馆",
    },
    description: {
      ru: "Окунитесь в атмосферу старинной белорусской деревни. Попробуйте национальные блюда и увидите работу мастеров.",
      en: "Immerse yourself in the atmosphere of an old Belarusian village. Try national dishes and see craftsmen at work.",
      zh: "沉浸在古老的白俄罗斯村庄的氛围中。品尝民族美食，观看工匠工作。",
    },
    duration: { ru: "4-5 часов", en: "4-5 hours", zh: "4-5小时" },
    groupSize: { ru: "до 15 человек", en: "up to 15 people", zh: "最多15人" },
    price: { ru: "стоимость по согласованию", en: "price by agreement", zh: "价格协商" },
    images: [
      "/dudutki-museum-belarus-crafts.jpg",
      "/dudutki-windmill.jpg",
      "/dudutki-pottery-workshop.jpg",
      "/dudutki-traditional-cuisine.jpg",
    ],
    highlights: {
      ru: [
        "Ветряная мельница",
        "Кузница и гончарная мастерская",
        "Дегустация самогона и сыра",
        "Конная прогулка",
        "Мини-зоопарк",
        "Традиционная кухня",
      ],
      en: [
        "Windmill",
        "Blacksmith and Pottery",
        "Moonshine and Cheese Tasting",
        "Horse Ride",
        "Mini Zoo",
        "Traditional Cuisine",
      ],
      zh: ["风车", "铁匠和陶器", "月光酒和奶酪品尝", "骑马", "迷你动物园", "传统美食"],
    },
    included: {
      ru: ["Трансфер из Минска", "Профессиональный гид", "Входные билеты", "Дегустация", "Обед"],
      en: ["Transfer from Minsk", "Professional guide", "Entrance tickets", "Tasting", "Lunch"],
      zh: ["从明斯克接送", "专业导游", "门票", "品尝", "午餐"],
    },
  },
  "belovezhskaya-pushcha": {
    id: "belovezhskaya-pushcha",
    name: {
      ru: "Беловежская пуща",
      en: "Belovezhskaya Pushcha",
      zh: "别洛韦日森林",
    },
    description: {
      ru: "Посетите древнейший лес Европы, объект Всемирного наследия ЮНЕСКО. Увидите зубров и резиденцию белорусского Деда Мороза.",
      en: "Visit Europe's oldest forest, a UNESCO World Heritage site. See bison and the Belarusian Santa Claus residence.",
      zh: "参观欧洲最古老的森林，联合国教科文组织世界遗产。观看野牛和白俄罗斯圣诞老人的住所。",
    },
    duration: { ru: "Полный день", en: "Full day", zh: "全天" },
    groupSize: { ru: "до 15 человек", en: "up to 15 people", zh: "最多15人" },
    price: { ru: "стоимость по согласованию", en: "price by agreement", zh: "价格协商" },
    images: [
      "/belovezhskaya-pushcha-forest.jpg",
      "/belovezhskaya-pushcha-bison.jpg",
      "/belovezhskaya-pushcha-ded-moroz.jpg",
      "/belovezhskaya-pushcha-nature.jpg",
    ],
    highlights: {
      ru: [
        "Музей природы",
        "Вольеры с зубрами и другими животными",
        "Поместье Деда Мороза",
        "Экологические тропы",
        "Древние дубы",
        "Обед в ресторане",
      ],
      en: [
        "Nature Museum",
        "Bison and Wildlife Enclosures",
        "Santa Claus Estate",
        "Ecological Trails",
        "Ancient Oaks",
        "Restaurant Lunch",
      ],
      zh: ["自然博物馆", "野牛和野生动物围栏", "圣诞老人庄园", "生态小径", "古橡树", "餐厅午餐"],
    },
    included: {
      ru: ["Трансфер из Минска", "Профессиональный гид", "Входные билеты", "Обед"],
      en: ["Transfer from Minsk", "Professional guide", "Entrance tickets", "Lunch"],
      zh: ["从明斯克接送", "专业导游", "门票", "午餐"],
    },
  },
}

export async function generateStaticParams() {
  return Object.keys(excursionsData).map((id) => ({ id }))
}

export default function ExcursionPage() {
  return <ExcursionDetailPageClient excursionsData={excursionsData} translations={translations} />
}
