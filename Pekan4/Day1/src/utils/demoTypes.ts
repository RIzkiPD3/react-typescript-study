export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
  }
  
  // Partial → Semua properti jadi optional
  export type PartialProduct = Partial<Product>;
  
  // Pick → Ambil properti tertentu
  export type ProductBasicInfo = Pick<Product, "name" | "price">;
  
  // Omit → Buang properti tertentu
  export type ProductWithoutDesc = Omit<Product, "description">;
  
  // Record → Membuat object key:value typed
  export type ProductStock = Record<string, number>;
  