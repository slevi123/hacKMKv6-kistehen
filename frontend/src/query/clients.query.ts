import { useQuery } from "@tanstack/react-query";
import { fetchClient, fetchClients } from "../api/clients.api";

export function useClients() {
    return useQuery({
      queryKey: ['users'],
      queryFn: () => fetchClients(),
    });
}

export function useClient(id: string) {
    return useQuery({
      queryKey: ['users', id],
      queryFn: () => fetchClient(id),
    });
}