import prismaClient from "../../prisma";

interface ListDentistSchedule {
  dentistId: string;
}

class ListDentistScheduleServices {
  async execute({ dentistId }: ListDentistSchedule) {
    const response = await prismaClient.appointment.findMany({
      where: {
        dentistId: dentistId,
      },
      select: {
        id: true,
        date: true,
        time: true,
        dentist: true,
        client: true,
      },
    });
    return response;
  }
}

export { ListDentistScheduleServices };
