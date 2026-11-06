"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { properties, categoryLabels } from "../lib/properties";

const categories = [
  { id: "all", label: "Все объекты" },
  { id: "sale", label: "Продажа" },
  { id: "rent", label: "Аренда" },
  { id: "newbuild", label: "Новостройки" },
  { id: "houses", label: "Дома" },
];

export default function CatalogPage() {
  const [category, setCategory] = useState("all");
  const [rooms, setRooms] = useState("Любое количество");
  const [maxPrice, setMaxPrice] = useState("");
  const [minArea, setMinArea] = useState("");
  const [maxFloor, setMaxFloor] = useState("");

  const filteredProperties = useMemo(() => properties.filter((property) => {
    return (
      (category === "all" || property.category === category) &&
      (rooms === "Любое количество" || property.rooms === Number(rooms)) &&
      (maxPrice === "" || property.price <= Number(maxPrice)) &&
      (minArea === "" || property.area >= Number(minArea)) &&
      (maxFloor === "" || property.floor <= Number(maxFloor))
    );
  }), [category, rooms, maxPrice, minArea, maxFloor]);

  return (
    <main className="min-h-screen bg-[#faf7f7] text-[#25171d]">
      <header className="border-b border-[#eadde1] bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-bold tracking-[0.18em] text-[#781e38]">
            A.G.A.<span className="block text-[9px] tracking-[0.55em]">ESTATE</span>
          </Link>
          <nav className="flex flex-wrap items-center gap-5 text-sm">
            <Link href="/" className="hover:text-[#a34d68]">Главная</Link>
            <Link href="/catalog" className="font-semibold text-[#781e38]">Каталог</Link>
            <a href="tel:+998887519999" className="rounded-full bg-[#781e38] px-5 py-3 text-white">+998 88 751 99 99</a>
          </nav>
        </div>
      </header>

      <section className="bg-[#28171e] px-6 py-14 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#d99aaa]">A.G.A. Estate · Tashkent</p>
          <h1 className="text-4xl font-semibold md:text-5xl">Каталог недвижимости в Ташкенте</h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#dfcbd1]">
            Продажа, аренда, новостройки и частные дома. Актуальные предложения A.G.A. Estate.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((item) => (
            <button key={item.id} onClick={() => setCategory(item.id)}
              className={`rounded-full border px-5 py-3 text-sm transition ${
                category === item.id ? "border-[#781e38] bg-[#781e38] text-white" :
                "border-[#e4d4da] bg-white text-[#4b3540] hover:border-[#781e38]"
              }`}>{item.label}</button>
          ))}
        </div>

        <div className="mb-10 rounded-2xl border border-[#eadde1] bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-xl font-semibold">Фильтры поиска</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <label className="text-sm"><span className="mb-2 block text-[#765d67]">Комнаты</span>
              <select value={rooms} onChange={(e) => setRooms(e.target.value)} className="w-full rounded-lg border border-[#e5d9de] bg-white p-3">
                <option>Любое количество</option><option value="1">1 комната</option><option value="2">2 комнаты</option><option value="3">3 комнаты</option><option value="4">4 комнаты</option>
              </select>
            </label>
            <label className="text-sm"><span className="mb-2 block text-[#765d67]">Максимальная цена (у.е.)</span>
              <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} placeholder="Например, 100000" className="w-full rounded-lg border border-[#e5d9de] p-3" />
            </label>
            <label className="text-sm"><span className="mb-2 block text-[#765d67]">Площадь от (м²)</span>
              <input type="number" value={minArea} onChange={(e) => setMinArea(e.target.value)} placeholder="Например, 45" className="w-full rounded-lg border border-[#e5d9de] p-3" />
            </label>
            <label className="text-sm"><span className="mb-2 block text-[#765d67]">Этаж не выше</span>
              <input type="number" value={maxFloor} onChange={(e) => setMaxFloor(e.target.value)} placeholder="Например, 5" className="w-full rounded-lg border border-[#e5d9de] p-3" />
            </label>
          </div>
        </div>

        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Объекты недвижимости</h2>
          <span className="text-sm text-[#806b74]">Найдено: {filteredProperties.length}</span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProperties.map((property) => (
            <article key={property.id} className="overflow-hidden rounded-2xl border border-[#eadde1] bg-white shadow-sm">
              <Link href={`/property/${property.id}`} className="block">
                <img src={property.photos[0]} alt={property.title} className="h-64 w-full object-cover" />
                <div className="p-5">
                  <p className="mb-2 text-xs uppercase tracking-wider text-[#a34d68]">{categoryLabels[property.category]} · {property.complex}</p>
                  <h3 className="text-lg font-semibold">{property.title}</h3>
                  <p className="mt-2 text-sm text-[#806b74]">{property.landmark}</p>
                  <div className="mt-4 flex flex-wrap gap-3 text-xs text-[#654d58]">
                    <span>{property.rooms} комн.</span><span>{property.area} м²</span><span>{property.floor}/{property.totalFloors} этаж</span>
                  </div>
                  <p className="mt-5 border-t border-[#eee5e8] pt-4 text-2xl font-semibold text-[#781e38]">
                    {property.price.toLocaleString("ru-RU")} {property.currency}
                  </p>
                  <span className="mt-3 inline-block text-sm font-semibold text-[#8b304c]">Подробнее об объекте →</span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {filteredProperties.length === 0 && <div className="rounded-xl bg-white p-10 text-center text-[#806b74]">По выбранным параметрам объектов пока нет.</div>}
      </section>
      <footer className="bg-[#28171e] px-6 py-8 text-center text-sm text-[#dfcbd1]">
        <p className="font-semibold tracking-widest text-white">A.G.A. ESTATE</p>
        <p className="mt-2">Ваш надёжный партнёр в недвижимости Ташкента.</p>
        <p className="mt-4">© 2026 A.G.A. Estate · Tashkent, Uzbekistan</p>
      </footer>
    </main>
  );
}
