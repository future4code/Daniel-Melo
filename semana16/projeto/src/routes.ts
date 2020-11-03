import { Router } from 'express'
import UsersController from './controllers/UsersController'
import TasksController from './controllers/TasksController'

const routes = Router()

routes.get('/user', UsersController.index)
routes.get('/user/:id', UsersController.show)
routes.put('/user', UsersController.create)
routes.post('/user/edit/:id', UsersController.update)

routes.get('/task', TasksController.index)
routes.get('/task/:id', TasksController.show)
routes.put('/task', TasksController.create)

export default routes