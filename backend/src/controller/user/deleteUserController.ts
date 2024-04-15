import {Request, Response} from 'express'
import { deleteUserServices } from '../../services/user/deleteUserServices'


class deleteUserController {
async handle(req: Request, res: Response){
    const {remove} = req.body
    const deleteUserService = new deleteUserServices()
    const del = await deleteUserService.execute({
        remove
    })
    return res.json(del)
}
}

export {deleteUserController}