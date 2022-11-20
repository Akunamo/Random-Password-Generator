const btn = document.querySelector(".generate-btn");

const form = document.querySelector(".passwordForm");
const password = document.querySelector(".password");
const charAmount = document.getElementById("characterAmount");

const includeUppercase = document.getElementById("includeUppercase");
const includeLowercase = document.getElementById("includeLowercase");
const includeSymbols = document.getElementById("includeSymbols");
const includeNumbers = document.getElementById("includeNumbers");

const UPPER_CASE_LETTERS = arrayFromLowToHigh(65, 90);
const LOWER_CASE_LETTERS = arrayFromLowToHigh(97, 122);
const SYMBOLS = arrayFromLowToHigh(33, 44);
const NUMBERS = arrayFromLowToHigh(48, 57);

const warning = document.querySelector(".warning")
form.addEventListener("submit", e => {
    e.preventDefault();
})

btn.addEventListener("click", generatePassword);

function generatePassword(e) {
  warning.classList.remove("active")
  const includeLower = includeLowercase.checked;
  const includeUpper = includeUppercase.checked;
  const Symbols = includeSymbols.checked;
  const Numbers = includeNumbers.checked;
  const includes = [];
  includeUpper && includes.push(...UPPER_CASE_LETTERS);
  includeLower && includes.push(...LOWER_CASE_LETTERS);
  // JUST to PRACTICE SOME CONCAT FUNCTION
  // includes.push(...(includeLower && includes.concat(LOWER_CASE_LETTERS)))
  Symbols && includes.push(...SYMBOLS);
  Numbers && includes.push(...NUMBERS);
  if(includes.length === 0 ) {
    warning.classList.add("active");
    return;
  }
  const pass = []
  for (let i = 0; i < charAmount.value; i++) {
      let elem = includes[Math.floor(Math.random() * includes.length)]    
      pass.push(elem)
  } 
  password.textContent = pass.join("");
}

function arrayFromLowToHigh(low, high) {
  const arr = [];
  for (let i = low; i < high + 1; i++) {
    const ele = String.fromCharCode(i); 
    arr.push(ele)
  }
  return arr;
}
