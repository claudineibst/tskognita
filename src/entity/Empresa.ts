import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert} from "typeorm";
// import { validateOrReject,  IsDefined } from 'class-validator';
import { 
        IsNotEmpty, 
        IsNumberString, 
        IsDate, 
        MinLength, 
        MaxLength, 
        ValidationArguments, 
        MaxDate
} from 'class-validator';

@Entity()
export class Empresa {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @MinLength(5,{message: 'A Razão Social deve ter no mínimo 5 caracteres'})
    @MaxLength(100,{message: 'A Razão Social deve ter no máximo 100 caracteres'})
    @Column({length: 100})
    razaoSocial: string;
    
    @MaxLength(100,{message: 'O Nome Fantasia deve ter no máximo 100 caracteres'})
    @Column({length: 100, nullable:true})
    nomeFantasia: string;

    @IsNotEmpty()
    @IsNumberString()
    @MinLength(14,{message: 'O CNPJ deve possuir 14 dígitos'})
    @MaxLength(14,{message: 'O CNPJ deve possuir 14 dígitos'})
    // @ValidateIf(o => o.length === 14, {message: 'Tamanho do CNPJ deve ser 14'})
    @Column({length: 14})
    cnpj: string;

    @IsNotEmpty()
    @IsDate()
    @MaxDate(new Date(),{message: 'A Data de Abertura não pode ser maior que a data atual'})
    @Column()
    dataAbertura: Date;
}
