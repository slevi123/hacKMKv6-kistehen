import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "../api/notes.api";

export function useNotes(id: string) {
        return useQuery({
            queryKey: ['notes', id], 
            queryFn: () => fetchNotes(id), 
        });
}
