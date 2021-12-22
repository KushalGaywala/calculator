var total = "0";
var buffer = "0";
var operator = "0";

const input = document.querySelector(".background");
const display = document.querySelector(".display");

function doComputation(ope, num1, num2) {
  switch (ope) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "×":
      console.log(`${num1} * ${num2}`);
      return num1 * num2;
    case "÷":
      return num1 / num2;
  }
}

input.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    if (isNaN(Number(event.target.innerText))) {
      handleSymbol(event.target.innerText);
    } else {
      handleNumber(event.target.innerText);
    }
  }
});

function handleNumber(value) {
  if (display.innerText !== "0") {
    display.innerText += value;
  } else {
    display.innerText = value;
  }
}

function reset() {
  display.innerText = "0";
  total = "0";
  buffer = "0";
  operator = "0";
}

function handleSymbol(value) {
  switch (value) {
    case "C":
      reset();
      break;
    case "←":
      if (display.innerText.length === 1) {
        display.innerText = "0";
      } else {
        display.innerText = display.innerText.substring(
          0,
          display.innerText.length - 1
        );
      }
      break;
    case "=":
      console.log(total, operator, display.innerText);
      total = doComputation(operator, Number(total), Number(display.innerText));
      console.log(total);
      display.innerText = total;
      operator = "0";
      buffer = "0";
      break;
    case "+":
    case "-":
    case "×":
    case "÷":
      if (operator === "0") {
        operator = value;
        total = display.innerText;
      } else {
        buffer = display.innerText;
        total = doComputation(operator, Number(total), Number(buffer));
        operator = value;
        buffer = "0";
      }

      display.innerText = "0";
      break;
  }
  buffer = 0;
}
