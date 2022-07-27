//Script to run "Catch Me If You Can"

window.addEventListener('load', (event) =>{
//adds username and dislpays it back into the: 'input' = ID / 'p' = element
var username = prompt("Please enter your username...", "");
document.getElementById("input").innerText = `-Alright, ${username} these are the rule to the game-`;



//stylizing the start button
$("#start_button").css({
    "font-size ":" 18px",
    "width":"70px",
    "height":"40px",
    "color": "#fec827",
    "background-color":"darkred",
    "border": "3px solid #fec827"
});//end

//alert when click the start button
$("#start_button").click(function(){
     beginGame();
     $(this).off();
     $("#gamespace").on("click", ".star", function(){
        incScore();
        $(this).hide();
     });
    })
//end
    $("footer").load("load.html");


    });//end document ready


    
//adding two random number functions
let yPosition = function(){  return yValue = Math.floor(Math.random()*300);};

let xPosition = function(){ return xValue = Math.floor(Math.random()*550);};

let randTimer = function(){return value = Math.floor(Math.random()*2000);};


//Project 3 - begin game function
function beginGame(){

//Project 2 - calling the score function
// Project 4 - newScore();
//the timer is hidden and this will display it
$(".timer").show();
addImage();
countTimer();

};

//global variable for points being initalized/function to increment the points by 1 when called//
  var totalPoints = 0;
function incScore(){
    totalPoints += 1;
    //point adder being called and ran
    $("#score").text(totalPoints+" points");
    //end
};

var timer = 30;
function countTimer(){

if(timer < 0){
    clearTimeout(clock);
    clearTimeout(t);
    alert("Game is over");
}
else{
    $(".timer").text(timer + " seconds");
    timer --;
    clock = setTimeout("countTimer()",1000);
}

};



//Project 3 - create the image in gamespace
function addImage(){
//Project 2 - add with jquery the img to #gamespace
let xPos = xPosition();
let yPos = yPosition();

$("#gamespace").append(`<img id='star' class='star' src='img/star1.png' style='left: ${xPos}px; top: ${yPos}px;'>`);

t = setTimeout("addImage()",randTimer());

$()


//end
};



