import {Request, Response} from 'express'
import { CreateUserService } from '../../services/user/createUserServices'

class CreateUserController {
    async handle (req: Request, res: Response) {
        const {nome, email, celular, cpf, cep, rua, complemento, bairro, cidade, estado, senha} = req.body
        // console.log(req.body)

        const createUserService = new CreateUserService()
        const response = await createUserService.execute({
            nome, email, cpf, celular,  cep, rua, complemento, bairro, cidade, estado, senha
        })
        return res.json(response)
    }
}

export {CreateUserController}