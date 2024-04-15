import {Request, Response} from 'express'
import { EditDentistService } from '../../services/dentist/editDentistServices'



class EditDentistController{
    async handle(req: Request, res: Response){
        const {id, editSenha } = req.body
        // console.log(req.body)
        const editDentistService = new EditDentistService()
        const response = await editDentistService.execute({
            id,
            editSenha
        })
        return res.json(response)

    }
}

export {EditDentistController}