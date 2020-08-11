"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
// import { validateOrReject,  IsDefined } from 'class-validator';
var class_validator_1 = require("class-validator");
var Empresa = /** @class */ (function () {
    function Empresa() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Empresa.prototype, "id", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.MinLength(5, { message: 'A Razão Social deve ter no mínimo 5 caracteres' }),
        class_validator_1.MaxLength(100, { message: 'A Razão Social deve ter no máximo 100 caracteres' }),
        typeorm_1.Column({ length: 100 }),
        __metadata("design:type", String)
    ], Empresa.prototype, "razaoSocial", void 0);
    __decorate([
        class_validator_1.MaxLength(100, { message: 'O Nome Fantasia deve ter no máximo 100 caracteres' }),
        typeorm_1.Column({ length: 100, nullable: true }),
        __metadata("design:type", String)
    ], Empresa.prototype, "nomeFantasia", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumberString(),
        class_validator_1.MinLength(14, { message: 'O CNPJ deve possuir 14 dígitos' }),
        class_validator_1.MaxLength(14, { message: 'O CNPJ deve possuir 14 dígitos' })
        // @ValidateIf(o => o.length === 14, {message: 'Tamanho do CNPJ deve ser 14'})
        ,
        typeorm_1.Column({ length: 14 }),
        __metadata("design:type", String)
    ], Empresa.prototype, "cnpj", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsDate(),
        class_validator_1.MaxDate(new Date(), { message: 'A Data de Abertura não pode ser maior que a data atual' }),
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], Empresa.prototype, "dataAbertura", void 0);
    Empresa = __decorate([
        typeorm_1.Entity()
    ], Empresa);
    return Empresa;
}());
exports.Empresa = Empresa;
//# sourceMappingURL=Empresa.js.map