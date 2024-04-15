import prismaClient from "../../prisma";
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'


interface AuthDentistLogin{
    email: string
    senha: string
}

class AuthDentistService {
async execute ({email, senha}: AuthDentistLogin){

    const dentist = await prismaClient.dentist.findFirst({
        where:{
            email: email
        }
    })
    if(!dentist){
        throw new Error('Usuario ou senha incorretos')
    }
    const autenticado = await compare(senha, dentist.password)
    if(!autenticado){
        throw new Error('Usuario ou senha incorretos')
    }

    const token = sign (
        {
            id: dentist.id,
            email: dentist.email
        },
        process.env.JWT_SECRET,
        {
            subject: dentist.id,
            expiresIn: '1h'
        }
    )
    return {
        id: dentist.id,
        email: dentist.email,
        token: token
    }
}
}

export { AuthDentistService }