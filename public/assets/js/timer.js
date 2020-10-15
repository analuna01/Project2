// Timer
var time = 0;
var running = 0;

function timeStart() {
 
    running = 1;
    timeIncrement();
   
}

function timeReset() {
  running = 0;
  time = 0;
  document.getElementById("startBtn").innerHTML = "Start";
}

function timeIncrement() {
  if (running == 1) {
    setTimeout(function () {
      time++;
     // var mins = Math.floor(time / 60);
      var secs = Math.floor(time / 10);
      var milliSecs = time % 10;
      document.getElementById("time").innerHTML =  + secs + "." + milliSecs;
      timeIncrement();

    }, 100)
  }
};


timeStart();