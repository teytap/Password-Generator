const characters = [
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
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
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

function passwordGenerator() {
  passwordEl1.value = "";
  passwordEl2.value = "";
  copyEl.style.color = "white";
  copyEl2.style.color = "white";
  for (let i = 0; i < 15; i++) {
    let char1 = characters[Math.floor(Math.random() * characters.length)];
    let char2 = characters[Math.floor(Math.random() * characters.length)];
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
