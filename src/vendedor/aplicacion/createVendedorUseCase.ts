import { Vendedor } from "../dominio/vendedor";
import { VendedorRepository } from "../dominio/vendedorRepository"

export class createVendedorUseCase {

    constructor(readonly vendedorRepository: VendedorRepository){}

    async run(
        name: string,
        lastName: string
    ): Promise <Vendedor | null> {
        try {
            const vendedorCreated = await this.vendedorRepository.createVendedor(
                name,
                lastName
            )

            return vendedorCreated
        } catch (error) {
            console.log("Error en el archivo createvendedorUseCase", error);
            return null
        }
    }

}

