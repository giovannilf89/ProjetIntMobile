import { Request, Response } from 'express'
import { AuthUserService } from '../../services/user/authUserServices'

class AuthUserController {
    async handle(req: Request, res: Response) {
        const { email, senha } = req.body
        // console.log('controller', req.body)
        const authUserService = new AuthUserService()
        const response = await authUserService.execute({
            email,
            senha
        })
        return res.json(response)
    }
}

export { AuthUserController }