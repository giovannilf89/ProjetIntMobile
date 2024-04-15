import prismaClient from "../../prisma";
import {hash} from 'bcryptjs'

interface CreateUser {
    nome: string
    email: string
    celular: string
    cpf: string
    cep: string
    rua: string
    complemento: string
    bairro: string
    cidade: string
    estado: string
    senha: string
}

class CreateUserService {
    async execute ({nome, email, celular, cpf, cep, rua, complemento, bairro, cidade, estado, senha}: CreateUser) {
        // console.log(nome, email, celular, cpf, cep, rua, bairro, cidade, estado, senha)
        if(!nome || !email || !celular || !cpf || !cep || !rua || !complemento || !bairro || !cidade || !estado || !senha){
            throw new Error("Existem campos em branco")
        }

        const emailAlredyExist = await prismaClient.client.findFirst({
            where: {
                email: email
            }
        })
        if (emailAlredyExist){
            throw new Error ('Email já cadastrado')
        }

        const senhaCrypt = await hash(senha, 8)

        const response = await prismaClient.client.create({
            data: {
                name: nome,
                email: email,
                cel: celular,
                cpf: cpf,
                zipcode: cep,
                adress1: rua,
                adress2: complemento,
                adress3: bairro,
                city: cidade,
                state: estado,
                password: senhaCrypt,
            },
            select: {
                id: true,
                name: true,
                email: true,
            }
        })
        return response
    }
}

export {CreateUserService}