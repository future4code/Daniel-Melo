import Account from "./Account"

class Customer {
  public id: number
  public name: string
  public CPF: string
  public birth: Date
  public account: Account

  constructor(name: string, CPF: string, birth: Date) {
    this.id = Date.now()
    this.name = name
    this.CPF = CPF
    this.birth = birth
    this.account = new Account()
  }
}

export default Customer