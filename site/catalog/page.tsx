import type { Metadata } from "next";
import CatalogClient from "./CatalogClient";

export const metadata: Metadata = {
  title: "Каталог недвижимости в Ташкенте — квартиры, аренда, новостройки и дома",
  description:
    "Выберите недвижимость в Ташкенте: квартиры на продажу и в аренду, новостройки и частные дома. Каталог предложений A.G.A. Estate.",
  alternates: { canonical: "/catalog" },
  openGraph: {
    type: "website",
    url: "https://www.agaestate.uz/catalog",
    title: "Каталог недвижимости в Ташкенте | A.G.A. Estate",
    description:
      "Квартиры на продажу и в аренду, новостройки и дома в Ташкенте.",
  },
};

export default function CatalogPage() {
  return <CatalogClient />;
}
