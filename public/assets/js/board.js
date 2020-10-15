var dir = "flags";
var winCounter = 0;
var winArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var randomArray = randomImages();
var game = 0;
var pick1 = 0;
var pick2 = 0;

setStoraged("Carrillo","0.0");
loadStoraged();



function randomImages() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
  
  array.sort(() => Math.random() - 0.5);
  return array;
}
function flipUp(location) {
  var cardsList = document.getElementById("Cards_List").children;
  
  var board = [];
  
  for (let index = 0; index < cardsList.length; index++) {
    board.push(cardsList[index].childNodes[1]);
  }
  
  board[location].src = `assets/media/${dir}/${randomArray[location]}.png`;
 var button = cardsList[location];
 
 button.setAttribute("class","buttonBorder");
 
 

}
function flipDown(location) {
  var cardsList = document.getElementById("Cards_List").children;
  var board = [];
  
  for (let index = 0; index < cardsList.length; index++) {
    board.push(cardsList[index].childNodes[1]);
  }
  
  board[location].src = `assets/media/back.png`;
  var button = cardsList[location];
 
 button.setAttribute("class","grid-item");
}
function checkGame() {
  if (randomArray[pick1] == randomArray[pick2]) {
    winArray[pick1] = 1;
    winArray[pick2] = 1;
   
    var cardsList = document.getElementById("Cards_List").children;
    cardsList[pick1].disabled =true;
    cardsList[pick2].disabled =true;
    
    

    checkifWin();
  } else {
    flipDown(pick1);
    flipDown(pick2);
  }
}

function checkifWin(){
  var counter=0;
  winArray.forEach(element => {
    
    counter+= parseInt(element);

    
  });
    
  if(counter==16){
    console.log("You Won!!");

    var userName = document.getElementById("userName").textContent;
    var userTime = document.getElementById("time").textContent;
    document.getElementById("time").hidden = true;
    setStoraged(userName,userTime);
  }
 
}



$("#category").change(function(){
  
 dir = document.getElementById("category").value;

 randomArray = randomImages();
 document.getElementById("category").disabled=true;


});



//Storage Functions
function loadStoraged(){

  if(JSON.parse(localStorage.getItem("users"))){
      var storedUsers = JSON.parse(localStorage.getItem("users"));
      var userName = document.getElementById("userName");
      userName.textContent= storedUsers[0].name;
  }
  else
      console.log("not storaged");
}

function setStoraged(usertosave,timetosave){
  
  if(JSON.parse(localStorage.getItem("users")))
      var users = JSON.parse(localStorage.getItem("users"));
  else
      var users = [];

      var user={
        name: usertosave,
        time: timetosave
      };

  users[0]=user;
  localStorage.setItem("users", JSON.stringify(users));

}

function clearStorage(){

  var tasks = JSON.parse(localStorage.getItem("users"));
  tasks= [];
  localStorage.setItem("users", JSON.stringify(tasks));

}
//Storage Functions






$(function () {
  $(".grid-item").on("click", function (event) {
    event.preventDefault();
   
    flipUp(event.target.id);
    game++;
    
    if (game == 1) {
      pick1 = event.target.id;
      
    }
    
    if (game == 2) {
      pick2 = event.target.id;
     
      setTimeout(function(){ 
        checkGame();
              
      pick1 = 0;
      pick2 = 0;
      game = 0;
      
        ; }, 1000);
     
    }
  });
});