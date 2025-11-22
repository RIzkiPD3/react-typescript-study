import type { Product } from "./demoTypes";

export function isProduct(obj: any): obj is Product {
  return (
    obj &&
    typeof obj === "object" &&
    "id" in obj &&
    "name" in obj &&
    "price" in obj
  );
}
