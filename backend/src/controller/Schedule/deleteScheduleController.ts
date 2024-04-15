import {Request, Response} from 'express'
import { deleteScheduleServices } from '../../services/Schedule/deleteScheduleServices'


class deleteScheduleController{
    async handle(req: Request, res: Response){
        const {remove} = req.body
        const deleteSchedule = new deleteScheduleServices()
        const del = await deleteSchedule.execute({
            remove
        })
        return res.json(del)
    }
}

export {deleteScheduleController}