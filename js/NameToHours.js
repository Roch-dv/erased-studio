
// This file include the logic to go from the Name ERASED STUDIO to the actual time --
// Obviously it can be refracted, but no worries, I am getting there !


function RandomLetter (){
  const alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  let randomLet = alpha[Math.floor(Math.random() * alpha.length)];
  return randomLet;
}

function GetAllSpan(){
  return document.querySelectorAll('.name span');
}


// This function will flip the two first letter into actual hour time -- Takes 1,5sec
// column is 0 or 1
function GetHourFlippin(column){
  let i = 0
  if (column == 0){
    var flip = setInterval(function(){
      if (i < 15){
        span = GetAllSpan();
        span[0].innerHTML = RandomLetter();
        i++
      } else {
        clearInterval(flip);
        let dt = new Date();
        span[0].innerHTML = (("0"+dt.getHours()).slice(-2)[column]);
      }
    }, 100)
  } else if (column == 1){
    var flip = setInterval(function(){
      if (i < 15){
        span = GetAllSpan();
        span[1].innerHTML = RandomLetter();
        i++
      } else {
        clearInterval(flip);
        let dt = new Date();
        span[1].innerHTML = (("0"+dt.getHours()).slice(-2)[column]);
      }
    }, 100)
  }
}

// This function will flip the two first letter into actual minutes time -- Takes 1,5sec
// column is 0 or 1
function GetMinuteFlippin(column){
  let i = 0
  if (column == 0){
    var flip = setInterval(function(){
      if (i < 15){
        span = GetAllSpan();
        span[2].innerHTML = RandomLetter();
        i++
      } else {
        clearInterval(flip);
        let dt = new Date();
        span[2].innerHTML = (("0"+dt.getMinutes()).slice(-2)[column]);
      }
    }, 100)
  } else if (column == 1){
    var flip = setInterval(function(){
      if (i < 15){
        span = GetAllSpan();
        span[3].innerHTML = RandomLetter();
        i++
      } else {
        clearInterval(flip);
        let dt = new Date();
        span[3].innerHTML = (("0"+dt.getMinutes()).slice(-2)[column]);
      }
    }, 100)
  }
}

// This function will flip the two first letter into actual seconds time -- Takes 1,5sec
// column is 0 or 1
function GetSecondeFlippin(column){
  let i = 0
  if (column == 0){
    var flip = setInterval(function(){
      if (i < 15){
        span = GetAllSpan();
        span[4].innerHTML = RandomLetter();
        i++
      } else {
        clearInterval(flip);
        let dt = new Date();
        span[4].innerHTML = (("0"+dt.getSeconds()).slice(-2)[column]);
      }
    }, 100)
  } else if (column == 1){
    var flip = setInterval(function(){
      if (i < 15){
        span = GetAllSpan();
        span[5].innerHTML = RandomLetter();
        i++
      } else {
        clearInterval(flip);
        let dt = new Date();
        span[5].innerHTML = (("0"+dt.getSeconds()).slice(-2)[column]);
      }
    }, 100)
  }
}

// This function will flip the two first letter into actual date -- Takes 1,5sec
// column is 0 or 1
function GetDateFlippin(column){
  let i = 0
  if (column == 0){
    var flip = setInterval(function(){
      if (i < 15){
        span = GetAllSpan();
        span[6].innerHTML = RandomLetter();
        i++
      } else {
        clearInterval(flip);
        let dt = new Date();
        span[6].innerHTML = (("0"+dt.getDate()).slice(-2)[column]);
      }
    }, 100)
  } else if (column == 1){
    var flip = setInterval(function(){
      if (i < 15){
        span = GetAllSpan();
        span[7].innerHTML = RandomLetter();
        i++
      } else {
        clearInterval(flip);
        let dt = new Date();
        span[7].innerHTML = (("0"+dt.getDate()).slice(-2)[column]);
      }
    }, 100)
  }
}


// This function will flip the two first letter into actual month -- Takes 1,5sec
// column is 0 or 1
function GetMonthFlippin(column){
  let i = 0
  if (column == 0){
    var flip = setInterval(function(){
      if (i < 15){
        span = GetAllSpan();
        span[8].innerHTML = RandomLetter();
        i++
      } else {
        clearInterval(flip);
        let dt = new Date();
        span[8].innerHTML = (("0"+(dt.getMonth()+1)).slice(-2)[column]);
      }
    }, 100)
  } else if (column == 1){
    var flip = setInterval(function(){
      if (i < 15){
        span = GetAllSpan();
        span[9].innerHTML = RandomLetter();
        i++
      } else {
        clearInterval(flip);
        let dt = new Date();
        span[9].innerHTML = (("0"+(dt.getMonth()+1)).slice(-2)[column]);
      }
    }, 100)
  }
}

// This function will flip the two first letter into actual Year -- Takes 1,5sec
// column is 0 or 1
function GetYearFlippin(column){
  let i = 0
  if (column == 0){
    var flip = setInterval(function(){
      if (i < 15){
        span = GetAllSpan();
        span[10].innerHTML = RandomLetter();
        i++
      } else {
        clearInterval(flip);
        let dt = new Date();
        span[10].innerHTML = (("0"+dt.getFullYear()).slice(-2)[column]);
      }
    }, 100)
  } else if (column == 1){
    var flip = setInterval(function(){
      if (i < 15){
        span = GetAllSpan();
        span[11].innerHTML = RandomLetter();
        i++
      } else {
        clearInterval(flip);
        let dt = new Date();
        span[11].innerHTML = (("0"+dt.getFullYear()).slice(-2)[column]);
      }
    }, 100)
  }
}
