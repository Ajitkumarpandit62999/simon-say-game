let gameseq = [];
let userseq = [];

let btns = ["yellow", "red" , "purple" , "green"];

let started = false;
let level = 0;

let highscore = 0;

let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

document.addEventListener("keypress" , function(){
   if(started == false) { // if game is not started then .
    console.log("game is started");
    started = true; // start the game . then startes value update so therfor another not respond

   }

   levelup ();


});

function gameflash(btn){ // flash the button 

    btn.classList.add("gameflash");  // add btn background color as a white using flash class 

    setTimeout(function(){
        btn.classList.remove("gameflash"); // remove the background color after 1 sec that act like a flash 
    } , 300);
}


function userflash(btn){ // flash the button 

    btn.classList.add("userflash");  // add btn background color as a white using flash class 

    setTimeout(function(){
        btn.classList.remove("userflash"); // remove the background color after 1 sec that act like a flash 
    } , 300);
}


function levelup (){

userseq = []; // jaise hi level up hoag user seq khali ho jayega  phir se sari value dalni padegi  userseq me taki level up ho sake ; 

    level++; // update the level valu into 0-1;
    h2.innerText = `level ${level}`; // cahnge the text h2 into level ;


let  randIdx = Math.floor(Math.random()*3); // create random number 

let randomColor = btns[randIdx]; // asiign random number in btns ("yellow, red , green etc")

let randombtn = document.querySelector(`.${randomColor}`);// selext the random color class and chose the button .  agar yellow huaa toh yellow button select hoga . 

gameseq.push(randomColor); // add btns value in game sequence 

console.log(gameseq);

gameflash(randombtn);// apply flash property on random button  // uske baad yellow button flash hoga 

if(level>highscore){
    highscore = level;
    document.querySelector("span").textContent = highscore;
   }

};



function btnPress() {  // do all work after btn is Pressed 
 let button = this;
 userflash(button);

 usercolor = button.getAttribute("id"); // jo button flash hoga uska attribute lenge 

 userseq.push(usercolor);

 checkAns(userseq.length-1); //user ka last index kay tha . 

}

function checkAns(idx){

    // console.log(`current level ${level}`)
     
     if(userseq[idx] === gameseq[idx]){
       if(userseq.length == gameseq.length){ // if user or game seq ki value barabar ho jaye toh level up jo jayega game 
      setTimeout(levelup , 1000); // give delay during level up 
       }

     }

     else{
        h2.innerHTML= `Game is over !  your score was <b>${level}</b> <br> press any key to restart the game `;
        document.querySelector("body").style.backgroundColor = "red";

        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";  
        } , 200);

        reset(); // restart the game 
     }

}



let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click" , btnPress);
}

 function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;

 }
