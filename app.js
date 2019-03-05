let you = document.getElementById("you");
let computer = document.getElementById("computer");
let boxes = document.getElementById("boxes");
let zero = document.getElementById("0");
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let xInput = document.getElementById("xInput");
let oInput = document.getElementById("oInput");
let box = document.getElementsByClassName("box");
let clickable = true;
let click = 0;

//Kişilerin değil, şirketlerin sosyal ağı


boxes.onclick = function(event){
    
    if(event.target.className == "d-flex" || event.target.className == "card-body"){

    }else{
        if(xInput.checked == true && event.target.innerHTML == "" && clickable == true){
            event.target.innerHTML = "X";
            if (isFinish("you")) {

            } else{
                computerTurn();
            }
        }else if(oInput.checked == true && event.target.innerHTML == ""){
            event.target.innerHTML = "O";
            if (isFinish("you")) {

            } else{
                computerTurn();
            }
        }
    }
}

function computerTurn(){
    
    let box = (Math.floor(Math.random()*9)).toString();

    if(document.getElementById(`${box}`).innerHTML == ""){
        let letter = Math.floor(Math.random()*2);
        
        switch (letter) {
            case 1:
            document.getElementById(`${box}`).innerHTML = "X";
                break;

            default:
            document.getElementById(`${box}`).innerHTML = "O";
                break;
        }
        if(isFinish("computer")){

        }
    }else{
        computerTurn();
    }
}

let yourPoint = 0;
let computersPoint = 0;

function isFinish(player){
    if(zero.innerHTML == one.innerHTML && one.innerHTML== two.innerHTML && zero.innerHTML != ""){
        finish(player);
        return true;
    }
    if(zero.innerHTML == three.innerHTML && three.innerHTML== six.innerHTML && zero.innerHTML != ""){
        finish(player);
        return true;
    }
    if(zero.innerHTML == four.innerHTML && four.innerHTML== eight.innerHTML && zero.innerHTML != ""){
        finish(player);
        return true;
    }
    if(two.innerHTML == four.innerHTML && four.innerHTML== six.innerHTML && two.innerHTML != ""){
        finish(player);
        return true;
    }
    if(one.innerHTML == four.innerHTML && four.innerHTML== seven.innerHTML && one.innerHTML != ""){
        finish(player);
        return true;
    }
    if(three.innerHTML == four.innerHTML && four.innerHTML== five.innerHTML && three.innerHTML != ""){
        finish(player);
        return true;
    }
    if(six.innerHTML == seven.innerHTML && seven.innerHTML== eight.innerHTML && six.innerHTML != ""){
        finish(player);
        return true;
    }
    if(two.innerHTML == five.innerHTML && five.innerHTML== eight.innerHTML && two.innerHTML != ""){
        finish(player);
        return true;
    }
    return false;
}

function finish(player){
    if(player == "computer"){
        clickable = false;
        computersPoint++;
        computer.innerHTML = "COMPUTER: " + computersPoint.toString();
        setTimeout(function() {for(let i = 0; i<=8; i++){
            document.getElementById(`${i}`).innerHTML = "";
            clickable = true;
        }},1000);
        
    }
    if (player == "you") {
        clickable = false;
        yourPoint++;
        you.innerHTML = "YOU: " + yourPoint.toString();
        setTimeout(function() {for(let i = 0; i<=8; i++){
            document.getElementById(`${i}`).innerHTML = "";
            clickable = true;
        }},1000);
        
    }
}

