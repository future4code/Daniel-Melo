import Customer from './Customer'
import Transaction from './Transaction';

class Account {
  public id: number
  public balance: number;
  public bankStatement: Transaction[]

  constructor() {
    this.id = Date.now()
    this.balance = 0
    this.bankStatement = []
  }
}

export default Account;