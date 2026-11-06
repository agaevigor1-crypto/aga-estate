import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const siteUrl = "https://agaestate.uz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "A.G.A. Estate — агентство недвижимости в Ташкенте",
    template: "%s | A.G.A. Estate",
  },
  description:
    "A.G.A. Estate — недвижимость в Ташкенте: продажа и аренда квартир, новостройки и дома. Подбор объектов и сопровождение сделок.",
  applicationName: "A.G.A. Estate",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ru_UZ",
    url: siteUrl,
    siteName: "A.G.A. Estate",
    title: "A.G.A. Estate — агентство недвижимости в Ташкенте",
    description: "Продажа и аренда недвижимости, новостройки и дома в Ташкенте.",
  },
  twitter: {
    card: "summary_large_image",
    title: "A.G.A. Estate — недвижимость Ташкента",
    description: "Продажа и аренда недвижимости, новостройки и дома в Ташкенте.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
