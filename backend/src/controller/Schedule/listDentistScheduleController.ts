import { Request, Response } from "express";
import { ListDentistScheduleServices } from "../../services/Schedule/listDentistScheduleServices";

class ListDentistScheduleController {
  async handle(req: Request, res: Response) {
    const { dentistId } = req.params;
    const listDentistSchedule = new ListDentistScheduleServices();
    const response = await listDentistSchedule.execute({
      dentistId,
    });
    return res.json(response);
  }
}

export { ListDentistScheduleController };
