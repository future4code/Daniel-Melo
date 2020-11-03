import { Request, Response } from 'express'
import knex from '../database/connection'

import { existsOrError, notExistsOrError } from '../utils/validations'

class UsersController {
  static async index(req: Request, res: Response) {
    try {
      const users = await knex('users').select('*')
      
      return res.status(200).json(users)
    } catch (err) {
      return res.status(500).send(err)
    }
  }

  static async show(req: Request, res: Response) {
    const { id } = req.params
    
    try {
      const user = await knex('users').where({ id }).first()
      existsOrError(user, "user not found")
      
      return res.status(200).json({ id: user.id, nickname: user.nickname })
    } catch (err) {
      if (err === "user not found") 
        return res.status(404).json({ message: err })

      return res.status(500).send(err)
    }
  }

  static async create(req: Request, res: Response) {
    const { name, nickname, email } = req.body

    try {
      existsOrError(name, 'name is missing')
      existsOrError(nickname, 'nickname is missing')
      existsOrError(email, 'email is missing')
      
      const userFromDB = await knex('users').where({ email }).first()
      notExistsOrError(userFromDB, 'email already registered')
    } catch (err) {
      return res.status(400).send({ message: err})
    }

    try {
      const [ userID ] = await knex('users').insert({name, nickname, email})
      
      return res.status(201).json({
        id: userID,
        name,
        nickname,
        email
      })
    } catch (err) {
      return res.status(500).send(err)
    }
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params

    try {
      const userFromDB = await knex('users').where({ id }).first()
      existsOrError(userFromDB, 'user not found')
    } catch (err) {
      return res.status(404).json({ message: err })
    }

    const { name, nickname, email } = req.body

    try {
      name !== undefined && existsOrError(name, 'name is empty')
      nickname !== undefined && existsOrError(nickname, 'nickname is empty')
      email !== undefined && existsOrError(email, 'email is empty')
    } catch (err) {
      return res.status(400).json({ message: err })
    }

    const updatedUser: { name?: string, nickname?: string, email?: string} = {}
    if (name) updatedUser.name = name
    if (nickname) updatedUser.nickname = nickname
    if (email) updatedUser.email = email

    try {
      const user = await knex('users').where({id}).update(updatedUser)
      console.log(user)
      return res.status(202).json({ message: `user ${id} updated`})
    } catch (err) {
      return res.status(500).send(err)
    }
  }
}

export default UsersController