//---------declaring variable------------

var continueBtn = document.getElementById("continueBtn")

//adding click sound
let clickSound = new Audio('./assests/clicksound.mp3')

// adding background music 
let bgm = new Audio("./assests/gameSound.mp3")
bgm.play()
bgm.loop = true

continueBtn.addEventListener("click",()=>{
    clickSound.play();
    // redirecting to next page 
    clickSound.onended = () => {
        window.location.href = "game.html";
    };
})




