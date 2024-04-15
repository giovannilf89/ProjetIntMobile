import prismaClient from "../../prisma";

interface ListUniqueSchedule {
    id: string
}

class ListUniqueScheduleServices {
    async execute({ id }: ListUniqueSchedule) {
        const response = await prismaClient.appointment.findUnique({
            where: {
                id: id
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
export { ListUniqueScheduleServices }