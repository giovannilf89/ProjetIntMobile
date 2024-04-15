import { Request, Response } from 'express'
import { ListClientScheduleServices } from '../../services/Schedule/listClientScheduleServices'

class ListClientScheduleController {

    async handle(req: Request, res: Response) {
        const { clientId } = req.params
        const listClientSchedule = new ListClientScheduleServices()
        const response = await listClientSchedule.execute({
            clientId
        })
        return res.json(response)
    }
}

export {ListClientScheduleController}