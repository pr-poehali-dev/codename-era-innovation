import { useState } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

interface FAQ {
  question: string
  answer: string
}

interface QuizQuestion {
  question: string
  options: string[]
}

const HERO_IMAGE = "https://cdn.poehali.dev/projects/a1aa9ab0-3445-4831-9ad4-11b201aa68e3/files/a2458186-6d03-438f-9e75-c3d35380d8f0.jpg"
const JADE_PRODUCTS_IMAGE = "https://cdn.poehali.dev/projects/a1aa9ab0-3445-4831-9ad4-11b201aa68e3/files/4b441b60-347e-431c-b5a4-249681b44090.jpg"
const ARTIFACTS_IMAGE = "https://cdn.poehali.dev/projects/a1aa9ab0-3445-4831-9ad4-11b201aa68e3/files/3d67960d-c7d2-48c3-a6c4-cfbadeed9c47.jpg"

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [quizStep, setQuizStep] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState<number[]>([])
  const [quizDone, setQuizDone] = useState(false)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs: FAQ[] = [
    {
      question: "Это настоящий нефрит или подделка?",
      answer:
        "Каждый камень в нашем магазине — подлинный нефрит (nephrite), добытый в проверенных месторождениях Китая, России и Новой Зеландии. Мы предоставляем сертификаты подлинности и готовы провести независимую экспертизу по вашему запросу. Если вы получили камень и сомневаетесь — мы поможем проверить.",
    },
    {
      question: "Как правильно ухаживать за нефритом?",
      answer:
        "Нефрит — камень на века. Протирайте мягкой тканью без химии. Раз в месяц ополаскивайте в чистой воде и дайте высохнуть естественно. Избегайте резких перепадов температуры и ударов. Энергетически камень можно очищать под проточной водой или на лунном свету.",
    },
    {
      question: "Можно ли носить нефрит каждый день?",
      answer:
        "Да — именно для этого нефрит и ценится. Китайцы тысячелетиями носили нефрит не снимая: считалось, что он становится частью хозяина. Браслет из нефрита со временем приобретает тёплый оттенок от контакта с кожей — это признак живого камня.",
    },
    {
      question: "Как осуществляется доставка и есть ли гарантия?",
      answer:
        "Доставка по всей России курьерской службой, 3–7 рабочих дней. Каждый заказ упакован в традиционную подарочную коробку с сертификатом. Гарантия подлинности — пожизненная. Если по какой-то причине вы разочарованы — вернём деньги в течение 14 дней.",
    },
  ]

  const quizQuestions: QuizQuestion[] = [
    {
      question: "Какова ваша цель?",
      options: ["Украшение для себя", "Подарок близкому", "Коллекционирование", "Духовная практика"],
    },
    {
      question: "Какой цвет нефрита вас привлекает?",
      options: ["Глубокий зелёный", "Нефритовый белый", "Тёмный (чёрный)", "Светлый (мятный)"],
    },
    {
      question: "Какое изделие предпочтёте?",
      options: ["Браслет / бусы", "Подвеска", "Фигура / статуэтка", "Сырой камень"],
    },
  ]

  const jadeTypes = [
    {
      name: "Нефрит зелёный",
      chinese: "青玉",
      desc: "Символ жизни и роста. Самый почитаемый цвет — цвет леса, весны и вечного обновления. Носят для здоровья и гармонии.",
      color: "from-green-900 to-green-700",
    },
    {
      name: "Нефрит белый",
      chinese: "白玉",
      desc: "\"Мутон\" — редкий белый нефрит цвета жира. Символ чистоты и мудрости. Высоко ценился при императорском дворе.",
      color: "from-stone-600 to-stone-400",
    },
    {
      name: "Нефрит тёмный",
      chinese: "墨玉",
      desc: "Цвет глубины и тайны. Защитный камень — отгоняет тёмные энергии. В древности использовался в погребальных ритуалах.",
      color: "from-stone-900 to-stone-700",
    },
    {
      name: "Нефрит vs Жадеит",
      chinese: "玉 vs 翡翠",
      desc: "Нефрит (nephrite) — мягкий, тёплый, «живой». Жадеит — ярче, но жёстче. Китайская традиция чтит именно нефрит — 5000 лет истории.",
      color: "from-emerald-800 to-teal-600",
    },
  ]

  const timeline = [
    {
      year: "5000 до н.э.",
      title: "Эпоха нефрита",
      desc: "Культура Хуншань создаёт первые нефритовые фигуры. Камень считается связью между небом и землёй.",
    },
    {
      year: "2000 до н.э.",
      title: "Ритуальные диски Би",
      desc: "Нефритовые диски би помещали в захоронения императоров — символ бессмертия и путь в иной мир.",
    },
    {
      year: "551 до н.э.",
      title: "Конфуций о нефрите",
      desc: "«В нефрите одиннадцать добродетелей» — доброта, мудрость, смелость, справедливость, чистота...",
    },
    {
      year: "221 до н.э.",
      title: "Первый Emperor",
      desc: "Цинь Шихуан изготавливает из нефрита государственную печать — Хэши Би. Нефрит становится символом власти.",
    },
    {
      year: "Сегодня",
      title: "Живая традиция",
      desc: "Нефрит остаётся самым ценным камнем Китая. Каждый браслет несёт в себе тысячелетнюю историю.",
    },
  ]

  const products = [
    {
      name: "Браслет «Спокойствие»",
      material: "Нефрит зелёный",
      desc: "Цельный браслет из натурального нефрита. Ручная полировка, без красителей.",
      price: "от 12 400 ₽",
      badge: "Хит",
    },
    {
      name: "Подвеска «Дракон»",
      material: "Нефрит тёмный",
      desc: "Резной дракон — символ силы и удачи. Каждая подвеска уникальна.",
      price: "от 8 900 ₽",
      badge: "Ручная работа",
    },
    {
      name: "Фигура «Будда»",
      material: "Нефрит белый",
      desc: "Смеющийся Будда из редкого белого нефрита. Талисман процветания.",
      price: "от 24 000 ₽",
      badge: "Редкий",
    },
    {
      name: "Браслет «Нефритовые бусы»",
      material: "Нефрит зелёный",
      desc: "108 бусин — традиционные чётки. Медитация и гармония.",
      price: "от 18 600 ₽",
      badge: "Для практики",
    },
    {
      name: "Подвеска «Пи Яо»",
      material: "Нефрит светлый",
      desc: "Мифическое существо, привлекающее богатство и отгоняющее несчастья.",
      price: "от 6 700 ₽",
      badge: "Популярное",
    },
    {
      name: "Сырой нефрит",
      material: "Необработанный камень",
      desc: "Натуральный кусок нефрита из Саянских месторождений. Для коллекционеров.",
      price: "от 3 200 ₽",
      badge: "Природный",
    },
  ]

  const trustPoints = [
    {
      icon: "ShieldCheck",
      title: "Сертификат подлинности",
      desc: "Каждый камень сопровождается документом с описанием месторождения и минералогическим анализом.",
    },
    {
      icon: "MapPin",
      title: "Прямые поставки",
      desc: "Работаем напрямую с добытчиками в Китае, России (Саяны) и Новой Зеландии. Без посредников.",
    },
    {
      icon: "Award",
      title: "15 лет экспертизы",
      desc: "Наш эксперт-геммолог лично отбирает каждый камень. Если есть сомнения — камень не попадает к вам.",
    },
    {
      icon: "RotateCcw",
      title: "Гарантия возврата",
      desc: "14 дней на возврат без вопросов. Мы уверены в качестве и хотим, чтобы вы тоже были уверены.",
    },
  ]

  const authenticityChecks = [
    {
      title: "Настоящий нефрит",
      icon: "CheckCircle",
      color: "text-jade-pale",
      borderColor: "border-green-700/40",
      bgColor: "bg-green-900/20",
      checks: [
        { label: "Вес", value: "Тяжёлый, плотный" },
        { label: "Температура", value: "Холодный при касании, медленно нагревается" },
        { label: "Текстура", value: "Гладкая, маслянистая, с прожилками" },
        { label: "Звук", value: "Чистый звон при лёгком ударе" },
        { label: "Свет", value: "Полупрозрачный, неоднородный" },
      ],
    },
    {
      title: "Стекло",
      icon: "XCircle",
      color: "text-red-400",
      borderColor: "border-red-800/40",
      bgColor: "bg-red-900/10",
      checks: [
        { label: "Вес", value: "Лёгкое" },
        { label: "Температура", value: "Быстро нагревается" },
        { label: "Текстура", value: "Идеально гладкое, однородное" },
        { label: "Звук", value: "Глухой, «пустой»" },
        { label: "Свет", value: "Прозрачное, без включений" },
      ],
    },
    {
      title: "Эпоксидная смола",
      icon: "AlertCircle",
      color: "text-amber-400",
      borderColor: "border-amber-800/40",
      bgColor: "bg-amber-900/10",
      checks: [
        { label: "Вес", value: "Очень лёгкая" },
        { label: "Температура", value: "Комнатная сразу" },
        { label: "Текстура", value: "Пластиковая, царапается ногтем" },
        { label: "Звук", value: "Глухой стук" },
        { label: "Свет", value: "Пузырьки, идеально прозрачная" },
      ],
    },
  ]

  const handleQuizAnswer = (optionIndex: number) => {
    const newAnswers = [...quizAnswers, optionIndex]
    setQuizAnswers(newAnswers)
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1)
    } else {
      setQuizDone(true)
    }
  }

  const resetQuiz = () => {
    setQuizStep(0)
    setQuizAnswers([])
    setQuizDone(false)
  }

  const getQuizResult = () => {
    const goal = quizAnswers[0]
    const color = quizAnswers[1]
    const form = quizAnswers[2]
    const colorNames = ["зелёный", "белый", "тёмный", "светлый"]
    const formNames = ["браслет", "подвеску", "фигуру", "сырой камень"]
    const goalTexts = [
      "для себя",
      "в подарок",
      "для коллекции",
      "для духовной практики",
    ]
    return `Нефрит ${colorNames[color]} — ${formNames[form]} ${goalTexts[goal]}`
  }

  return (
    <div
      className="min-h-screen text-white scroll-smooth"
      style={{ background: "linear-gradient(135deg, #0D1F0F 0%, #132B14 40%, #1C1008 100%)" }}
    >
      {/* ══════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════ */}
      <div className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#0D1F0F]" />
          <div className="absolute inset-0 mist-overlay" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          <div
            className="flex items-center gap-3 px-4 py-2 rounded-full"
            style={{
              background: "rgba(13,31,15,0.6)",
              border: "1px solid rgba(200,169,110,0.3)",
              backdropFilter: "blur(12px)",
            }}
          >
            <span className="text-lg" style={{ color: "var(--gold)" }}>⬡</span>
            <span className="font-serif-cn font-medium tracking-widest" style={{ color: "var(--jade-cream)" }}>
              翡翠之家 · Дом Нефрита
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {["Философия", "История", "Виды", "Каталог", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 rounded-full transition-all text-sm"
                style={{
                  background: "rgba(13,31,15,0.5)",
                  border: "1px solid rgba(200,169,110,0.2)",
                  backdropFilter: "blur(8px)",
                  color: "var(--jade-cream)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(200,169,110,0.5)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(200,169,110,0.2)"
                }}
              >
                {item}
              </a>
            ))}
          </div>

          <Button
            className="rounded-full px-6 font-medium"
            style={{
              background: "var(--gold)",
              color: "var(--jade-deep)",
            }}
          >
            Смотреть коллекцию
          </Button>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-100px)] px-6 text-center">
          <div
            className="mb-6 px-5 py-2 rounded-full text-sm tracking-widest font-serif-cn"
            style={{
              background: "rgba(13,31,15,0.6)",
              border: "1px solid rgba(200,169,110,0.35)",
              backdropFilter: "blur(12px)",
              color: "var(--gold-light)",
            }}
          >
            ✦ Натуральный нефрит · 5000 лет истории ✦
          </div>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-4 text-balance font-serif-cn"
            style={{ color: "var(--jade-cream)" }}
          >
            Камень вечности
          </h1>

          <div className="ornament-line w-full max-w-md mb-6">
            <span className="font-serif-cn text-2xl" style={{ color: "var(--gold)" }}>玉</span>
          </div>

          <p
            className="text-xl md:text-2xl max-w-3xl mb-4 leading-relaxed font-serif-cn font-light"
            style={{ color: "rgba(232,245,233,0.85)" }}
          >
            Нефрит — символ чистоты, силы и долголетия в китайской традиции
          </p>
          <p
            className="text-base md:text-lg max-w-2xl mb-12 leading-relaxed"
            style={{ color: "rgba(232,245,233,0.6)" }}
          >
            Натуральный нефрит из проверенных месторождений. Каждый камень — с сертификатом подлинности.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button
              size="lg"
              className="rounded-full px-10 py-4 text-lg font-medium"
              style={{ background: "var(--gold)", color: "var(--jade-deep)" }}
            >
              Смотреть коллекцию
            </Button>
            <Button
              size="lg"
              className="rounded-full px-10 py-4 text-lg border-0"
              style={{
                background: "rgba(13,31,15,0.5)",
                border: "1px solid rgba(200,169,110,0.3)",
                color: "var(--jade-cream)",
                backdropFilter: "blur(8px)",
              }}
            >
              Подобрать нефрит
            </Button>
          </div>

          <div
            className="flex items-center gap-2 px-5 py-2 rounded-full text-sm"
            style={{
              background: "rgba(13,31,15,0.5)",
              border: "1px solid rgba(200,169,110,0.2)",
              backdropFilter: "blur(8px)",
              color: "rgba(232,245,233,0.7)",
            }}
          >
            <Icon name="ShieldCheck" size={16} style={{ color: "var(--gold)" }} />
            <span>Сертификат подлинности с каждым заказом</span>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          PHILOSOPHY SECTION
      ══════════════════════════════════════ */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(45,106,48,0.12) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="chinese-seal mb-8">道 · Путь нефрита</div>
              <h2
                className="text-4xl md:text-5xl font-light mb-8 font-serif-cn leading-tight"
                style={{ color: "var(--jade-cream)" }}
              >
                Больше чем камень.
                <br />
                <span style={{ color: "var(--gold)" }}>Голос вечности.</span>
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(232,245,233,0.75)" }}>
                В китайской традиции нефрит — не просто украшение. Это живой камень, вбирающий энергию хозяина. «Золото имеет цену, нефрит — бесценен» — говорит китайская пословица, которой уже три тысячи лет.
              </p>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(232,245,233,0.75)" }}>
                Даосы верили, что нефрит концентрирует ци — жизненную силу. Буддисты нанизывали нефритовые бусины для медитации. Конфуций назвал в нём одиннадцать добродетелей мудреца.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "rgba(232,245,233,0.75)" }}>
                Когда вы надеваете нефрит — вы прикасаетесь к этому потоку. Камень становится проводником между вами и тысячелетней мудростью.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "Heart", title: "Гармония", desc: "Баланс инь и ян. Нефрит уравновешивает внутренние энергии." },
                { icon: "Shield", title: "Защита", desc: "Традиционный оберег от злых духов и негативных влияний." },
                { icon: "Star", title: "Долголетие", desc: "Символ бессмертия. Императоры пили воду с нефритом." },
                { icon: "Gem", title: "Мудрость", desc: "Камень учёных и правителей. Ясность ума и суждений." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl p-6 jade-card jade-card-hover"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "rgba(200,169,110,0.15)", border: "1px solid rgba(200,169,110,0.3)" }}
                  >
                    <Icon name={item.icon} size={20} style={{ color: "var(--gold)" }} />
                  </div>
                  <h3 className="font-semibold mb-2 font-serif-cn" style={{ color: "var(--jade-cream)" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(232,245,233,0.65)" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HISTORY TIMELINE SECTION
      ══════════════════════════════════════ */}
      <section className="relative py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-3xl p-12 md:p-16"
            style={{
              background: "rgba(19,43,20,0.4)",
              border: "1px solid rgba(200,169,110,0.2)",
              backdropFilter: "blur(16px)",
            }}
          >
            <div className="text-center mb-16">
              <div className="chinese-seal mb-6">史 · История</div>
              <h2
                className="text-4xl md:text-6xl font-light mb-6 font-serif-cn"
                style={{ color: "var(--jade-cream)" }}
              >
                5000 лет
                <span style={{ color: "var(--gold)" }}> у власти</span>
              </h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: "rgba(232,245,233,0.7)" }}>
                От шаманских ритуалов до императорских церемоний — нефрит всегда в центре китайской цивилизации
              </p>
            </div>

            <div className="relative">
              <div
                className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
                style={{ background: "linear-gradient(to bottom, transparent, var(--gold-dark), transparent)" }}
              />
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row gap-6 md:gap-12 items-start ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div
                        className="inline-block rounded-2xl p-6 jade-card jade-card-hover"
                        style={{ maxWidth: "360px" }}
                      >
                        <div className="text-sm font-cinzel mb-2" style={{ color: "var(--gold)" }}>{item.year}</div>
                        <h3 className="text-lg font-semibold mb-2 font-serif-cn" style={{ color: "var(--jade-cream)" }}>{item.title}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: "rgba(232,245,233,0.7)" }}>{item.desc}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center justify-center w-8 shrink-0">
                      <div
                        className="w-4 h-4 rounded-full border-2"
                        style={{
                          background: "var(--gold-dark)",
                          borderColor: "var(--gold)",
                          boxShadow: "0 0 12px rgba(200,169,110,0.5)",
                        }}
                      />
                    </div>
                    <div className="flex-1" />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 relative rounded-2xl overflow-hidden" style={{ height: "320px" }}>
              <img src={ARTIFACTS_IMAGE} alt="Нефритовые артефакты" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <p className="font-serif-cn text-lg" style={{ color: "var(--jade-cream)" }}>
                  Нефритовые артефакты — живые свидетели истории
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          JADE TYPES SECTION
      ══════════════════════════════════════ */}
      <section className="relative py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="chinese-seal mb-6">玉 · Виды нефрита</div>
            <h2
              className="text-4xl md:text-6xl font-light mb-6 font-serif-cn"
              style={{ color: "var(--jade-cream)" }}
            >
              Каждый цвет —
              <span style={{ color: "var(--gold)" }}> своя судьба</span>
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: "rgba(232,245,233,0.7)" }}>
              В китайской традиции цвет нефрита определяет его энергию и предназначение
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jadeTypes.map((type) => (
              <div
                key={type.name}
                className="rounded-2xl overflow-hidden jade-card jade-card-hover"
              >
                <div className={`h-2 bg-gradient-to-r ${type.color}`} />
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold font-serif-cn mb-1" style={{ color: "var(--jade-cream)" }}>{type.name}</h3>
                    </div>
                    <span
                      className="text-3xl font-serif-cn font-light"
                      style={{ color: "var(--gold)", opacity: 0.6 }}
                    >
                      {type.chinese}
                    </span>
                  </div>
                  <p className="leading-relaxed" style={{ color: "rgba(232,245,233,0.75)" }}>{type.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          AUTHENTICITY SECTION
      ══════════════════════════════════════ */}
      <section className="relative py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-3xl p-12"
            style={{
              background: "rgba(19,43,20,0.4)",
              border: "1px solid rgba(200,169,110,0.2)",
              backdropFilter: "blur(16px)",
            }}
          >
            <div className="text-center mb-16">
              <div className="chinese-seal mb-6">真 · Подлинность</div>
              <h2
                className="text-4xl md:text-5xl font-light mb-6 font-serif-cn"
                style={{ color: "var(--jade-cream)" }}
              >
                Как отличить
                <span style={{ color: "var(--gold)" }}> настоящий нефрит</span>
              </h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: "rgba(232,245,233,0.7)" }}>
                Практическое руководство от наших экспертов-геммологов
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {authenticityChecks.map((check) => (
                <div
                  key={check.title}
                  className={`rounded-2xl p-6 ${check.bgColor}`}
                  style={{ border: `1px solid`, borderColor: check.borderColor.replace("border-", "").replace("/40", "") }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Icon name={check.icon} size={24} className={check.color} />
                    <h3 className="text-lg font-semibold font-serif-cn" style={{ color: "var(--jade-cream)" }}>{check.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {check.checks.map((c) => (
                      <div key={c.label} className="flex flex-col gap-1">
                        <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--gold-dark)" }}>{c.label}</span>
                        <span className="text-sm" style={{ color: "rgba(232,245,233,0.8)" }}>{c.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CATALOG SECTION
      ══════════════════════════════════════ */}
      <section className="relative py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="chinese-seal mb-6">店 · Коллекция</div>
            <h2
              className="text-4xl md:text-6xl font-light mb-6 font-serif-cn"
              style={{ color: "var(--jade-cream)" }}
            >
              Избранное
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: "rgba(232,245,233,0.7)" }}>
              Каждое изделие — ручная работа, натуральный камень, сертификат подлинности
            </p>
          </div>

          <div className="mb-10 rounded-2xl overflow-hidden" style={{ height: "280px" }}>
            <img src={JADE_PRODUCTS_IMAGE} alt="Коллекция нефрита" className="w-full h-full object-cover" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.name}
                className="rounded-2xl jade-card jade-card-hover overflow-hidden"
              >
                <div
                  className="h-40 flex items-center justify-center"
                  style={{ background: "rgba(13,31,15,0.8)" }}
                >
                  <div className="text-center">
                    <Icon name="Gem" size={40} style={{ color: "var(--jade-light)" }} />
                    <p className="text-xs mt-2 font-serif-cn" style={{ color: "var(--gold)" }}>{product.material}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold font-serif-cn" style={{ color: "var(--jade-cream)" }}>{product.name}</h3>
                    <span
                      className="text-xs px-2 py-1 rounded-full shrink-0 ml-2"
                      style={{
                        background: "rgba(200,169,110,0.15)",
                        color: "var(--gold)",
                        border: "1px solid rgba(200,169,110,0.3)",
                      }}
                    >
                      {product.badge}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(232,245,233,0.65)" }}>{product.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold" style={{ color: "var(--gold)" }}>{product.price}</span>
                    <Button
                      size="sm"
                      className="rounded-full text-xs px-4"
                      style={{ background: "var(--gold)", color: "var(--jade-deep)" }}
                    >
                      Выбрать
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="rounded-full px-12"
              style={{
                background: "rgba(13,31,15,0.5)",
                border: "1px solid rgba(200,169,110,0.35)",
                color: "var(--jade-cream)",
              }}
            >
              Смотреть всю коллекцию
            </Button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TRUST SECTION
      ══════════════════════════════════════ */}
      <section className="relative py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-3xl p-12"
            style={{
              background: "rgba(19,43,20,0.35)",
              border: "1px solid rgba(200,169,110,0.2)",
              backdropFilter: "blur(16px)",
            }}
          >
            <div className="text-center mb-16">
              <div className="chinese-seal mb-6">信 · Доверие</div>
              <h2
                className="text-4xl md:text-5xl font-light mb-6 font-serif-cn"
                style={{ color: "var(--jade-cream)" }}
              >
                Почему нам
                <span style={{ color: "var(--gold)" }}> доверяют</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {trustPoints.map((point) => (
                <div
                  key={point.title}
                  className="rounded-2xl p-8 jade-card jade-card-hover flex gap-6"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(200,169,110,0.15)", border: "1px solid rgba(200,169,110,0.3)" }}
                  >
                    <Icon name={point.icon} size={22} style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 font-serif-cn" style={{ color: "var(--jade-cream)" }}>{point.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(232,245,233,0.7)" }}>{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          QUIZ SECTION
      ══════════════════════════════════════ */}
      <section className="relative py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-3xl p-12 text-center"
            style={{
              background: "rgba(19,43,20,0.5)",
              border: "1px solid rgba(200,169,110,0.25)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="chinese-seal mb-6">问 · Квиз</div>
            <h2
              className="text-3xl md:text-4xl font-light mb-4 font-serif-cn"
              style={{ color: "var(--jade-cream)" }}
            >
              Подберите свой нефрит
            </h2>
            <p className="mb-10" style={{ color: "rgba(232,245,233,0.65)" }}>
              Три вопроса — и мы найдём камень, созданный для вас
            </p>

            {!quizDone ? (
              <>
                <div className="flex justify-center gap-2 mb-8">
                  {quizQuestions.map((_, i) => (
                    <div
                      key={i}
                      className="h-1 w-16 rounded-full transition-all"
                      style={{
                        background: i <= quizStep ? "var(--gold)" : "rgba(200,169,110,0.2)",
                      }}
                    />
                  ))}
                </div>
                <p className="text-xl font-serif-cn mb-8" style={{ color: "var(--jade-cream)" }}>
                  {quizQuestions[quizStep].question}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {quizQuestions[quizStep].options.map((option, i) => (
                    <button
                      key={i}
                      onClick={() => handleQuizAnswer(i)}
                      className="quiz-option rounded-xl p-4 text-left"
                      style={{
                        background: "rgba(13,31,15,0.5)",
                        border: "1px solid rgba(200,169,110,0.2)",
                        color: "var(--jade-cream)",
                      }}
                    >
                      <span className="text-sm" style={{ color: "var(--gold)" }}>{String.fromCharCode(65 + i)}.</span>
                      <span className="ml-2">{option}</span>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="animate-fade-up">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ background: "rgba(200,169,110,0.15)", border: "2px solid var(--gold)" }}
                >
                  <Icon name="Gem" size={36} style={{ color: "var(--gold)" }} />
                </div>
                <h3 className="text-2xl font-serif-cn mb-3" style={{ color: "var(--jade-cream)" }}>
                  Ваш камень:
                </h3>
                <p className="text-xl mb-6" style={{ color: "var(--gold)" }}>
                  {getQuizResult()}
                </p>
                <p className="mb-8" style={{ color: "rgba(232,245,233,0.65)" }}>
                  Наш эксперт поможет выбрать идеальный экземпляр из текущей коллекции
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="rounded-full px-8"
                    style={{ background: "var(--gold)", color: "var(--jade-deep)" }}
                  >
                    Получить консультацию
                  </Button>
                  <Button
                    variant="outline"
                    onClick={resetQuiz}
                    className="rounded-full px-8 border-0"
                    style={{
                      background: "rgba(13,31,15,0.5)",
                      border: "1px solid rgba(200,169,110,0.25)",
                      color: "var(--jade-cream)",
                    }}
                  >
                    Пройти снова
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA SECTION
      ══════════════════════════════════════ */}
      <section className="relative py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="chinese-seal mb-6">缘 · Предназначение</div>
          <h2
            className="text-4xl md:text-6xl font-light mb-6 font-serif-cn leading-tight"
            style={{ color: "var(--jade-cream)" }}
          >
            Выберите камень,
            <br />
            <span style={{ color: "var(--gold)" }}>который останется с вами на годы</span>
          </h2>
          <p className="text-xl mb-12 leading-relaxed" style={{ color: "rgba(232,245,233,0.7)" }}>
            Нефрит — не покупка. Это встреча. Позвольте нам помочь найти тот самый камень.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="rounded-full px-12 py-4 text-lg"
              style={{ background: "var(--gold)", color: "var(--jade-deep)" }}
            >
              Подобрать нефрит
            </Button>
            <Button
              size="lg"
              className="rounded-full px-12 py-4 text-lg border-0"
              style={{
                background: "rgba(19,43,20,0.5)",
                border: "1px solid rgba(200,169,110,0.3)",
                color: "var(--jade-cream)",
              }}
            >
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FAQ SECTION
      ══════════════════════════════════════ */}
      <section className="relative py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-3xl p-12"
            style={{
              background: "rgba(19,43,20,0.35)",
              border: "1px solid rgba(200,169,110,0.2)",
              backdropFilter: "blur(16px)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="chinese-seal mb-6">问答 · Вопросы</div>
                <h2
                  className="text-4xl md:text-5xl font-light mb-6 font-serif-cn"
                  style={{ color: "var(--jade-cream)" }}
                >
                  Частые вопросы
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: "rgba(232,245,233,0.7)" }}>
                  Всё, что важно знать перед покупкой. Если остались вопросы — напишите нам, ответим в течение часа.
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl overflow-hidden jade-card"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between transition-all"
                      style={{ color: "var(--jade-cream)" }}
                    >
                      <h3 className="text-base font-semibold pr-4 font-serif-cn">{faq.question}</h3>
                      <Icon
                        name={openFaq === index ? "Minus" : "Plus"}
                        size={18}
                        className="shrink-0"
                        style={{ color: "var(--gold)" }}
                      />
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-sm leading-relaxed" style={{ color: "rgba(232,245,233,0.75)" }}>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTACT SECTION
      ══════════════════════════════════════ */}
      <section className="relative py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-3xl p-12"
            style={{
              background: "rgba(13,31,15,0.5)",
              border: "1px solid rgba(200,169,110,0.2)",
              backdropFilter: "blur(16px)",
            }}
          >
            <div className="text-center mb-16">
              <div className="chinese-seal mb-6">联 · Связь</div>
              <h2
                className="text-4xl md:text-5xl font-light mb-4 font-serif-cn"
                style={{ color: "var(--jade-cream)" }}
              >
                Свяжитесь с экспертом
              </h2>
              <p style={{ color: "rgba(232,245,233,0.65)" }}>
                Поможем подобрать камень, ответим на вопросы о подлинности
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div
                className="rounded-2xl p-8"
                style={{ background: "var(--jade-cream)", color: "var(--jade-deep)" }}
              >
                <h3 className="text-2xl font-bold mb-6 font-serif-cn">Отправить запрос</h3>
                <form className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "var(--jade-mid)" }}>Имя</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2"
                      style={{
                        borderColor: "rgba(26,61,27,0.2)",
                        background: "white",
                        focusRingColor: "var(--jade-green)",
                      }}
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "var(--jade-mid)" }}>Телефон / Email</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2"
                      style={{ borderColor: "rgba(26,61,27,0.2)", background: "white" }}
                      placeholder="+7 (999) 000-00-00"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "var(--jade-mid)" }}>Вопрос или пожелание</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 resize-none"
                      style={{ borderColor: "rgba(26,61,27,0.2)", background: "white" }}
                      placeholder="Расскажите, что ищете..."
                    />
                  </div>
                  <Button
                    className="w-full rounded-xl py-3 font-medium"
                    style={{ background: "var(--jade-green)", color: "white" }}
                  >
                    Отправить сообщение
                  </Button>
                </form>
              </div>

              <div className="space-y-8">
                <p className="text-xl leading-relaxed" style={{ color: "rgba(232,245,233,0.8)" }}>
                  Наш эксперт-геммолог с 15-летним опытом поможет найти именно ваш камень. Мы не торопим и не давим — только знания и искренний совет.
                </p>

                <div className="space-y-4">
                  {[
                    { icon: "MessageCircle", text: "Telegram / WhatsApp — ответ в течение часа" },
                    { icon: "Mail", text: "info@jade-house.ru — для официальных запросов" },
                    { icon: "MapPin", text: "Москва, шоурум — по предварительной записи" },
                  ].map((c) => (
                    <div key={c.text} className="flex items-center gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: "rgba(200,169,110,0.15)", border: "1px solid rgba(200,169,110,0.3)" }}
                      >
                        <Icon name={c.icon} size={18} style={{ color: "var(--gold)" }} />
                      </div>
                      <span style={{ color: "rgba(232,245,233,0.75)" }}>{c.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FOOTER
      ══════════════════════════════════════ */}
      <footer className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-3xl p-12"
            style={{
              background: "rgba(13,31,15,0.3)",
              border: "1px solid rgba(200,169,110,0.15)",
              backdropFilter: "blur(16px)",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl" style={{ color: "var(--gold)" }}>⬡</span>
                  <span className="text-xl font-semibold font-serif-cn" style={{ color: "var(--jade-cream)" }}>
                    翡翠之家 · Дом Нефрита
                  </span>
                </div>
                <p className="leading-relaxed mb-6" style={{ color: "rgba(232,245,233,0.65)" }}>
                  Натуральный нефрит из проверенных источников. Сертифицированные изделия, ручная работа, традиция, проверенная веками.
                </p>
                <div
                  className="flex gap-1 rounded-full overflow-hidden"
                  style={{ border: "1px solid rgba(200,169,110,0.25)" }}
                >
                  <input
                    type="email"
                    placeholder="Ваш email для редких новинок"
                    className="flex-1 bg-transparent px-4 py-3 text-sm outline-none"
                    style={{ color: "var(--jade-cream)" }}
                  />
                  <Button
                    className="rounded-full m-1 px-5 text-sm"
                    style={{ background: "var(--gold)", color: "var(--jade-deep)" }}
                  >
                    Подписаться
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-5 font-serif-cn" style={{ color: "var(--gold)" }}>Коллекция</h4>
                <ul className="space-y-3">
                  {["Браслеты", "Подвески", "Фигуры", "Сырой нефрит", "Редкие экземпляры"].map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm transition-colors hover:opacity-100" style={{ color: "rgba(232,245,233,0.6)" }}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-5 font-serif-cn" style={{ color: "var(--gold)" }}>О нефрите</h4>
                <ul className="space-y-3">
                  {["Философия камня", "Как выбрать", "Уход за нефритом", "Сертификаты", "Блог"].map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm transition-colors hover:opacity-100" style={{ color: "rgba(232,245,233,0.6)" }}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
              style={{ borderTop: "1px solid rgba(200,169,110,0.15)" }}
            >
              <p className="text-sm" style={{ color: "rgba(232,245,233,0.4)" }}>
                © 2024 Дом Нефрита · 翡翠之家 · Все права защищены
              </p>
              <div className="flex gap-6">
                {["Политика конфиденциальности", "Условия возврата"].map((link) => (
                  <a key={link} href="#" className="text-sm" style={{ color: "rgba(232,245,233,0.4)" }}>
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
