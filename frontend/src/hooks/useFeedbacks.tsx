import { useQuery } from "@tanstack/react-query";
import { getFeedback } from '../api/feedback.api';

export default function useFeedbacks() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["feedback"],
    queryFn: getFeedback,
  });
  return {data, isLoading, isError, error};
}
