import {Request, Response} from 'express'
import users from '../db/users'
import User from '../models/User';
import UserType from '../models/UserType';

export default class UsersController {
  static index(request: Request, response: Response) {
    const queryType = request.query.type ? String(request.query.type) : '';
    const queryName = request.query.name ? String(request.query.name) : '';

    if ( queryType
      && queryType.toUpperCase() !== UserType.NORMAL
      && queryType.toUpperCase() !== UserType.ADMIN
    ) return response.status(400).json({ message: 'INVALID_TYPE'});
      
    const filteredUsers = users
      .filter((user: User) => queryType ? user.type === queryType.toUpperCase() : true)
      .filter((user: User) => queryName ? user.name.toUpperCase().includes(queryName.toUpperCase()) : true);
    
    return filteredUsers.length > 0
      ? response.json(filteredUsers)
      : response.status(400).json({ message: 'USER_NOT_FOUND'});
  }

  static create(request: Request, response: Response) {
    const { name, email, type, age} = request.body

    if (!name || !email || !type || !age) {
      return response.status(400).json({ message: 'MISSING_INFORMATION'})
    }

    const userType = type.toLowerCase() === UserType.ADMIN ? UserType.ADMIN : UserType.NORMAL;
    const user = {
      id: users.length + 1,
      name,
      email,
      type: userType,
      age
    };

    users.push(user);

    return response.status(201).json(user);
  }
}