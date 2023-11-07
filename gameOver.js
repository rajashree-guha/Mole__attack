// declaring variables 
var playAgainBtn = document.getElementById("playAgainBtn")
var changeBtn =document.getElementById("changeBtn")
var phrase = document.getElementById("phrase")
let scoreBox = document.getElementById("score");

let value = localStorage.getItem("score");
let clickedBomb= localStorage.getItem("bombClicked");
console.log(clickedBomb)
var playerName = localStorage.getItem("name"); 

if (clickedBomb == 0) {
    ;
}

// displaying score 
scoreBox.textContent = value;

// redirecting to different pages when a button is clicked 
playAgainBtn.addEventListener("click",()=>{
    window.location.href="./game.html"
})

changeBtn.addEventListener("click",()=>{
    window.location.href="./detail.html"
})

// declaring different phrases for winning and losing
var losePhrases = [
    `It's okay ${playerName} better luck next time!`,
    `You gave it your best shot ${playerName}! Try again!`,
    `Defeat is just a step towards victory! ${playerName}`,
]

var winPhrases = [
    `Great job! ${playerName} ,You've won!`,
    `Victory is yours! Well done! ${playerName}`,
    `You did it! ${playerName} You're the champion!`
]

// checking and displaying the phrases according to the given condition 
if (clickedBomb<3 ){

    phrase.innerText=losePhrases[Math.floor(Math.random() * 3)]
    // click sound
    let loseSound = new Audio('./assests/lose.mp3')

}
else{
    
    
    phrase.innerText=winPhrases[Math.floor(Math.random() * 3)]
    let winSound = new Audio('./assests/win.mp3')
    winSound.play()
    
    // winSound.pause()

}

