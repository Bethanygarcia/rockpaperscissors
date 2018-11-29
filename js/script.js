
var userChoice = ""
var computerChoice = ""
var winner = ""
var randomNumber = 0;

$("#shoot").click(function(){
    randomNumber=Math.random();
    userChoice = $("#input").val();
    $("#userChoice").text(userChoice);     
    
    if(randomNumber < .33) {
        computerChoice="rock"; 
        $("#computerChoice").html("rock")
    }else if(randomNumber > .33 && randomNumber < .66) {
        computerChoice="paper";
        $("#computerChoice").html("paper")
    }else if(randomNumber > .66) {
        computerChoice="scissors";
        $("#computerChoice").html("scissors")
    }
    if(computerChoice==="rock" && userChoice==="rock"){
            $("#result1").html("Its is a draw");
            
        }else if(computerChoice==="rock" && userChoice==="paper"){
            $("#result1").html("User Wins! Do you want a cookie?");
        }else if(computerChoice==="rock" && userChoice==="scissors"){
            $("#result1").html("Wow, you let a computer win? FAILURE!");
    }
    if(computerChoice==="paper" && userChoice==="paper"){
        $("#result1").html("Its is a draw");
        }else if(computerChoice==="paper" && userChoice==="scissors"){
            $("#result1").html("User Wins! Do you want a cookie?");
        }else if(computerChoice==="paper" && userChoice==="rock"){
            $("#result1").html("Wow, you lost to a computer? FAILURE!");
    }
    if(computerChoice==="scissors" && userChoice==="scissors"){
        $("#result1").html("Its is a draw");
        }else if(computerChoice==="scissors" && userChoice==="rock"){
            $("#result1").html("User Wins! Do you want a cookie?");
        }else if(computerChoice==="scissors" && userChoice==="paper"){
            $("#result1").html("Wow, you lost to a computer? FAILURE!");
    }
    console.log(randomNumber);
    console.log(computerChoice);
$("#play").click(function(){
   location.reload(); 
   $("#play").hide();
});
    
});

