export interface Product {
  id: string
  title: string
  description: string
  image: string
  contactLink: string
}

export const products: Product[] = [
  {
    id: "1",
    title: "Camiseta Arte 01",
    description: "Diseño minimalista edición limitada.",
    image: "/images/product1.jpg",
    contactLink: "https://wa.me/000000000"
  }
]