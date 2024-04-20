import { baseApi } from "./base.api";

export function getProducts() {
  return baseApi.get("/products");
}

export function addProduct(product) {
  return baseApi.post("/products", product);
}
