import { Vendedor } from "../dominio/vendedor";
import { VendedorRepository } from "../dominio/vendedorRepository"

export class CreateVendedorUseCase {

    constructor(readonly vendedorRepository: VendedorRepository){}

    async run(
        id: number,
        name: string,
        lastName: string
    ): Promise <Vendedor | null> {
        try {
            const vendedorCreated = await this.vendedorRepository.createVendedor(
                id,
                name,
                lastName
            )

            return vendedorCreated
        } catch (error) {
            console.log("Error en el archivo (createvendedorUseCase)", error);
            return null
        }
    }
}
