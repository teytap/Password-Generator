const alfas = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numerics = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialChars = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordEl1 = document.getElementById("password1");
let passwordEl2 = document.getElementById("password2");
let copyEl = document.getElementById("copy");
let copyEl2 = document.getElementById("copy2");
let val = 15;

function passwordGenerator() {
  let numericEl = document.getElementById("numeric");
  let alfaEl = document.getElementById("alfa");
  let specialCharEl = document.getElementById("special-char");
  let chars = [];
  let checkMessage = document.getElementById("check-box-message");
  if (!numericEl.checked && !alfaEl.checked && !specialCharEl.checked) {
    checkMessage.textContent = "Check at least one type!";

    return 0;
  }
  if (numericEl.checked) {
    chars = chars.concat(numerics);
    checkMessage.textContent = "";
  }
  if (alfaEl.checked) {
    chars = chars.concat(alfas);
    checkMessage.textContent = "";
  }
  if (specialCharEl.checked) {
    chars = chars.concat(specialChars);
    checkMessage.textContent = "";
  }
  passwordEl1.value = "";
  passwordEl2.value = "";
  copyEl.style.color = "white";
  copyEl2.style.color = "white";
  for (let i = 0; i < val; i++) {
    let char1 = chars[Math.floor(Math.random() * chars.length)];
    let char2 = chars[Math.floor(Math.random() * chars.length)];
    passwordEl1.value += char1;
    passwordEl2.value += char2;
  }
}
function copyToClipboard() {
  alert(passwordEl1);
}
document.querySelector("#copy").addEventListener("click", copy);
document.querySelector("#copy2").addEventListener("click", copy);

function copy() {
  var copyText = document.getElementById("password1").value;
  navigator.clipboard.writeText(copyText).then(() => {
    alert("Copied to clipboard");
  });
}
function change_value(e) {
  val = document.getElementById("main").value;
  display = document.getElementById("value_display");
  display.textContent = val;
}
