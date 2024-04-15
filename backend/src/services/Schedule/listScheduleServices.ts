import prismaClient from "../../prisma";

class ListScheduleServices{
async execute(){
    const listSchedule = await prismaClient.appointment.findMany({
        select:{
            id: true,
            time: true,
            date: true,
            dentist: true,
            client: true
        }
    })
    return(listSchedule)
}
}

export {ListScheduleServices}