import prismaClient from "../../prisma"
import { hash } from 'bcryptjs'

interface EditDentist {
    id: string
    editSenha: string
}

class EditDentistService {
    async execute({ id, editSenha }: EditDentist) {
        const data = new Date(Date.now()) // salva a data da alteração
        const senhaCrypt = await hash(editSenha, 8)

        await prismaClient.dentist.update({
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

export { EditDentistService }