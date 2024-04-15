import { Request, Response } from 'express'
import { ListUniqueScheduleServices } from '../../services/Schedule/listUniqueScheduleServices'

class ListUniqueScheduleController {

    async handle(req: Request, res: Response) {
        const { id } = req.params
        const listUniqueSchedule = new ListUniqueScheduleServices()
        const response = await listUniqueSchedule.execute({
            id
        })
        return res.json(response)
    }
}

export {ListUniqueScheduleController}