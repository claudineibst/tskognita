"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmpresaController_1 = require("./controller/EmpresaController");
exports.Routes = [{
        method: "get",
        route: "/empresas",
        controller: EmpresaController_1.EmpresaController,
        action: "all"
    }, {
        method: "get",
        route: "/empresas/:id",
        controller: EmpresaController_1.EmpresaController,
        action: "one"
    }, {
        method: "post",
        route: "/empresas",
        controller: EmpresaController_1.EmpresaController,
        action: "save"
    }, {
        method: "delete",
        route: "/empresas/:id",
        controller: EmpresaController_1.EmpresaController,
        action: "remove"
    }];
//# sourceMappingURL=routes.js.map