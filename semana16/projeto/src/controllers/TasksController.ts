import { json, Request, Response } from 'express'
import knex from '../database/connection'

import { existsOrError } from '../utils/validations'

class TasksController {
  static async index(req: Request, res: Response) {
    try {
      const tasks = await knex('tasks').select('*')
      
      return res.status(200).json(tasks)
    } catch (err) {
      return res.status(500).send(err)
    }
  }

  static async show(req: Request, res: Response) {
    const { id } = req.params
    
    try {
      const task = await knex('tasks').where({ id }).first()
      existsOrError(task, "task not found")
      
      return res.status(200).json(task)
    } catch (err) {
      if (err === "task not found") 
        return res.status(404).json({ message: err })

      return res.status(500).send(err)
    }
  }

  static async create(req: Request, res: Response) {
    const { title, description, limitDate, creatorUserId } = req.body

    try {
      existsOrError(title, 'title is missing')
      existsOrError(description, 'description is missing')
      existsOrError(limitDate, 'limit date is missing')
      existsOrError(creatorUserId, 'creator user id is missing')
    } catch (err) {
      return res.status(400).send({ message: err})
    }

    const [day, month, year] = limitDate.split('/')
    const limit_date = `${year}-${month}-${day}`
    
    try {
      const [ taskID ] = await knex('tasks').insert({
        title,
        description,
        limit_date,
        author: creatorUserId,
        status: 'to do'
      })
      
      return res.status(201).json({
        id: taskID,
        title,
        description,
        limit_date,
        author: creatorUserId,
        status: 'to do'
      })
    } catch (err) {
      return res.status(500).send(err)
    }
  }
}

export default TasksController