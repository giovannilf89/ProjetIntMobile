
import prismaClient from "../../prisma"
import { hash } from 'bcryptjs'

interface CreateDentist {
    nome: string
    email: string
    senha: string
}

class CreateDentistService {
    async execute({ nome, email, senha }: CreateDentist) {
        // console.log(nome, email, senha)
        if (!nome || !email || !senha) {
            throw new Error("Existem campos em branco")
        }

        const emailAlreadyExist = await prismaClient.dentist.findFirst({
            where: {
                email: email
            }
        })
        if (emailAlreadyExist) {
            throw new Error('Email já cadastrado')
        }

        const senhaCrypt = await hash(senha, 8)

        const response = await prismaClient.dentist.create({
            data: {
                name: nome,
                email: email,
                password: senhaCrypt
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        })
        return response
    }
}

export { CreateDentistService }