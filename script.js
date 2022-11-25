/**let player1 = true
let player2 = false

let caseMorpions = document.getElementsByClassName("case");
for (i = 0; i < caseMorpions.length; i++) {
    if (i === 0) {

    }
}
*/

let player1 = true
let player2 = false
let caseMorpions = document.getElementsByClassName("case")
console.log(caseMorpions)


document.addEventListener('contextmenu', function (event){
    event.preventDefault();
});

for(let i = 0; i < caseMorpions.length; i++){
    caseMorpions[i].addEventListener('click', function () {
        if (caseMorpions[i].innerHTML === "X" || caseMorpions[i].innerHTML === "O") {
        }
    else{
            if (player1 === true){
                caseMorpions[i].innerHTML = "X";
                player2 = true;
                player1 = false;
            }
            else if(player2 === true){
                caseMorpions[i].innerHTML = "O";
                player1 = true
                player2 = false
            }
        }
        win()
    })
}


//fonction 3 X ou 3 O pour gagner
function threeXO(icon){
    if (  caseMorpions[0].innerHTML === icon && caseMorpions[1].innerHTML === icon && caseMorpions[2].innerHTML === icon
        ||caseMorpions[3].innerHTML === icon && caseMorpions[4].innerHTML === icon && caseMorpions[5].innerHTML === icon
        ||caseMorpions[6].innerHTML === icon && caseMorpions[7].innerHTML === icon && caseMorpions[8].innerHTML === icon
        ||caseMorpions[0].innerHTML === icon && caseMorpions[3].innerHTML === icon && caseMorpions[6].innerHTML === icon
        ||caseMorpions[1].innerHTML === icon && caseMorpions[4].innerHTML === icon && caseMorpions[7].innerHTML === icon
        ||caseMorpions[2].innerHTML === icon && caseMorpions[5].innerHTML === icon && caseMorpions[8].innerHTML === icon
        ||caseMorpions[0].innerHTML === icon && caseMorpions[4].innerHTML === icon && caseMorpions[8].innerHTML === icon
        ||caseMorpions[2].innerHTML === icon && caseMorpions[4].innerHTML === icon && caseMorpions[6].innerHTML === icon
)
    {alert(icon + ' : You Win ')
        return true;
    }
}
function win() {
    threeXO("X")
    threeXO("O")
}