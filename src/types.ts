export type Product = {
  id: string;
  name: string;
  description: string;
  imageUrl?: string[];
  categoryName?: string;
  categorySlug?: string;
  price: number;
};