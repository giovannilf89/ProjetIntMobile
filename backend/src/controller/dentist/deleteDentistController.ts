import {Request, Response} from 'express'
import { deleteDentistService } from '../../services/dentist/deleteDentistService'


class deleteDentistController{
async handle(req: Request, res:Response){
    const {remove} = req.body
    const deleteDentist = new deleteDentistService()
    const del = await deleteDentist.execute({
        remove
    })
    return res.json(del)
}
}

export {deleteDentistController}