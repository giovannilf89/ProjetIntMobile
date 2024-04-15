import prismaClient from "../../prisma";

class ListUserServices{
async execute(){
    const listUser = await prismaClient.client.findMany({
        select:{
            id:true,
            name: true,
            cpf: true,
        }
    })
    return (listUser)
}
}

export {ListUserServices}