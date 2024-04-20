import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/product.api";

export default function useProducts() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  return {data, isLoading, isError, error};
}
