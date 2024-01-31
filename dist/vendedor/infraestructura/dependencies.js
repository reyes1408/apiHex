"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVendedorController = exports.createVendedorUseCase = exports.dbvendedorRepository = void 0;
const DBvendedorRepository_1 = require("./DBvendedorRepository");
const createVendedorUseCase_1 = require("../aplicacion/createVendedorUseCase");
const createVendedorController_1 = require("./controllers/createVendedorController");
exports.dbvendedorRepository = new DBvendedorRepository_1.DBvendedorRepository();
exports.createVendedorUseCase = new createVendedorUseCase_1.CreateVendedorUseCase(exports.dbvendedorRepository);
exports.createVendedorController = new createVendedorController_1.CreateVendedorController(exports.createVendedorUseCase);
