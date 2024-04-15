import {Request, Response} from 'express'
import { AuthDentistService } from '../../services/dentist/authDentistService'


class AuthDentistController{
    async handle (req: Request, res: Response){
        const {email, senha} = req.body
        const authDentistService = new AuthDentistService()
        const response = await authDentistService.execute({
            email,
            senha
        })
        return res.json(response)
    }
}

export {AuthDentistController}