import {Request, Response} from 'express'
import { listDentistServices } from '../../services/dentist/listDentistServices'


class listDentistController{
async handle(req: Request, res: Response){

    const listDentist = new listDentistServices()
    const list = await listDentist.execute()

    return res.json(list)
}
}

export {listDentistController}