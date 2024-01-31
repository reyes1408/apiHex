import { Vendedor } from "../dominio/vendedor";
import { VendedorRepository } from "../dominio/vendedorRepository";
import modelVendedor from "./model/vendedor.model"

//En las dependencias se define los metodos que modelamos en vendedorRepository
export class DBvendedorRepository implements VendedorRepository{

    async createVendedor(name: string, lastName: string): Promise <Vendedor | null> {
        try {
            const vendedorNuevo = await modelVendedor.create({ name, lastName })
            return new Vendedor(vendedorNuevo.name, vendedorNuevo.lastName)
        } catch (error) {
            console.log("Error en dependecies, createVendedor", error);
            return null
        }
    }

    async getAll(): Promise <Vendedor[] | null> {
        try {
            const vendedoresFound = await modelVendedor.findAll();
            return vendedoresFound

        } catch (error) {
            console.log("Error en dependecies, getAll", error);
            return null
        }
    }

    async deleteVendedor(id: number): Promise <boolean> {
        try {
            const vendedordeleted = await modelVendedor.destroy({
                where: {
                    id: id,
                }
            })
            return vendedordeleted > 0;
        } catch (error) {
            console.log("Error en dependencias, deleteVendedor", error);
            return false
        }
    }
}
