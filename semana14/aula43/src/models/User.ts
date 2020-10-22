import UserType from './UserType'

export default class User {
  public id: number;
  public name: string;
  public email: string;
  public type: UserType;
  public age: number;

  constructor(id: number, name: string, email: string, type: UserType, age: number) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.type = type;
    this.age = age
  }
}