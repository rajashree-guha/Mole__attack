// Declaring variables
var score = document.getElementById("score");
var time = document.getElementById("time");
var live = document.getElementById("lives")
var volume = document.getElementById("volume");
var mute = document.getElementById("mute");
var logout = document.getElementById("logout");
var mole = document.getElementById("mole");
var bomb = document.getElementById("bomb");
var popUp = document.getElementById("pop-up");
var easyBtn = document.getElementById("easyMode");
var mediumBtn = document.getElementById("mediumMode");
var hardBtn = document.getElementById("hardMode");
var holes = document.querySelectorAll(".hole");
let previousHole;  
let gameover = false; 
let lives = 3; 
let scoreCount = 0; 
let randomHole;
let bombClicked=0;

// adding background music 
let bgm = new Audio("./assests/gameSound.mp3")

bgm.play()
bgm.loop = true

// Settings-- volume, mute, and instruction
volume.addEventListener("click", () => {
  volume.style.display = "none";
  mute.style.display = "block";
  bgm.pause()
});

mute.addEventListener("click", () => {
  mute.style.display = "none";
  volume.style.display = "block";
  bgm.play()
  
});

logout.addEventListener("click", () => {
  window.location.href = "./detail.html";
});


//--------- declaring function-------------

// generating random mole and bomb to come out of the hole 

function makeElement() {
  // Generate a random number to select either mole or bomb
  var randomElement = Math.ceil(Math.random() * 2);

  // generate a random hole number and check that the same hole is not selected
  do {
    randomHole = Math.ceil(Math.random() * 12);
  } while (randomHole === previousHole); 

  // get the hole with ID
  var hole = document.getElementById(`hole${randomHole}`);

  // Remove the previous element
  if (previousHole !== null) {
    let previousElement = document.querySelector(`#hole${previousHole} .element`);
    if (previousElement) {
      previousElement.remove();
    }
  }

  // Create and append the image to the selected hole
  var img = document.createElement('img');
  img.classList.add('element');
  img.src = `./assests/element${randomElement}.png`;
  hole.appendChild(img);
  previousHole = randomHole; 

  // Add click event listener to the image
  img.addEventListener('click', () => {
    if (randomElement === 1) {
      img.remove(); 
      scoreCount++; 
      score.textContent = `${scoreCount}`;

      // click sound 
      let clickSound = new Audio('./assests/clicksound.mp3')
      clickSound.play()

    } else if (randomElement === 2) {
      img.remove(); 
      lives--;
      live.innerHTML = `${lives}`;
      bombClicked++;
      console.log(bombClicked)

      localStorage.setItem("bombClicked", bombClicked);
      if(bombClicked==3){
         endGameBomb(); 
      }
      // bombSound
      let bombSound = new Audio('./assests/bomb.wav')
      bombSound.play()
    }

  });

}

// end game when bomb is clicked
function endGameBomb() {
  gameover = true;
  localStorage.setItem("score", scoreCount);
  window.location.href = "./gameOver.html";
}

// remove pop up 
function remove(){
  popUp.style.display="none"
}

//Game over
function endGame() {
  gameover = true;
  localStorage.setItem("score", scoreCount);
  localStorage.setItem("bombClicked", bombClicked);
  window.location.href = "./gameOver.html";
}
  
//----------Event listeners--------
easyBtn.addEventListener("click",()=>{
    remove()
    timeInterval()
    setInterval(() => {
        if (!gameover) {
          makeElement();
    }
}, 1300);
})

mediumBtn.addEventListener("click",()=>{
    remove()
    timeInterval()
    setInterval(() => {
        if (!gameover) {
            makeElement();
        }
    }, 900);
})

hardBtn.addEventListener("click",()=>{
    remove()
    timeInterval()
    setInterval(() => {
        if (!gameover) {
            makeElement(); 
        }
      }, 750);
})

  
// timer
let timer = 60; 
function timeInterval(){
    interval =setInterval(()=>{
      timer--;
        time.textContent= timer;

        if(timer == 0 ){
            clearInterval(interval);
            location.href="./gameOver.html"
        }
    },1000)
    }




