import prismaClient from "../../prisma";

interface ListClientSchedule {
    clientId: string
}

class ListClientScheduleServices {
    async execute({ clientId }: ListClientSchedule) {
        const response = await prismaClient.appointment.findMany({
            where: {
                clientId: clientId
            },
            select: {
                id: true,
                date: true,
                time: true,
                dentist: true,
                client: true
            }
        })
        return response
    }
}
export { ListClientScheduleServices }