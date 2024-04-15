import prismaClient from "../../prisma";

class listDentistServices{
async execute(){
    const list = await prismaClient.dentist.findMany({
        select:{
            id: true,
            name: true
        }
    })
    return (list)
}
}

export {listDentistServices}