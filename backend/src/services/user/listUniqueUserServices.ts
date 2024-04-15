import prismaClient from "../../prisma";

interface ListUniqueUser {
    id: string
}

class ListUniqueUserServices {
    async execute({ id }: ListUniqueUser) {
        const response = await prismaClient.client.findUnique({
            where: {
                id: id
            },
            select: {
                id: true,
                name: true,
                email: true,
                cpf: true
            }
        })
        return response
    }
}

export { ListUniqueUserServices }