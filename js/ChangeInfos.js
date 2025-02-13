// alpha.lenght = 10 || span 0 à 11
const alpha = ["A", "R", "C", "H", "I", "T", "E", "C", "T", "U", "R", "E"]; // ARCHITECTURE (12 lettres)
// beta.lenght = 18 || span 12 à 22
const beta = ["S", "C", "E", "N", "O", "G", "R", "A", "P", "H", "Y"]; // SCENOGRAPHY (11 lettres)
// charlie.lenght = 12 || span 23 à 35
const charlie = ["A", "R", "T", " ", "D", "I", "R", "E", "C", "T", "I", "O", "N"]; // ART DIRECTION (13 lettres)

const delta = ["E", "P", "H", "E", "M", "E", "R", "A", "L", "", "", ""];
const echo = ["T", "I", "M", "E", "L", "E", "S", "S", "", "", ""];
const foxtrot = ["S", "T", "R", "U", "C", "T", "U", "R", "E", "", "", "", ""];

function GetAllInfosSpan() {
  return document.querySelectorAll(".infos span");
}

let infosLetters = GetAllInfosSpan();

function DeleteLetters() {
  // toutes les 25 ms lettre change
  let x = 0;
  let deleteLettersInterval = setInterval(function () {
    if (x < 36) {
      infosLetters[x].style.opacity = 0;
      x++;
    } else {
      clearInterval(deleteLettersInterval);
    }
  }, 25);
}

function WriteNewWord() {
  if (infosLetters[0].innerHTML === "A") {
    let x = 0;
    let addNewLettersInterval = setInterval(function () {
      if (x <= 11) {
        infosLetters[x].innerHTML = delta[x];
        infosLetters[x].style.opacity = 1;
        x++;
      } else if (x >= 12 && x <= 22) {
        infosLetters[x].innerHTML = echo[x - 12];
        infosLetters[x].style.opacity = 1;
        x++;
      } else if (x >= 23 && x <= 35) {
        infosLetters[x].innerHTML = foxtrot[x - 23];
        infosLetters[x].style.opacity = 1;
        x++;
      } else {
        clearInterval(addNewLettersInterval);
      }
    }, 25);
  } else {
    let x = 0;
    let addNewLettersInterval = setInterval(function () {
      if (x <= 11) {
        infosLetters[x].innerHTML = alpha[x];
        infosLetters[x].style.opacity = 1;
        x++;
      } else if (x >= 12 && x <= 22) {
        infosLetters[x].innerHTML = beta[x - 12];
        infosLetters[x].style.opacity = 1;
        x++;
      } else if (x >= 23 && x <= 35) {
        infosLetters[x].innerHTML = charlie[x - 23];
        infosLetters[x].style.opacity = 1;
        x++;
      } else {
        clearInterval(addNewLettersInterval);
      }
    }, 25);
  }
}

async function ChangeInfos() {
  DeleteLetters();
  await sleep(1000);
  WriteNewWord();
}
