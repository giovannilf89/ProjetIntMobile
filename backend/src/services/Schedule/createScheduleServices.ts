import prismaClient from "../../prisma";


interface CreateAppointment{
    date: string
    time: string
    clientId: string
    dentistId: string
}

class createAppointmentServices{
async execute({date, time, clientId, dentistId}: CreateAppointment){
    if (!date || !time || !clientId || !dentistId) {
        throw new Error('Existem campos em branco')
    }

    const resposta = await prismaClient.appointment.create({
        data:{
        date: date,
        time: time,
        clientId: clientId,
        dentistId: dentistId
        }
    })
    return resposta
}
}

export {createAppointmentServices}