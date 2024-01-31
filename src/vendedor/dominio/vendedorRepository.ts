import { Vendedor } from "./vendedor";

export interface VendedorRepository {

    // getById(id: number): Promise <Vendedor | null>

    getAll(): Promise <Vendedor [] | null>;

    createVendedor(
        name: string, 
        lastName: string
    ): Promise <Vendedor | null>

    deleteVendedor(id: number): Promise <boolean>

}

