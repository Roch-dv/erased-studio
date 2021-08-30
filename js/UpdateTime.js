function UpdateTime(){

  let showTime = true;
  setTimeout(function() { showTime = false; }, 5000);

  var interval = setInterval(function(){
    if (showTime){
      displayTime();
    } else {
      clearInterval(interval);
    }
  }, 1000);
}

function displayTime(){
  span = GetAllSpan();
  let dt = new Date();
  span[0].innerHTML = (("0"+dt.getHours()).slice(-2)[0]);
  span[1].innerHTML = (("0"+dt.getHours()).slice(-2)[1]);
  span[2].innerHTML = (("0"+dt.getMinutes()).slice(-2)[0]);
  span[3].innerHTML = (("0"+dt.getMinutes()).slice(-2)[1]);
  span[4].innerHTML = (("0"+dt.getSeconds()).slice(-2)[0]);
  span[5].innerHTML = (("0"+dt.getSeconds()).slice(-2)[1]);
  span[6].innerHTML = (("0"+dt.getDate()).slice(-2)[0]);
  span[7].innerHTML = (("0"+dt.getDate()).slice(-2)[1]);
}
