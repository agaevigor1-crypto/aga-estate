export type Property = {
  id: string;
  title: string;
  category: "sale" | "rent" | "newbuild" | "houses";
  district: string;
  address: string;
  landmark: string;
  complex: string;
  rooms: number;
  layout: string;
  area: number;
  floor: number;
  totalFloors: number;
  price: number;
  currency: string;
  renovation: string;
  furnished: string;
  description: string;
  photos: string[];
};

export const properties: Property[] = [
  {
    id: "nrg-bi-zamon",
    title: "2-комнатная квартира в ЖК NRG-BI ZAMON",
    category: "sale",
    district: "Янгиабад",
    address: "Ташкент, ЖК NRG-BI ZAMON",
    landmark: "Ориентир — базар Янгиабад; станция метро «Янгиабад» примерно в 200 м",
    complex: "ЖК NRG-BI ZAMON",
    rooms: 2,
    layout: "Студийная планировка",
    area: 47,
    floor: 3,
    totalFloors: 9,
    price: 75000,
    currency: "у.е.",
    renovation: "С ремонтом",
    furnished: "С мебелью и бытовой техникой",
    description:
      "Квартира с ремонтом, мебелью и бытовой техникой. Площадь — 47 м², 3-й этаж 9-этажного дома. Студийная планировка. Рядом базар Янгиабад и станция метро «Янгиабад» (примерно 200 м).",
    photos: [
      "/properties/object-1/photo-01.jpg",
      "/properties/object-1/photo-02.jpg",
      "/properties/object-1/photo-03.jpg",
      "/properties/object-1/photo-04.jpg",
      "/properties/object-1/photo-05.jpg",
      "/properties/object-1/photo-06.jpg",
      "/properties/object-1/photo-07.jpg",
      "/properties/object-1/photo-08.jpg",
      "/properties/object-1/photo-09.jpg",
    ],
  },
];

export const categoryLabels: Record<Property["category"], string> = {
  sale: "Продажа",
  rent: "Аренда",
  newbuild: "Новостройки",
  houses: "Дома",
};
