
let inputLength = document.getElementById("inputLength");
let lowercaseCheckbox = document.getElementById("lowercase");
let uppercaseCheckbox = document.getElementById("uppercase");
let symbolCheckbox = document.getElementById("symbol");
let numberCheckbox = document.getElementById("number");
let password = document.getElementById("password");
let error = document.getElementById("error");
password.value = "Loading ...";
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  console.log(inputLength.value);
  let totalCharacters = "";
  let randomPassword = "";
  let lowercaseAlphabets = "abcdefghijklmnopqrstuvwxyz";
  let upercaseAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let symbols = "!@#$%&*()_-+=?";
  let numbers = "0123456789";
  totalCharacters += lowercaseCheckbox.checked ? lowercaseAlphabets : "";
  totalCharacters += uppercaseCheckbox.checked ? upercaseAlphabets : "";
  totalCharacters += symbolCheckbox.checked ? symbols : "";
  totalCharacters += numberCheckbox.checked ? numbers : "";
  if (
    inputLength.value < 5 ||
    inputLength.value > 30 ||
    inputLength.value == ""
  ) {
    error.innerText = "*Enter The Length b/w 5-30*";
    password.value = "Loading ...";
  } else {
    for (let i = 0; i < inputLength.value; i++) {
      let randomIndex = Math.floor(
        Math.random() * totalCharacters.length
      );
      randomPassword += `${totalCharacters.charAt(randomIndex)}`;
    }

    if (randomPassword == "") {
      error.innerText =
        "*Include at least one type to generate random password*";
        password.value = 'Loading ...';
    } else {
      password.value = randomPassword;
      error.innerText = "";
    }
  }
});
