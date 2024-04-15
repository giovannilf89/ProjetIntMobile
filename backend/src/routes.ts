
import { Router } from 'express'
import { AuthDentistController } from './controller/dentist/authDentistController'
import { CreateDentistController } from './controller/dentist/createDentistController'
import { EditDentistController } from './controller/dentist/editDentistController'
import { createAppointmentController } from './controller/Schedule/createScheduleController'
import { AuthUserController } from './controller/user/authUserController'
import { CreateUserController } from './controller/user/createUserController'
import { EditUserController } from './controller/user/editUserController'
import { deleteUserController } from './controller/user/deleteUserController'
import { deleteDentistController } from './controller/dentist/deleteDentistController'
import { deleteScheduleController } from './controller/Schedule/deleteScheduleController'
import { listDentistController } from './controller/dentist/listDentistController'
import { listUniqueDentistController } from './controller/dentist/listUniqueDentistController'
import { ListUniqueUserController } from './controller/user/listUniqueUserController'
import { ListUserController } from './controller/user/listUserController'
import { ListScheduleController } from './controller/Schedule/listScheduleController'
import { ListUniqueScheduleController } from './controller/Schedule/listUniqueScheduleController'
import { ListClientScheduleController } from './controller/Schedule/listClientScheduleController'
import { isAutenticado } from './middleware/isAutenticado'



const router = Router()

// Routes Dentist

router.post('/CriarDentista', new CreateDentistController().handle)
router.put('/EditarDentista', new EditDentistController().handle)
router.post('/LoginDentista', new AuthDentistController().handle)
router.delete('/DeletarDentista', new deleteDentistController().handle)
router.get('/ListarDentistas', isAutenticado,  new listDentistController().handle)
router.get('/ListarDentistaUnico/:id', new listUniqueDentistController().handle)

// Routes User

router.post('/CriarUsuario', new CreateUserController().handle)
router.put('/EditarUsuario', new EditUserController().handle)
router.post('/LoginUsuario', new AuthUserController().handle)
router.delete('/DeletarUsuario', new deleteUserController().handle)
router.get('/ListarUsuario', new ListUserController().handle)
router.get('/ListarUsuarioUnico/:id', new ListUniqueUserController().handle)

// Routes Appointment
router.post('/CriarAgendamento', new createAppointmentController().handle)
router.delete('/DeletarAgendamento', isAutenticado, new deleteScheduleController().handle)
router.get('/ListarAgendamentos', new ListScheduleController().handle)
router.get('/ListarUniqueSchedule/:id', new ListUniqueScheduleController().handle)
router.get('/ListarClienteAgendamento/:clientId', isAutenticado, new ListClientScheduleController().handle)
export { router }