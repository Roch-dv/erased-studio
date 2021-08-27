
// This file include the logic to go from the actual time to the Name ERASED STUDIO ---
// Obviously it can be refracted, but no worries, I am getting there !


function RandomNumber(){
  num = Math.floor(Math.random() * 10);
  return num.toString();
}

function GetAllSpan(){
  return document.querySelectorAll('.name span');
}

function RightLetter(index){
  span = GetAllSpan();
  switch (index) {
    case 0:
      span[0].innerHTML = "E";
      break;
    case 1:
      span[1].innerHTML = "R";
      break;
    case 2:
      span[2].innerHTML = "A";
      break;
    case 3:
      span[3].innerHTML = "S";
      break;
    case 4:
      span[4].innerHTML = "E";
      break;
    case 5:
      span[5].innerHTML = "D";
      break;
    case 6:
      span[6].innerHTML = "S";
      break;
    case 7:
      span[7].innerHTML = "T";
      break;
    case 8:
      span[8].innerHTML = "U";
      break;
    case 9:
      span[9].innerHTML = "D";
      break;
    case 10:
      span[10].innerHTML = "I";
      break;
    case 11:
      span[11].innerHTML = "O";
      break;
  }
}

// This function will flip the two first letter into actual hour time -- Takes 1,5sec
// x === index of letter
function GetLetterFlippin(index){
  let i = 0

  var flip = setInterval(function(){
    if (i < 15){
      span = GetAllSpan();
      span[index].innerHTML = RandomNumber();
      i++
    } else {
      clearInterval(flip);
      RightLetter(index);
    }
  }, 100)
}




