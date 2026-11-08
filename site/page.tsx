
"use client";

import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState<"RU" | "UZ">("RU");
  const [category, setCategory] = useState("sale");
  const [district, setDistrict] = useState("");
  const [notice, setNotice] = useState("");

  const t = {
    RU: {
      tagline: "НЕДВИЖИМОСТЬ ТАШКЕНТА",
      nav: ["Продажа", "Аренда", "Новостройки", "Дома"],
      title: "Найдите пространство",
      accent: "для новой жизни",
      subtitle: "Недвижимость Ташкента. Проверенные предложения, удобный поиск и профессиональное сопровождение.",
      search: "Найти недвижимость",
      location: "Район или ориентир",
      all: "Все районы",
      categories: ["Продажа", "Аренда", "Новостройки", "Дома"],
      section: "Найдите свой вариант",
      sectionText: "Выберите категорию недвижимости",
      contact: "Связаться с нами",
      button: "Подобрать объект",
      footer: "Ваш надёжный партнёр в недвижимости."
    },
    UZ: {
      tagline: "TOSHKENT KO'CHMAS MULKI",
      nav: ["Sotuv", "Ijara", "Yangi qurilishlar", "Hovlilar"],
      title: "Yangi makon",
      accent: "yangi hayot uchun",
      subtitle: "Toshkent ko‘chmas mulki. Qulay qidiruv, ishonchli takliflar va professional xizmat.",
      search: "Ko‘chmas mulkni izlash",
      location: "Tuman yoki mo‘ljal",
      all: "Barcha tumanlar",
      categories: ["Sotuv", "Ijara", "Yangi qurilishlar", "Hovlilar"],
      section: "O‘z variantingizni toping",
      sectionText: "Ko‘chmas mulk turini tanlang",
      contact: "Biz bilan bog‘lanish",
      button: "Taklif tanlash",
      footer: "Ko‘chmas mulk bo‘yicha ishonchli hamkoringiz."
    }
  }[lang];

  const types = ["sale", "rent", "newbuild", "houses"];

  return (
    <main className="min-h-screen bg-[#faf8f7] text-[#252020]">
      <header className="border-b border-[#eadfdf] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="leading-none">
            <div className="text-3xl font-black tracking-[0.12em] text-[#651b2d]">
              A.G.A.
            </div>
            <div className="mt-1 text-[10px] tracking-[0.42em] text-[#76646a]">
              ESTATE
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
            {t.nav.map((item, i) => (
              <button
                key={item}
                onClick={() => setCategory(types[i])}
                className="transition hover:text-[#8a2940]"
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex rounded-full border border-[#eadfdf] p-1 text-xs">
              {(["RU", "UZ"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`rounded-full px-3 py-2 ${
                    lang === l
                      ? "bg-[#651b2d] text-white"
                      : "text-[#6c5b60]"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <a
              href="tel:+998887519999"
              className="hidden rounded-full bg-[#651b2d] px-5 py-3 text-sm text-white transition hover:bg-[#81283e] sm:block"
            >
              +998 88 751 99 99
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#28171e]">
        <div className="absolute -right-32 -top-40 h-[550px] w-[550px] rounded-full border border-white/10" />
        <div className="absolute -right-12 -top-20 h-[400px] w-[400px] rounded-full border border-white/10" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center lg:py-32">
          <div>
            <div className="mb-7 text-xs font-semibold tracking-[0.3em] text-[#d7aab5]">
              {t.tagline}
            </div>
            <h1 className="max-w-2xl text-5xl font-light leading-tight text-white md:text-7xl">
              {t.title}
              <span className="mt-2 block font-semibold text-[#d6a1af]">
                {t.accent}
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/65">
              {t.subtitle}
            </p>
            <div className="mt-9 flex items-center gap-4 text-sm text-white/60">
              <span className="h-px w-12 bg-[#c28b9b]" />
              A.G.A ESTATE
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-7 shadow-2xl backdrop-blur-sm">
            <div className="mb-6 text-xl font-medium text-white">
              {t.search}
            </div>

            <div className="grid grid-cols-2 gap-3">
              {t.categories.map((item, i) => (
                <button
                  key={item}
                  onClick={() => setCategory(types[i])}
                  className={`rounded-xl border px-3 py-4 text-sm transition ${
                    category === types[i]
                      ? "border-[#d6a1af] bg-[#651b2d] text-white"
                      : "border-white/15 bg-white/5 text-white/75 hover:bg-white/10"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <label className="mt-6 block text-xs text-white/60">
              {t.location}
            </label>
            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="mt-2 w-full rounded-xl border border-white/15 bg-[#3b2930] px-4 py-4 text-sm text-white outline-none"
            >
              <option value="">{t.all}</option>
              {["Мирзо-Улугбек", "Юнусабад", "Яккасарай", "Мирабад", "Чиланзар", "Яшнабад"].map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>

            <button
              onClick={() => setNotice(
                lang === "RU"
                  ? "Поиск будет подключён к базе объектов на следующем этапе."
                  : "Qidiruv keyingi bosqichda obyektlar bazasiga ulanadi."
              )}
              className="mt-5 w-full rounded-xl bg-[#b66d80] px-5 py-4 font-semibold text-white transition hover:bg-[#c27e90]"
            >
              {t.button} →
            </button>
            {notice && (
              <p className="mt-3 text-sm leading-6 text-[#e8cbd2]">{notice}</p>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-xs font-semibold tracking-[0.25em] text-[#8b5362]">
          A.G.A ESTATE
        </div>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
          {t.section}
        </h2>
        <p className="mt-3 text-[#786d70]">{t.sectionText}</p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.categories.map((item, i) => (
            <button
              key={item}
              onClick={() => setCategory(types[i])}
              className="group rounded-2xl border border-[#eadfdf] bg-white p-7 text-left transition hover:-translate-y-1 hover:border-[#b66d80] hover:shadow-lg"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f5e9ec] text-2xl text-[#76273c]">
                {["⌂", "↗", "⌂", "⌂"][i]}
              </div>
              <div className="text-lg font-semibold">{item}</div>
              <div className="mt-3 text-sm text-[#8b5362]">
                {lang === "RU" ? "Смотреть предложения" : "Takliflarni ko‘rish"} →
              </div>
            </button>
          ))}
        </div>
      </section>

      <footer className="bg-[#28171e] px-6 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <div className="text-2xl font-black tracking-widest">A.G.A ESTATE</div>
            <p className="mt-2 text-sm text-white/55">{t.footer}</p>
          </div>
          <a href="tel:+998887519999" className="text-sm text-[#e0b3bf]">
            {t.contact}: +998 88 751 99 99
          </a>
        </div>
        <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-5 text-xs text-white/40">
          © 2026 A.G.A Estate. Tashkent, Uzbekistan.
        </div>
      </footer>
    </main>
  );
}
