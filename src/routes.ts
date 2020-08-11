import {EmpresaController} from "./controller/EmpresaController";

export const Routes = [{
    method: "get",
    route: "/empresas",
    controller: EmpresaController,
    action: "all"
}, {
    method: "get",
    route: "/empresas/:id",
    controller: EmpresaController,
    action: "one"
}, {
    method: "post",
    route: "/empresas",
    controller: EmpresaController,
    action: "save"
}, {
    method: "delete",
    route: "/empresas/:id",
    controller: EmpresaController,
    action: "remove"
}];