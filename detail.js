
// adding background music 
let bgm = new Audio("./assests/gameSound.mp3")

bgm.play()
bgm.loop = true

var startBtn = document.getElementById("startBtn");


startBtn.addEventListener("click",()=> {

    var name = document.getElementById("name");
    var userName = document.getElementById("userName");
    
    if(name.value=='' && userName.value==''){
        alert("Enter your name and username")
    }
    else if(name.value=='' && userName.value!=''){
        alert("Enter your name")
    }
    else if(name.value!='' && userName.value==''){
        alert("Enter your nick name")
    }
    else{
    var data = {
        name: name.value,
        userName: userName.value,
    };
    // adding name to localStorage
    localStorage.setItem("name", data.name);

    let clickSound = new Audio('./assests/clicksound.mp3')
    clickSound.play();

    // redirecting to next page 
    clickSound.onended = () => {
        window.location.href = "instruction.html";
    };

}
    
});



