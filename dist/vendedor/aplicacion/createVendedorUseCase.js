"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVendedorUseCase = void 0;
class CreateVendedorUseCase {
    constructor(vendedorRepository) {
        this.vendedorRepository = vendedorRepository;
    }
    run(id, name, lastName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const vendedorCreated = yield this.vendedorRepository.createVendedor(id, name, lastName);
                return vendedorCreated;
            }
            catch (error) {
                console.log("Error en el archivo (createvendedorUseCase)", error);
                return null;
            }
        });
    }
}
exports.CreateVendedorUseCase = CreateVendedorUseCase;
