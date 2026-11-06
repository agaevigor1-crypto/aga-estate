import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { properties } from "../../lib/properties";
import PropertyGallery from "../PropertyGallery";

const siteUrl = "https://agaestate.uz";

export function generateStaticParams() {
  return properties.map((property) => ({ id: property.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const property = properties.find((item) => item.id === id);
  if (!property) return { title: "Объект не найден | A.G.A. Estate" };
  return {
    title: `${property.title} — купить в Ташкенте | A.G.A. Estate`,
    description: `${property.rooms}-комнатная квартира, ${property.area} м², ${property.floor}/${property.totalFloors} этаж, ${property.price.toLocaleString("ru-RU")} ${property.currency}. ${property.landmark}.`,
    alternates: { canonical: `${siteUrl}/property/${property.id}` },
    openGraph: {
      title: `${property.title} | A.G.A. Estate`,
      description: property.description,
      url: `${siteUrl}/property/${property.id}`,
      images: [property.photos[0]],
      type: "article",
    },
  };
}

export default async function PropertyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = properties.find((item) => item.id === id);
  if (!property) notFound();

  const facts = [
    ["Комнаты", String(property.rooms)],
    ["Планировка", property.layout],
    ["Площадь", `${property.area} м²`],
    ["Этаж", `${property.floor} из ${property.totalFloors}`],
    ["Состояние", property.renovation],
    ["Мебель и техника", property.furnished],
    ["Жилой комплекс", property.complex],
    ["Ориентир", property.landmark],
  ];

  return (
    <main className="min-h-screen bg-white text-[#28171e]">
      <header className="border-b border-[#eadde1] px-6 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-widest text-[#781e38]">A.G.A.<span className="block text-[9px] tracking-[0.55em]">ESTATE</span></Link>
          <nav className="flex gap-6 text-sm"><Link href="/">Главная</Link><Link href="/catalog">Каталог</Link></nav>
        </div>
      </header>
      <section className="mx-auto max-w-7xl px-6 py-10">
        <Link href="/catalog" className="text-sm text-[#8b304c] hover:underline">← Вернуться в каталог</Link>
        <div className="mt-6 rounded-2xl bg-[#28171e] p-8 text-white">
          <p className="text-sm text-white/70">{property.complex}</p>
          <h1 className="mt-3 text-3xl font-bold md:text-4xl">{property.title}</h1>
          <p className="mt-4 text-white/75">{property.landmark}</p>
          <p className="mt-6 text-3xl font-bold">{property.price.toLocaleString("ru-RU")} {property.currency}</p>
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <PropertyGallery photos={property.photos} title={property.title} />
          <div>
            <h2 className="text-2xl font-bold">Характеристики объекта</h2>
            <div className="mt-5 divide-y divide-gray-200 border-y border-gray-200">
              {facts.map(([label, value]) => <div key={label} className="flex justify-between gap-4 py-4"><span className="text-gray-500">{label}</span><span className="text-right font-semibold">{value}</span></div>)}
            </div>
            <a href="tel:+998887519999" className="mt-7 block rounded-xl bg-[#8b304c] px-6 py-4 text-center font-semibold text-white hover:bg-[#70243c]">Связаться с агентством</a>
          </div>
        </div>
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Описание объекта</h2>
          <p className="mt-4 max-w-3xl leading-7 text-gray-600">{property.description}</p>
        </section>
      </section>
      <footer className="mt-16 bg-[#28171e] px-6 py-8 text-center text-white">
        <p className="font-bold tracking-widest">A.G.A. ESTATE</p>
        <p className="mt-2 text-sm text-white/70">Ваш надёжный партнёр в недвижимости Ташкента</p>
        <p className="mt-3 text-sm">© 2026 A.G.A. Estate</p>
      </footer>
    </main>
  );
}
