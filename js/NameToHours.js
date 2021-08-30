
// This file include the logic to go from the Name ERASED STUDIO to the actual time --
// Obviously it can be refracted, but no worries, I am getting there !


function RandomLetter (){
  const alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  let randomLet = alpha[Math.floor(Math.random() * alpha.length)];
  return randomLet;
}


// This function will flip the two first letter into actual hour time -- Takes 1sec
// column is 0 or 1
let numberOfFlip = 20;
let intervalTime = 50;

function GetHourFlippin(column){
  let i = 0
  if (column == 0){
    var flip = setInterval(function(){
      if (i < numberOfFlip){
        span = GetAllSpan();
        span[0].innerHTML = RandomLetter();
        i++
      } else {
        clearInterval(flip);
        let dt = new Date();
        span[0].innerHTML = (("0"+dt.getHours()).slice(-2)[column]);
      }
    }, intervalTime)
  } else if (column == 1){
    var flip = setInterval(function(){
      if (i < numberOfFlip){
        span = GetAllSpan();
        span[1].innerHTML = RandomLetter();
        i++
      } else {
        clearInterval(flip);
        let dt = new Date();
        span[1].innerHTML = (("0"+dt.getHours()).slice(-2)[column]);
      }
    }, intervalTime)
  }
}

// This function will flip the two first letter into actual minutes time -- Takes 1sec
// column is 0 or 1
function GetMinuteFlippin(column){
  let i = 0
  if (column == 0){
    var flip = setInterval(function(){
      if (i < numberOfFlip){
        span = GetAllSpan();
        span[2].innerHTML = RandomLetter();
        i++
      } else {
        clearInterval(flip);
        let dt = new Date();
        span[2].innerHTML = (("0"+dt.getMinutes()).slice(-2)[column]);
      }
    }, intervalTime)
  } else if (column == 1){
    var flip = setInterval(function(){
      if (i < numberOfFlip){
        span = GetAllSpan();
        span[3].innerHTML = RandomLetter();
        i++
      } else {
        clearInterval(flip);
        let dt = new Date();
        span[3].innerHTML = (("0"+dt.getMinutes()).slice(-2)[column]);
      }
    }, intervalTime)
  }
}

// This function will flip the two first letter into actual seconds time -- Takes 1sec
// column is 0 or 1
function GetSecondeFlippin(column){
  let i = 0
  if (column == 0){
    var flip = setInterval(function(){
      if (i < numberOfFlip){
        span = GetAllSpan();
        span[4].innerHTML = RandomLetter();
        i++
      } else {
        clearInterval(flip);
        let dt = new Date();
        span[4].innerHTML = (("0"+dt.getSeconds()).slice(-2)[column]);
      }
    }, intervalTime)
  } else if (column == 1){
    var flip = setInterval(function(){
      if (i < numberOfFlip){
        span = GetAllSpan();
        span[5].innerHTML = RandomLetter();
        i++
      } else {
        clearInterval(flip);
        let dt = new Date();
        span[5].innerHTML = (("0"+dt.getSeconds()).slice(-2)[column]);
      }
    }, intervalTime)
  }
}

// This function will flip the two first letter into actual date -- Takes 1sec
// column is 0 or 1
function GetDateFlippin(column){
  let i = 0
  if (column == 0){
    var flip = setInterval(function(){
      if (i < numberOfFlip){
        span = GetAllSpan();
        span[6].innerHTML = RandomLetter();
        i++
      } else {
        clearInterval(flip);
        let dt = new Date();
        span[6].innerHTML = (("0"+dt.getDate()).slice(-2)[column]);
      }
    }, intervalTime)
  } else if (column == 1){
    var flip = setInterval(function(){
      if (i < numberOfFlip){
        span = GetAllSpan();
        span[7].innerHTML = RandomLetter();
        i++
      } else {
        clearInterval(flip);
        let dt = new Date();
        span[7].innerHTML = (("0"+dt.getDate()).slice(-2)[column]);
      }
    }, intervalTime)
  }
}


// This function will flip the two first letter into actual month -- Takes 1sec
// column is 0 or 1
function GetMonthFlippin(column){
  let i = 0
  if (column == 0){
    var flip = setInterval(function(){
      if (i < numberOfFlip){
        span = GetAllSpan();
        span[8].innerHTML = RandomLetter();
        i++
      } else {
        clearInterval(flip);
        let dt = new Date();
        span[8].innerHTML = (("0"+(dt.getMonth()+1)).slice(-2)[column]);
      }
    }, intervalTime)
  } else if (column == 1){
    var flip = setInterval(function(){
      if (i < numberOfFlip){
        span = GetAllSpan();
        span[9].innerHTML = RandomLetter();
        i++
      } else {
        clearInterval(flip);
        let dt = new Date();
        span[9].innerHTML = (("0"+(dt.getMonth()+1)).slice(-2)[column]);
      }
    }, intervalTime)
  }
}

// This function will flip the two first letter into actual Year -- Takes 1sec
// column is 0 or 1
function GetYearFlippin(column){
  let i = 0
  if (column == 0){
    var flip = setInterval(function(){
      if (i < numberOfFlip){
        span = GetAllSpan();
        span[10].innerHTML = RandomLetter();
        i++
      } else {
        clearInterval(flip);
        let dt = new Date();
        span[10].innerHTML = (("0"+dt.getFullYear()).slice(-2)[column]);
      }
    }, intervalTime)
  } else if (column == 1){
    var flip = setInterval(function(){
      if (i < numberOfFlip){
        span = GetAllSpan();
        span[11].innerHTML = RandomLetter();
        i++
      } else {
        clearInterval(flip);
        let dt = new Date();
        span[11].innerHTML = (("0"+dt.getFullYear()).slice(-2)[column]);
      }
    }, intervalTime)
  }
}


// This function run all the others function to make all the letters flippin in 125ms delay
// run in 2 sec in total

async function NameToHours(){

  GetHourFlippin(0);
  await sleep(83.3333);
  GetHourFlippin(1);
  await sleep(83.3333);

  GetMinuteFlippin(0);
  await sleep(83.3333);
  GetMinuteFlippin(1);
  await sleep(83.3333);

  GetHourFlippin(0);
  await sleep(83.3333);
  GetHourFlippin(1);
  await sleep(83.3333);

  GetMinuteFlippin(0);
  await sleep(83.3333);
  GetMinuteFlippin(1);
  await sleep(83.3333);

  GetSecondeFlippin(0);
  await sleep(83.3333);
  GetSecondeFlippin(1);
  await sleep(83.3333);

  GetDateFlippin(0);
  await sleep(83.3333);
  GetDateFlippin(1);
  await sleep(83.3333);

  GetMonthFlippin(0);
  await sleep(83.3333);
  GetMonthFlippin(1);
  await sleep(83.3333);

  GetYearFlippin(0);
  await sleep(83.3333);
  GetYearFlippin(1);
  await sleep(83.3333);
}


