

"use client";

import { useMemo, useState } from "react";

type Property = {
  id: number;
  title: string;
  category: string;
  district: string;
  address: string;
  rooms: number;
  area: number;
  floor: number;
  totalFloors: number;
  price: number;
  currency: string;
  description: string;
};

const properties: Property[] = [
  {
    id: 1,
    title: "Просторная квартира",
    category: "sale",
    district: "Юнусабадский",
    address: "Ташкент, Юнусабад",
    rooms: 3,
    area: 95,
    floor: 5,
    totalFloors: 9,
    price: 125000,
    currency: "$",
    description: "Уютная квартира с удобной планировкой."
  },
  {
    id: 2,
    title: "Современная квартира",
    category: "rent",
    district: "Мирзо-Улугбекский",
    address: "Ташкент, Мирзо-Улугбек",
    rooms: 2,
    area: 68,
    floor: 4,
    totalFloors: 8,
    price: 700,
    currency: "$/мес.",
    description: "Квартира с мебелью и бытовой техникой."
  },
  {
    id: 3,
    title: "Квартира в новостройке",
    category: "newbuild",
    district: "Яшнабадский",
    address: "Ташкент, Яшнабад",
    rooms: 2,
    area: 74,
    floor: 7,
    totalFloors: 16,
    price: 89000,
    currency: "$",
    description: "Современный жилой комплекс."
  },
  {
    id: 4,
    title: "Просторный частный дом",
    category: "houses",
    district: "Алмазарский",
    address: "Ташкент, Алмазар",
    rooms: 4,
    area: 180,
    floor: 1,
    totalFloors: 1,
    price: 195000,
    currency: "$",
    description: "Дом с просторной территорией."
  }
];

const categories = [
  { id: "all", label: "Все объекты" },
  { id: "sale", label: "Продажа" },
  { id: "rent", label: "Аренда" },
  { id: "newbuild", label: "Новостройки" },
  { id: "houses", label: "Дома" }
];

const districts = [
  "Все районы",
  "Юнусабадский",
  "Мирзо-Улугбекский",
  "Яшнабадский",
  "Алмазарский"
];

