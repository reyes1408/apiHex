import { DBvendedorRepository } from "./DBvendedorRepository";

import { CreateVendedorUseCase } from "../aplicacion/createVendedorUseCase";
import { CreateVendedorController } from "./controllers/createVendedorController";

export const dbvendedorRepository = new DBvendedorRepository();
export const createVendedorUseCase = new CreateVendedorUseCase(dbvendedorRepository);
export const createVendedorController = new CreateVendedorController(createVendedorUseCase);
