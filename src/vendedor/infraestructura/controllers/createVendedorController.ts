import { Request, Response } from "express";
import { createVendedorUseCase } from "../../aplicacion/createVendedorUseCase";

export class createVendedorController {
    constructor( readonly createVendedorUseCase: createVendedorUseCase) {}

    async run(req: Request, res: Response) {
        const data = req.body

        try {
            
            const vendedor = await this.createVendedorUseCase.run(
                data.name,
                data.lastName
            );

            if (vendedor) {
                res.status(201).send({
                    status: "sucess",
                    data: {
                        id: vendedor?.id,
                        name: vendedor?.name,
                        lastName: vendedor?.lastName
                    }
                });
            } else {
                res.status(204).send({
                    status: "error",
                    data: "No se pudo crear el registro."
                });
            }

        } catch (error) {
            
            res.status(204).send({
                status: "error",
                data: "Ocurrio un error",
                mssg: error
            })
        }
    }
}
