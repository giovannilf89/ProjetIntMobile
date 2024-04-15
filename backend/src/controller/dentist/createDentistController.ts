import {Request, Response} from 'express'
import { CreateDentistService } from '../../services/dentist/createDentistServices'


class CreateDentistController {
    async handle (req: Request, res: Response){
        const {nome, email, senha} = req.body
        // console.log(req.body) 

        const createDentistService = new CreateDentistService()
        const response = await createDentistService.execute({
            nome, email, senha
        })
        return res.json(response)
    }
}

export {CreateDentistController}