class Stopwatch {
  // If I put # before a variable, this become a private member, so I would just change it inside my class, in order to avoid someone put elapsedTimeInSeconds = 26;
  #elapsedTimeInSeconds = 0;
  #intervalId = null;
  // constructor() {} // I would use it in order to collect data when starts my class, but the class itself will create this if I do not provide

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

  // In order to have an function related to the class itself an not a proprite from the object created from the class, I could put the function as "static"
  // I will use this because this function would be usable in another contexts, not only in this class
  static formatTime(timeInSeconds) {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds - hours * 3600 - minutes * 60;

    return `${Stopwatch.zeroPadding(hours)}:${Stopwatch.zeroPadding(
      minutes
    )}:${Stopwatch.zeroPadding(seconds)}`;
  }

  static zeroPadding(originalNumber, desiredAmountOfDigits = 2) {
    let stringNumber = String(originalNumber);
    const zeroesRequired = desiredAmountOfDigits - stringNumber.length;
    if (zeroesRequired <= 0) {
      return stringNumber;
    } else {
      for (let counter = 0; counter < zeroesRequired; counter++) {
        stringNumber = `0${stringNumber}`;
      }
      return stringNumber;
    }
  }
}

const sw1 = new Stopwatch();

document.getElementById("start").addEventListener("click", function () {
  sw1.start(updateDisplay);
});
document.getElementById("stop").addEventListener("click", function () {
  sw1.stop();
});
document.getElementById("reset").addEventListener("click", function () {
  sw1.reset(updateDisplay);
});

function updateDisplay() {
  document.getElementById("timeStopwatch").innerText = sw1.elapsedTime;
}

// setInterval(() => {
//   document.getElementById("timeStopwatch").innerHTML = sw1.elapsedTime;
// }, 1000);
