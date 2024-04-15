import {Request, Response} from 'express'
import { ListUniqueUserServices } from '../../services/user/listUniqueUserServices'

class ListUniqueUserController{
async handle(req: Request, res: Response){
    const {id} = req.params
    const listUniqueUser = new ListUniqueUserServices()
    const response = await listUniqueUser.execute({
        id
    })
    return res.json(response)
}
}

export {ListUniqueUserController}