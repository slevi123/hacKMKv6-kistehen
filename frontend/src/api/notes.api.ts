import { baseApi } from "./base.api";

export type Notes = {
    id?: string,
    message: string,
}

export async function fetchNotes(id: string): Promise<Notes[]> {
    const response = await baseApi.get(`/clients/${id}/notes`);
    return response.data;
}

export async function addNotes(id: string, note: Notes): Promise<Notes> {
    const response = await baseApi.post(`/clients/${id}/notes`, note);
    return response.data;
}