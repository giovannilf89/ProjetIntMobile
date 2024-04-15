import { Request, Response } from 'express'
import { EditUserService } from '../../services/user/editUserServices'

class EditUserController {
    async handle(req: Request, res: Response) {
        const { id, editSenha } = req.body
        // console.log(req.body)

        const editUserService = new EditUserService()
        const response = await editUserService.execute({
            id,
            editSenha
        })
        return res.json(response)
    }
}

export { EditUserController }