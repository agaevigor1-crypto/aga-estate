
export type Property = {
  id: string;
  title: string;
  category: "sale" | "rent" | "newbuild" | "houses";
  district: string;
  address: string;
  rooms: number;
  area: number;
  floor: number;
  totalFloors: number;
  price: number;
  currency: string;
  renovation: string;
  description: string;
  photos: string[];
  isDemo?: boolean;
};

export const properties: Property[] = [
  {
    id: "object-1",
    title: "Демонстрационная квартира",
    category: "sale",
    district: "Юнусабадский",
    address: "Ташкент, Юнусабад",
    rooms: 3,
    area: 95,
    floor: 4,
    totalFloors: 12,
    price: 95000,
    currency: "$",
    renovation: "Современный ремонт",
    description:
      "Демонстрационная запись. Замените сведения на проверенные данные объекта перед публикацией.",
    photos: [
      "/properties/object-1/Фото_01.jpg",
      "/properties/object-1/Фото_02.jpg",
      "/properties/object-1/Фото_03.jpg",
      "/properties/object-1/Фото_04.jpg",
      "/properties/object-1/Фото_05.jpg",
      "/properties/object-1/Фото_06.jpg",
      "/properties/object-1/Фото_07.jpg",
      "/properties/object-1/Фото_08.jpg",
      "/properties/object-1/Фото_09.jpg"
    ],
    isDemo: true
  }
];

export const categoryLabels: Record<Property["category"], string> = {
  sale: "Продажа",
  rent: "Аренда",
  newbuild: "Новостройки",
  houses: "Дома"
};
