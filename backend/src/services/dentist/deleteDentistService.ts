import prismaClient from "../../prisma";

interface DelDentist{
    remove: string
}

class deleteDentistService{
async execute({remove}: DelDentist){

    const id_test = await prismaClient.dentist.findFirst({
        where:{
            id: remove
        }
    })
    if (!id_test){
        return {info: 'Existe um agendamento pendente'}
    }
    await prismaClient.dentist.delete({
        where: {
            id: remove
        }
    })
    return {dados: 'Registro apagado com sucesso'}
}
}

export {deleteDentistService}