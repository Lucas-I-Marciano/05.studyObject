# Study - Objects and Classes in JavaScript

This project focuses on studying JavaScript objects and classes, including methods that reference object properties, encapsulation techniques, and interaction with HTML pages.

## Project Objectives
- Learn how to create functions within objects that access the object's own properties.
- Study encapsulation techniques using `_` and `#` prefixes to define private variables.
- Understand and implement the `constructor` function in JavaScript classes.
- Develop a `Stopwatch` class that interacts with an HTML page to function as a stopwatch.

## Features
- Object-oriented programming concepts in JavaScript.
- Methods that reference object properties using `this`.
- Encapsulation with private properties using `_` and `#` prefixes.
- Practical example with a `Stopwatch` class interacting with a web page.

## How to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/Lucas-I-Marciano/05.studyObject
   ```
2. Open the project folder:
   ```bash
   cd 05.studyObject
   ```
3. Open `index.html` in your browser to view examples.

## Concepts Covered
### Objects and Methods
- Creating functions within objects that access object properties.

#### Example
```javascript
const account2 = {
  name: "C3PO",
  accountNumber: "123-7",
  balance: 5000,
  displayBalance: function () {
    console.log(
      `Account number ${this.accountNumber} has a total balance of ${this.balance}`
    );
  },
};
account2.displayBalance();
```

### Encapsulation and Classes
- Using `_` and `#` prefixes for private variables.
- Implementing the `constructor` function in classes.

### Stopwatch Class Example
This class interacts with an HTML page to create a functional stopwatch.

#### Example
```javascript
class Stopwatch {
  #elapsedTimeInSeconds = 0;
  #intervalId = null;

  start(callback = () => {}) {
    this.#intervalId = setInterval(() => {
      this.#elapsedTimeInSeconds++;
      callback();
    }, 1000);
    callback();
  }

  stop(callback = () => {}) {
    clearInterval(this.#intervalId);
    callback();
  }

  reset(callback = () => {}) {
    this.#elapsedTimeInSeconds = 0;
    callback();
  }

  get elapsedTime() {
    return Stopwatch.formatTime(this.#elapsedTimeInSeconds);
  }

  ...

  function updateDisplay() {
    document.getElementById("timeStopwatch").innerText = sw1.elapsedTime;
  }

  const sw1 = new Stopwatch();

document.getElementById("start").addEventListener("click", function () {
    sw1.start(updateDisplay);
  });
```

## Author
[Lucas I. Marciano](https://github.com/Lucas-I-Marciano)

## License
This project is for educational purposes only and does not include a specific license.

