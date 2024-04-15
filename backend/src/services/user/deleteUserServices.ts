import prismaClient from "../../prisma";

interface DelUser {
    remove: string
}

class deleteUserServices {
    async execute({ remove }: DelUser) {

        const id_test = await prismaClient.client.findFirst({
            where: {
                id: remove
            }
        })
        if (!id_test) {
            return { info: 'Existe um agendamento pendente' }
        }
        await prismaClient.client.delete({
            where: {
                id: remove
            }
        })
        return { dados: 'Registro apagado com sucesso' }
    }
}

export { deleteUserServices }