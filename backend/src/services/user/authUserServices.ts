import prismaClient from "../../prisma";
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'


interface AuthUserLogin {
    email: string
    senha: string
}


class AuthUserService {
    async execute({ email, senha }: AuthUserLogin) {
        const user = await prismaClient.client.findFirst({
            where: {
                email: email
            }
        })
        if (!user) {
            throw new Error('Usuario ou senha incorretos')
        }
        const autenticado = await compare(senha, user.password)
        if (!autenticado) {
            throw new Error('Usuario ou senha incorretos')
        }

        const token = sign(
            {
                id: user.id,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '1h'
            }
        )
        return {
            id: user.id,
            nome: user.name,
            email: user.email,
            token: token
        }
    }

}

export { AuthUserService }