export default function CatalogPage() {
  const [category, setCategory] = useState("all");
  const [district, setDistrict] = useState("Все районы");
  const [rooms, setRooms] = useState("Любое количество");
  const [maxPrice, setMaxPrice] = useState("");
  const [minArea, setMinArea] = useState("");
  const [maxFloor, setMaxFloor] = useState("");

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const categoryMatch =
        category === "all" || property.category === category;

      const districtMatch =
        district === "Все районы" || property.district === district;

      const roomsMatch =
        rooms === "Любое количество" ||
        property.rooms === Number(rooms);

      const priceMatch =
        maxPrice === "" || property.price <= Number(maxPrice);

      const areaMatch =
        minArea === "" || property.area >= Number(minArea);

      const floorMatch =
        maxFloor === "" || property.floor <= Number(maxFloor);

      return (
        categoryMatch &&
        districtMatch &&
        roomsMatch &&
        priceMatch &&
        areaMatch &&
        floorMatch
      );
    });
  }, [category, district, rooms, maxPrice, minArea, maxFloor]);

  return (
    <main className="min-h-screen bg-[#faf7f7] text-[#25171d]">
      <header className="border-b border-[#eadde1] bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="/" className="text-2xl font-bold tracking-[0.18em] text-[#781e38]">
            A.G.A.
            <span className="block text-[9px] tracking-[0.55em]">ESTATE</span>
          </a>

          <nav className="flex flex-wrap items-center gap-5 text-sm">
            <a href="/" className="hover:text-[#a34d68]">Главная</a>
            <a href="/catalog" className="font-semibold text-[#781e38]">Каталог</a>
            <a href="tel:+998887519999" className="rounded-full bg-[#781e38] px-5 py-3 text-white">
              +998 88 751 99 99
            </a>
          </nav>
        </div>
      </header>

      <section className="bg-[#28171e] px-6 py-14 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#d99aaa]">
            A.G.A. Estate · Tashkent
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">
            Каталог недвижимости
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#dfcbd1]">
            Подберите недвижимость в Ташкенте. Продажа, аренда,
            новостройки и частные дома.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((item) => (
            <button
              key={item.id}
              onClick={() => setCategory(item.id)}
              className={`rounded-full border px-5 py-3 text-sm transition ${
                category === item.id
                  ? "border-[#781e38] bg-[#781e38] text-white"
                  : "border-[#e4d4da] bg-white text-[#4b3540] hover:border-[#781e38]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mb-10 rounded-2xl border border-[#eadde1] bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-xl font-semibold">Фильтры поиска</h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <label className="text-sm">
              <span className="mb-2 block text-[#765d67]">Район</span>
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full rounded-lg border border-[#e5d9de] bg-white p-3"
              >
                {districts.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>

            <label className="text-sm">
              <span className="mb-2 block text-[#765d67]">Комнаты</span>
              <select
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
                className="w-full rounded-lg border border-[#e5d9de] bg-white p-3"
              >
                <option>Любое количество</option>
                <option value="1">1 комната</option>
                <option value="2">2 комнаты</option>
                <option value="3">3 комнаты</option>
                <option value="4">4 комнаты</option>
              </select>
            </label>

            <label className="text-sm">
              <span className="mb-2 block text-[#765d67]">Максимальная цена ($)</span>
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                placeholder="Например, 100000"
                className="w-full rounded-lg border border-[#e5d9de] p-3"
              />
            </label>

            <label className="text-sm">
              <span className="mb-2 block text-[#765d67]">Площадь от (м²)</span>
              <input
                type="number"
                value={minArea}
                onChange={(e) => setMinArea(e.target.value)}
                placeholder="Например, 60"
                className="w-full rounded-lg border border-[#e5d9de] p-3"
              />
            </label>

            <label className="text-sm">
              <span className="mb-2 block text-[#765d67]">Этаж не выше</span>
              <input
                type="number"
                value={maxFloor}
                onChange={(e) => setMaxFloor(e.target.value)}
                placeholder="Например, 5"
                className="w-full rounded-lg border border-[#e5d9de] p-3"
              />
            </label>

            <div className="flex items-end">
              <button
                onClick={() => {
                  setCategory("all");
                  setDistrict("Все районы");
                  setRooms("Любое количество");
                  setMaxPrice("");
                  setMinArea("");
                  setMaxFloor("");
                }}
                className="w-full rounded-lg border border-[#781e38] px-5 py-3 text-sm text-[#781e38] hover:bg-[#781e38] hover:text-white"
              >
                Сбросить фильтры
              </button>
            </div>
          </div>
        </div>

        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Объекты недвижимости</h2>
          <span className="text-sm text-[#806b74]">
            Найдено: {filteredProperties.length}
          </span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProperties.map((property) => (
            <article
              key={property.id}
              className="overflow-hidden rounded-2xl border border-[#eadde1] bg-white shadow-sm"
            >
              <div className="flex h-48 items-center justify-center bg-[#eee5e8] text-sm text-[#947b85]">
                Фотографии объекта добавим позже
              </div>

              <div className="p-5">
                <p className="mb-2 text-xs uppercase tracking-wider text-[#a34d68]">
                  {property.district}
                </p>

                <h3 className="text-lg font-semibold">{property.title}</h3>

                <p className="mt-2 text-sm text-[#806b74]">
                  {property.address}
                </p>

                <div className="mt-4 flex flex-wrap gap-3 text-xs text-[#654d58]">
                  <span>{property.rooms} комн.</span>
                  <span>{property.area} м²</span>
                  <span>{property.floor}/{property.totalFloors} этаж</span>
                </div>

                <div className="mt-5 border-t border-[#eee5e8] pt-4">
                  <p className="text-2xl font-semibold text-[#781e38]">
                    {property.price.toLocaleString("en-US")} {property.currency}
                  </p>
                  <p className="mt-2 text-sm text-[#806b74]">
                    {property.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="rounded-xl bg-white p-10 text-center text-[#806b74]">
            По выбранным параметрам объектов пока нет.
          </div>
        )}

        <p className="mt-8 text-center text-xs text-[#9a858e]">
          Демонстрационные объекты. Подключение реальной базы будет следующим этапом.
        </p>
      </section>

      <footer className="bg-[#28171e] px-6 py-8 text-center text-sm text-[#dfcbd1]">
        <p className="font-semibold tracking-widest text-white">A.G.A. ESTATE</p>
        <p className="mt-2">Ваш надёжный партнёр в недвижимости.</p>
        <p className="mt-4">© 2026 A.G.A. Estate · Tashkent, Uzbekistan</p>
      </footer>
    </main>
  );
}

