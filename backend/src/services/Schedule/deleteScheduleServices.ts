import prismaClient from "../../prisma";

interface deleteSchedule{
    remove: string
}

class deleteScheduleServices{
async execute({remove}: deleteSchedule){

    const id_test = await prismaClient.appointment.findFirst({
        where: {
            id: remove
        }
    })
    if (!id_test){
        return {info: 'Existe um agendaento pendente'}
    }
    await prismaClient.appointment.delete({
        where:{
            id: remove
        }
    })
    return {dados: 'Registro apagado com sucesso'}
}
}

export {deleteScheduleServices}