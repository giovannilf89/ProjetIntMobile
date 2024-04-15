import prismaClient from "../../prisma";

interface ListDentist{
    id: string
}

class ListUniqueDentistServices{
async execute ({id}: ListDentist){
    const resposta = await prismaClient.dentist.findUnique({
        where:{
            id: id
        },
        select:{
            id: true,
            name: true
        }
    })
    return resposta
}
}

export {ListUniqueDentistServices}