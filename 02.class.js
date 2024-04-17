// class = Classification
class BankAccount {
  _balance = 0;
  constructor(personName, initialBalance, address) {
    this.personName = personName;
    this._balance = initialBalance;
    this.address = address;
  }

  printInfo() {
    console.log(
      `Account from ${this.personName} has a balance of ${Number(
        this._balance
      ).toFixed(2)}`
    );
  }

  // "--Avoiding $2000 deposite--"
  // I use the same name of the propriete in order to abstract what I am doing, and the user could use "class.propriete" instead of "class._propriete"
  get balance() {
    return this._balance;
  }

  set balance(value) {
    if (Math.abs(this._balance - value) > 2000) {
      throw new Error("Variation of $2000.00 or more is not allowed");
    }
    this._balance = value;
  }
}

const ba1 = new BankAccount("Lucas", 200, "Mario");
console.log(ba1);
ba1.printInfo();
console.log(ba1 instanceof BankAccount);
console.log(typeof BankAccount); // Class is similar to a function with constructor

// Let's assume that we need to limit the amount of money we could put on account up to $2000, so I need to avoid:
console.log("--Avoiding $2000 deposite--");
ba1.balance += 1999; // ba1.balance = ba1.balance + 1999 --> set balance(1999 + 200) --> Value = 2199 --> value - this._balance = 1999 **    OK!
console.log(ba1);
const ba2 = new BankAccount("Caio", 200, "Mario");
try {
  ba2.balance += 2001; // ba2.balance = ba2.balance + 2001 --> set balance(2001 + 200) --> Value = 22001 --> value - this._balance = 2001 ** ERROR!
} catch (erro) {
  console.error(erro.message);
}
console.log(ba2);
