// alpha.lenght = 10 || span 0 à 9
const alpha = ["S", "E", "T", " ", "D", "E", "S", "I", "G", "N"];
// beta.lenght = 18 || span 10 à 27
const beta = ["C", "R", "E", "A", "T", "I", "V", "E", " ", "D", "I", "R", "E", "C", "T", "I", "O", "N"];
// charlie.lenght = 12 || span 28 à 39
const charlie = ["A", "R", "C", "H", "I", "T", "E", "C", "T", "U", "R", "E"];

const delta = ["E", "P", "H", "E", "M", "E", "R", "A", "L", " "];
const echo = ["T", "I", "M", "E", "L", "E", "S", "S", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "];
const foxtrot = ["S", "T", "R", "U", "C", "T", "U", "R", "E", " ", " ", " "];

function GetAllInfosSpan(){
  return document.querySelectorAll('.infos span');
}

let infosLetters = GetAllInfosSpan();


function DeleteLetters(){
  // toutes les 25 ms lettre change
  let x = 0;
  let deleteLettersInterval = setInterval(function(){
    if (x < 40){
      infosLetters[x].style.opacity = 0;
      x++;
    } else {
      clearInterval(deleteLettersInterval);
    }
  }, 25)
}

function WriteNewWord(){
  if (infosLetters[0].innerHTML === "S"){
    let x = 0;
    let addNewLettersInterval = setInterval(function(){
      if (x <= 9){
        infosLetters[x].innerHTML = delta[x];
        infosLetters[x].style.opacity = 1;
        x++;
      } else if  (x >= 10 && x <= 27){
        infosLetters[x].innerHTML = echo[x - 10];
        infosLetters[x].style.opacity = 1;
        x++;
      } else if (x >= 28 && x <= 39){
        infosLetters[x].innerHTML = foxtrot[x - 28];
        infosLetters[x].style.opacity = 1;
        x++;
      } else {
        clearInterval(addNewLettersInterval);
      }
    }, 25)
  } else {
    let x = 0;
    let addNewLettersInterval = setInterval(function(){
      if (x <= 9){
        infosLetters[x].innerHTML = alpha[x];
        infosLetters[x].style.opacity = 1;
        x++;
      } else if  (x >= 10 && x <= 27){
        infosLetters[x].innerHTML = beta[x - 10];
        infosLetters[x].style.opacity = 1;
        x++;
      } else if (x >= 28 && x <= 39){
        infosLetters[x].innerHTML = charlie[x - 28];
        infosLetters[x].style.opacity = 1;
        x++;
      } else {
        clearInterval(addNewLettersInterval);
      }
    }, 25)
  }
}


async function ChangeInfos(){
  DeleteLetters();
  await sleep(1000);
  WriteNewWord()
}
