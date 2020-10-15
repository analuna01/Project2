// Timer
var time = 0;
var running = false;

function timeStart() {
 
<<<<<<< HEAD
    running = 1;
    timeIncrement();
   
}

function timeReset() {
  running = 0;
=======
    running = true;
    increment();
   
}

function reset() {
  running = false;
>>>>>>> 971b88d200ac8b9127b4a44376fc5763d0655f05
  time = 0;
  document.getElementById("startBtn").innerHTML = "Start";
}

<<<<<<< HEAD
function timeIncrement() {
  if (running == 1) {
=======
function increment() {
  if (running) {
>>>>>>> 971b88d200ac8b9127b4a44376fc5763d0655f05
    setTimeout(function () {
      time++;
      var mins = Math.floor(time / 600);
      var secs = Math.floor(time / 10) % 60;
      
      var milliSecs = time % 10;
<<<<<<< HEAD
      document.getElementById("time").innerHTML =  + secs + "." + milliSecs;
      timeIncrement();
=======
      document.getElementById("time").innerHTML =  mins + "." + secs + "." + milliSecs;
      increment();
>>>>>>> 971b88d200ac8b9127b4a44376fc5763d0655f05

    }, 100)
  }
};


timeStart();