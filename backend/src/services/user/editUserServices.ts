import prismaClient from "../../prisma";
import { hash } from 'bcryptjs'

interface EditUser {
    id: string
    editSenha: string
}

class EditUserService {
    async execute({ id, editSenha }: EditUser) {
        // console.log(id, editSenha)
        const data = new Date(Date.now()) // salva a data da alteração
        const senhaCrypt = await hash(editSenha, 8)


        await prismaClient.client.update({
            where: {
                id: id
            },
            data: {
                password: senhaCrypt,
                update_at: data
            }
        })
        return { dados: 'Dados alterados com sucesso' }
    }
}

export { EditUserService }