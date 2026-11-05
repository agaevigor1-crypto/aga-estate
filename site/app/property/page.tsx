
"use client";

import { useState } from "react";

const photos = [
  "/properties/object-1/Фото_01.jpg",
  "/properties/object-1/Фото_02.jpg",
  "/properties/object-1/Фото_03.jpg",
  "/properties/object-1/Фото_04.jpg",
  "/properties/object-1/Фото_05.jpg",
  "/properties/object-1/Фото_06.jpg",
  "/properties/object-1/Фото_07.jpg",
  "/properties/object-1/Фото_08.jpg",
  "/properties/object-1/Фото_09.jpg",
];

const property = {
  title: "Просторная квартира в современном жилом комплексе",
  complex: "ЖК A.G.A. Estate",
  price: "$95 000",
  address: "Ташкент, Узбекистан",
  rooms: "3 комнаты",
  area: "95 м²",
  floor: "4 / 12",
  renovation: "Современный ремонт",
  description:
    "Демонстрационная страница объекта недвижимости. Здесь будет размещаться подробная информация о квартире, её характеристиках и преимуществах.",
};

export default function PropertyPage() {
  const [activePhoto, setActivePhoto] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const previousPhoto = () => {
    setActivePhoto((current) =>
      current === 0 ? photos.length - 1 : current - 1
    );
  };

  const nextPhoto = () => {
    setActivePhoto((current) =>
      current === photos.length - 1 ? 0 : current + 1
    );
  };

  return (
    <main className="min-h-screen bg-white text-[#28171e]">
      <header className="border-b border-gray-200 px-6 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="text-2xl font-bold tracking-widest">
            A.G.A.
          </a>
          <nav className="flex gap-6 text-sm">
            <a href="/">Главная</a>
            <a href="/catalog">Каталог</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <a
          href="/catalog"
          className="text-sm text-[#8b304c] hover:underline"
        >
          ← Вернуться в каталог
        </a>

        <div className="mt-6 rounded-2xl bg-[#28171e] p-8 text-white">
          <p className="text-sm text-white/70">{property.complex}</p>
          <h1 className="mt-3 text-3xl font-bold md:text-4xl">
            {property.title}
          </h1>
          <p className="mt-4 text-white/75">{property.address}</p>
          <p className="mt-6 text-3xl font-bold">{property.price}</p>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="space-y-3">
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="block w-full cursor-zoom-in overflow-hidden rounded-2xl bg-gray-100"
              aria-label="Увеличить фотографию"
            >
              <img
                src={photos[activePhoto]}
                alt={`Фото объекта ${activePhoto + 1}`}
                className="h-[420px] w-full object-cover transition duration-300 hover:scale-[1.02]"
              />
            </button>

            <div className="grid grid-cols-4 gap-2">
              {photos.map((photo, index) => (
                <button
                  type="button"
                  key={photo}
                  onClick={() => setActivePhoto(index)}
                  className={`overflow-hidden rounded-lg border-2 ${
                    activePhoto === index
                      ? "border-[#8b304c]"
                      : "border-transparent"
                  }`}
                  aria-label={`Показать фотографию ${index + 1}`}
                >
                  <img
                    src={photo}
                    alt={`Миниатюра ${index + 1}`}
                    className="h-24 w-full object-cover"
                  />
                </button>
              ))}
            </div>

            <p className="text-center text-xs text-gray-500">
              Нажмите на фотографию, чтобы увеличить
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Характеристики объекта
            </h2>

            <div className="mt-5 divide-y divide-gray-200 border-y border-gray-200">
              {[
                ["Комнаты", property.rooms],
                ["Площадь", property.area],
                ["Этаж", property.floor],
                ["Состояние", property.renovation],
                ["Адрес", property.address],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex justify-between gap-4 py-4"
                >
                  <span className="text-gray-500">{label}</span>
                  <span className="text-right font-semibold">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="tel:+998887519999"
              className="mt-7 block rounded-xl bg-[#8b304c] px-6 py-4 text-center font-semibold text-white hover:bg-[#70243c]"
            >
              Связаться с агентством
            </a>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Описание объекта</h2>
          <p className="mt-4 max-w-3xl leading-7 text-gray-600">
            {property.description}
          </p>
        </section>
      </section>

      <footer className="mt-16 bg-[#28171e] px-6 py-8 text-center text-white">
        <p className="font-bold tracking-widest">A.G.A. ESTATE</p>
        <p className="mt-2 text-sm text-white/70">
          Ваш надёжный партнёр в недвижимости Ташкента
        </p>
        <p className="mt-3 text-sm">© 2026 A.G.A. Estate</p>
      </footer>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute right-6 top-5 z-10 text-4xl text-white hover:text-gray-300"
            aria-label="Закрыть"
          >
            ×
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              previousPhoto();
            }}
            className="absolute left-3 z-10 rounded-full bg-white/15 px-4 py-3 text-3xl text-white hover:bg-white/30 md:left-8"
            aria-label="Предыдущая фотография"
          >
            ‹
          </button>

          <div
            className="flex max-h-full max-w-6xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={photos[activePhoto]}
              alt={`Фотография ${activePhoto + 1}`}
              className="max-h-[78vh] max-w-full rounded-lg object-contain"
            />
            <p className="mt-4 text-sm text-white">
              {activePhoto + 1} / {photos.length}
            </p>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              nextPhoto();
            }}
            className="absolute right-3 z-10 rounded-full bg-white/15 px-4 py-3 text-3xl text-white hover:bg-white/30 md:right-8"
            aria-label="Следующая фотография"
          >
            ›
          </button>
        </div>
      )}
    </main>
  );
}
