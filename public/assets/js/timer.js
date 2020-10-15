// Timer
var time = 0;
var running = false;

function start() {
 
    running = true;
    increment();
   
}

function reset() {
  running = false;
  time = 0;
  document.getElementById("startBtn").innerHTML = "Start";
}

function increment() {
  if (running) {
    setTimeout(function () {
      time++;
      var mins = Math.floor(time / 600);
      var secs = Math.floor(time / 10) % 60;
      
      var milliSecs = time % 10;
      document.getElementById("time").innerHTML =  mins + "." + secs + "." + milliSecs;
      increment();

    }, 100)
  }
};


start();