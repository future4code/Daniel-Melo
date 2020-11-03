import { Request, Response } from "express"
import selectAllUsers from "../data/selectAllUsers"

import UserFilter from '../types/UserFilter'

export const getAllUsers = async(req: Request,res: Response) => {
   const { name, type, page, order, orderBy } = req.query
   
   try {
      if (name !== undefined && !name) throw new Error('name is missing')
      if (type !== undefined && !type) throw new Error('type is missing')
      if (page !== undefined && !page) throw new Error('page is missing')
      if (order !== undefined && !order) throw new Error('order is missing')
      if (orderBy !== undefined && !order) throw new Error('order is missing')

      const filters: UserFilter = { name: '', type: '', page: 1, limit: 5, orderBy: 'name', order: 'desc' } 

      if (name) filters.name = String(name)
      if (type) filters.type = String(type)
      if (page) filters.page = Number(page)
      if (order) filters.order = String(order)

      const users = await selectAllUsers(filters)

      if(!users.length){
         throw new Error("No user found")
      }

      return res.status(200).send(users)
   } catch (error) {
      console.log(error)
      return res.status(404).send(error.message || error.sqlMessage)
   }
}