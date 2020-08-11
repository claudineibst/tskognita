import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import { validate } from 'class-validator';
import {Empresa} from "../entity/Empresa";

export class EmpresaController {

    private empresaRepository = getRepository(Empresa);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.empresaRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.empresaRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        let {razaoSocial , cnpj, nomeFantasia, dataAbertura} = request.body

        dataAbertura = new Date(dataAbertura)

        const valida = this.empresaRepository.create({
            razaoSocial,
            cnpj,
            nomeFantasia,
            dataAbertura
        });


        const erros = await validate(valida)

        if (erros.length){
            return response.status(400).json(erros);
        }
        else {
            return this.empresaRepository.save(request.body);
        };
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let empresaToRemove = await this.empresaRepository.findOne(request.params.id);
        if (!empresaToRemove){
            return response.status(400).json({
                error: `Id ${request.params.id} não localizado no banco`
            })
        }
        // console.log(empresaToRemove)
        return this.empresaRepository.remove(empresaToRemove);
    }

}