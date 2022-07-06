const display = document.getElementById("display");
const operators = document.querySelectorAll(".opt");
const digits = document.querySelectorAll(".num");
const symbol = document.querySelectorAll(".symbol");

// First row of the calculator 
operators.forEach((element) => {
    element.addEventListener("click", () => {
        display.innerHTML = element.innerHTML;
    })
})

// The numbers on the calculator
digits.forEach((element) => {
   element.addEventListener("click", () => {
        display.innerHTML = element.innerHTML;
   })
})

console.log(symbol);