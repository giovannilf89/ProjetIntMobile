import{Request, Response} from 'express'
import { ListUniqueDentistServices } from '../../services/dentist/listUniqueDentistService'


class listUniqueDentistController{
async handle(req: Request, res: Response){
    const {id} = req.params
    const listDentist = new ListUniqueDentistServices
    const response = await listDentist.execute({
        id
    })
    return res.json(response)
}
}

export {listUniqueDentistController}