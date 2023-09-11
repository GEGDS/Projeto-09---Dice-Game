
//Dado Esquerdo
function leftDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
   
    let diceImages = ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png'];

    let leftImg = document.getElementById("img1");

    leftImg.setAttribute('src', diceImages[randomNumber - 1]);

    return randomNumber; // Retorna o numéro aleatorio
}

//Dado Direito
function rightDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    let diceImages = ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png'];

    let rightImg = document.getElementById("img2");

    rightImg.setAttribute('src', diceImages[randomNumber - 1]);

    return randomNumber; // Retorna o numéro aleatorio
}

let counter1 = 0;
let counter2 = 0;

// Função Que gera o resultado
function play() {
    let leftResult = leftDice(); 
    let rightResult = rightDice();

    let whoWon = document.querySelector("h1");


    let c1 = document.getElementById("counter1");
    let c2 = document.getElementById("counter2");


    

    if (leftResult > rightResult) {
        whoWon.innerHTML = "Player 1 Venceu";
    } else if (leftResult < rightResult) {
        whoWon.innerHTML = "Player 2 Venceu";
    } else {
        whoWon.innerHTML = "Empate";
    }
    
    
    //Contador
    if(leftResult > rightResult){
        counter1++
    } else if(leftResult < rightResult) {
        counter2++
    }
    
    c1.innerHTML = counter1;
    c2.innerHTML = counter2;


}






