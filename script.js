const images=[
    './images/snake.jpg',
    './images/water.jpg',
    './images/gun.jpg'
];

const img1=document.getElementById("snake");
const img2=document.getElementById("water");
const img3=document.getElementById("gun");
const box1=document.getElementById("ynumber");
const box2=document.getElementById("cnumber");
const resultBox=document.getElementById("result");

let playerScore=0;
let compScore=0;

function stop(){

    box1.innerHTML = '';
    box2.innerHTML = '';
    resultBox.style.backgroundColor="";
    resultBox.innerHTML='';
    window.onload = () => {
        box1.innerHTML = '';
        box2.innerHTML = '';
    };
}


function playGame(playerChoice){
    const randomImg=Math.floor(Math.random()*images.length);
    const compChoice=images[randomImg];
    
    if(playerChoice===compChoice){
        resultBox.innerHTML = "<h3>It's a tie</h3>";
        resultBox.style.backgroundColor = "crimson";
        resultBox.style.fontSize = "1rem";
        resultBox.style.color = "white";
    }
    else if((playerChoice==='gun' && compChoice==='./images/snake.jpg')||(playerChoice==='water' && compChoice==='./images/gun.jpg')||(playerChoice==='snake' && compChoice==='./images/water.jpg')){
        resultBox.innerHTML = "<h3>I won</h3>";
        resultBox.style.backgroundColor="green";
        resultBox.style.fontSize = "1rem";
        resultBox.style.color = "white";
        playerScore++;
        box1.innerHTML = playerScore;
    }
    else{
        resultBox.innerHTML = "<h3>Computer wins</h3>";
        resultBox.style.backgroundColor="red";
        resultBox.style.fontSize = "1rem";
        resultBox.style.color = "white";
        compScore++;
        box2.innerHTML = compScore;
    }
    ynumber.style.fontSize="2rem";
    cnumber.style.fontSize="2rem";
}

img1.addEventListener("click", () => playGame('snake'));
img2.addEventListener("click", () => playGame('water'));
img3.addEventListener("click", () => playGame('gun'));