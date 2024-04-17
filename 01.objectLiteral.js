// Object Literal - Creating from scratch
const account1 = {
  name: "Lucas Marciano",
  accountNumber: "34567-8",
  balance: 500,
  displayBalance: function () {
    console.log(
      `Account number ${this.accountNumber} has a total balance of ${this.balance}`
    );
  },
};

const account2 = {
  name: "Thaina Freitas",
  accountNumber: "51648-7",
  balance: 5000,
  displayBalance: function () {
    console.log(
      `Account number ${this.accountNumber} has a total balance of ${this.balance}`
    );
  },
};

console.log("1 -", account1);
account1.displayBalance();
console.log("2 -", account2);
account2.displayBalance();

// PROBLEM: I would create different objects whenever I need one more, and always with the same structur
// SOLUTION: Factory Function
function createAccoutn(name, accountNumber, initialBalance) {
  return {
    name: name,
    accountNumber, // With that, the property and value will have the same value
    balance: initialBalance,
    displayBalance: function () {
      console.log(
        `Account number ${this.accountNumber} has a total balance of ${this.balance}`
      );
    },
  };
}

const account3 = createAccoutn("Caio", "84567-8", 250);
const account4 = createAccoutn("Adriana", "84157-8", 1250);

console.log("3 -", account3);
account3.displayBalance();

console.log("4 -", account4);
account4.displayBalance();

// Constructor - writing on PascalCase
// When we create this function that will return an object of a certain type, we could say that we are creating a object type "Account", and in this case, the function that create this type of variable is supposed to be named of "class"
// And the object that return from that class is the "instance of the class"
function Account(username, accountNumber, initialBalance) {
  this.name = username;
  this.accountNumber = accountNumber;
  this.balance = initialBalance;
  this.displayBalance = function () {
    console.log(
      `Account number ${this.accountNumber} has a total balance of ${this.balance}`
    );
  };
}

const account5 = new Account("Julielson Marciano", "14578-8", 5000);
console.log("5 -", account5);
account5.displayBalance();

console.log(account5 instanceof Account); //true
