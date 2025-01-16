let imgEl = document.querySelector("#bulb");
let btn = document.querySelector(".btn");

var i = 0;

function switchBulb(){
    if(i % 2 == 0){
        imgEl.src = "Images/On.png";
        btn.innerHTML = "Switch off";
    } else {
        imgEl.src = "Images/Off.png";
        btn.innerHTML = "Switch on";
    }
    i++;
    console.log(i);
}



btn.addEventListener("click", switchBulb);