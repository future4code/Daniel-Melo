import express from 'express'
import cors from 'cors'
import CustomersController from './controllers/CustomersController'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/customers', CustomersController.index)
app.post('/customers', CustomersController.create)

app.listen(3333, () => {
  console.log('Server listening on http://localhost:3333')
})
