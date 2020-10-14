// Timer
var time = 0;
var running = 0;

function start() {
  if (running == 0) {
    running = 1;
    increment();
    document.getElementById("startBtn").innerHTML = "Pause";
  } else {
    running = 0;
    document.getElementById("startBtn").innerHTML = "Resume";
  }
}

function reset() {
  running = 0;
  time = 0;
  document.getElementById("startBtn").innerHTML = "Start";
}

function increment() {
  if (running == 1) {
    setTimeout(function () {
      time++;
      var mins = Math.floor(time / 10 % 60);
      var secs = Math.floor(time / 10);
      var milliSecs = time % 10;
      document.getElementById("time").innerHTML = mins + ":" + secs + ":" + milliSecs;
      increment();

    }, 100)
  }
};