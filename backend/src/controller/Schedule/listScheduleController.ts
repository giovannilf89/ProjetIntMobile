import {Request, Response} from 'express'
import { ListScheduleServices } from '../../services/Schedule/listScheduleServices'

class ListScheduleController{
async handle(req: Request, res: Response){

    const listSchedule = new ListScheduleServices()
    const list = await listSchedule.execute()

    return res.json(list)
}
}

export {ListScheduleController}