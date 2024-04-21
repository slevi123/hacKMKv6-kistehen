import { baseApi } from "./base.api";

export type Clients = {
    id?: string,
    name: string,
    email: string,
    city: string,
    county: string,
    sold?: number,
    size?: string 
}

export async function fetchClients(): Promise<Clients[]> {
    const response = await baseApi.get('/clients');
    return response.data;
}

export async function fetchClient(id: string): Promise<Clients> {
    const response = await baseApi.get(`/clients/${id}`);
    return response.data;
}

export async function addClient(client: Clients): Promise<Clients> {
    const response = await baseApi.post('/clients', client);
    return response.data;
}