import { Request, Response} from 'express'
import Customer from '../models/Customer'

import customers from '../db/customers'

class CustomersController {
  static index(req: Request, res: Response) {
    return res.json(customers)
  }

  static create(req: Request, res: Response) {
    const {name, CPF, bornDate} = req.body
    const [day, month, year] = bornDate.split('/')
    const today = new Date();

    if (today.getUTCFullYear() - year < 18) {
      return res.status(401).json({ message: "MIN_AGE_REQUIREMENT_NOT_MET"})
    }

    const birth = new Date(year, month, day)

    const customer = new Customer(name, CPF, birth)
    
    customers.push(customer)

    return res.status(201).json(customer)

  }
}

export default CustomersController