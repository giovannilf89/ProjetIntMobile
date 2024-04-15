import {Request, Response } from 'express'
import { ListUserServices } from '../../services/user/listUserServices'

class ListUserController{
async handle(req: Request, res: Response){

    const listUser = new ListUserServices()
    const list = await listUser.execute()

    return res.json(list)
}
}

export {ListUserController}