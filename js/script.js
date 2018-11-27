
var userChoice = ""
var computerChoice = ""
var winner = ""
var randomNumber = 0;

$("#shoot").click(function(){
    randomNumber=Math.random();
    userChoice=$("#userChoice").val();
    if(randomNumber < .33) {
        computerChoice="rock"; 
    }else if(randomNumber > .33 && randomNumber < .66) {
        computerChoice="Paper!";
    }else if(randomNumber > .66) {
        computerChoice="Scissors!";
    }
    console.log(randomNumber);
    console.log(computerChoice);
});

