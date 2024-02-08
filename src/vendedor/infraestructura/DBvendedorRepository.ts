import { Vendedor } from "../dominio/vendedor";
import { VendedorRepository } from "../dominio/vendedorRepository";
import ModelVendedor from "./model/vendedor.model"

//En las dependencias se define los metodos que modelamos en vendedorRepository
export class DBvendedorRepository implements VendedorRepository{

    async createVendedor(id:number, name: string, lastName: string): Promise <Vendedor | null> {
        try {
            const vendedorNuevo = await ModelVendedor.create({ id, name, lastName });
            return new Vendedor(vendedorNuevo.id ,vendedorNuevo.name, vendedorNuevo.lastName)
        } catch (error) {
            console.log("Error en archivo (dependecies), createVendedor", error);
            return null
        }
    }

    async getAll(): Promise <Vendedor[] | null> {
        try {
            const vendedoresFound = await ModelVendedor.findAll();
            return vendedoresFound

        } catch (error) {
            console.log("Error en dependecies, getAll", error);
            return null
        }
    }

    async deleteVendedor(id: number): Promise <boolean> {
        try {
            const vendedordeleted = await ModelVendedor.destroy({
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
