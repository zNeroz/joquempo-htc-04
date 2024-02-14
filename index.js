const $buttoMoveStone1 = document.querySelector('.button-move-stone-1')
const $buttoMovePaper1 = document.querySelector('.button-move-paper-1')
const $buttoMoveScissors1 = document.querySelector('.button-move-scissors-1')
const $movebox1 = document.querySelector('#move-box-1')

const $buttoMoveStone2 = document.querySelector('.button-move-stone-2')
const $buttoMovePaper2 = document.querySelector('.button-move-paper-2')
const $buttoMoveScissors2 = document.querySelector('.button-move-scissors-2')
const $movebox2 = document.querySelector('#move-box-2')

const $winnertitle = document.querySelector('.winner-title')
const $scoreplayer1 = document.querySelector('#score-1')
const $scoreplayer2 = document.querySelector('#score-2')

const $buttonToggleStart = document. querySelector('.button-start')
const $buttonreset = document.querySelector('.button-reset')

let moveplayer1 = ''
let moveplayer2 = ''
let winner = 0
let player1score = 0
let player2score = 0
let gamestart = false

function setwinner(){
     if (moveplayer1 == '' || moveplayer2 == '' ) {
          return
     }
     if ( moveplayer1 == 'stone' && moveplayer2 == 'paper') {
          winner = 2
     } else if ( moveplayer1 == 'stone' && moveplayer2 == 'scissors'){
          winner = 1
     } else if ( moveplayer1 == 'paper' && moveplayer2 == 'stone') {
          winner = 1
     } else if ( moveplayer1 == 'paper' && moveplayer2 == 'scissors') {
          winner = 2
     } else if ( moveplayer1 == 'scissors' && moveplayer2 == 'stone') {
          winner = 2
     } else if ( moveplayer1 == 'scissors' && moveplayer2 == 'paper') {
          winner = 1
     } else if ( moveplayer1 == moveplayer2) {
          winner = 3
     } 
}

function winners(){
     if( winner == 1){
          $winnertitle.innerHTML = 'Jogador 1 Venceu!' 
     } else if( winner == 2) {
          $winnertitle.innerHTML = 'Jogador 2 Venceu!'
     } else if( winner == 3) {
          $winnertitle.innerHTML = 'Empate'
     } else if ( winner == 0) {
          $winnertitle.innerHTML = 'Jogadores'
     }
}


function addWinnerScore(){
     if(winner == 1) {
          player1score = player1score + 1
     } else if (winner == 2) {
          player2score = player2score + 1 
     }
}

function printPlayerScore() {
     $scoreplayer1.innerHTML = player1score.toString().padStart(2, '0')
     $scoreplayer2.innerHTML = player2score.toString().padStart(2, '0')
}

function resetGameArea(){
     $movebox1.innerHTML =''
     $movebox2.innerHTML =''
}

function resetMoveVariables(){
     moveplayer1 =''
     moveplayer2 =''

}

function resetScore(){
     player1score = 0
     player2score = 0
}

function resetAll(){
     resetMoveVariables()
     resetGameArea()
     resetScore()
     winners()
     printPlayerScore()
}

function handleToggleGame() {
     if (gamestart == true) {
          gamestart = false
          $buttonToggleStart.textContent = 'Iniciar'
          $buttonToggleStart.classList.remove('started')
     } else {
          gamestart = true
          $buttonToggleStart.classList.add('started')
          $buttonToggleStart.textContent = 'Parar'
     }
}

function handleStone1move(){
     if (gamestart == false) return
     $movebox1.innerHTML = '<img src="images/stone.png" alt="Luva braca" title="Imagem Mão Fechada">'
     moveplayer1 = 'stone'
     setwinner()
     addWinnerScore()
     printPlayerScore()
     winners()
     if(winner != 0) {
          setTimeout(resetGameArea, 1000)
          resetMoveVariables()
          winner = 0
     }
}

function handlePaper1move(){
     if (gamestart == false) return
     $movebox1.innerHTML = '<img src="images/Paper.png" alt="Luva branca aberta" title="Imagem Mão Aberta">'
     moveplayer1 = 'paper'
     setwinner()
     addWinnerScore()
     printPlayerScore()
     winners()
     if(winner != 0) {
          setTimeout(resetGameArea, 1000)
          resetMoveVariables()
          winner = 0
     }
}

function handleScissors1move(){
     if (gamestart == false) return
      $movebox1.innerHTML = '<img src="images/scissors.png" alt="Luva branca fazendo dois" title="Imagem Mão fazendo dois">'
      moveplayer1 = 'scissors'
      setwinner()
      addWinnerScore()
      printPlayerScore()
      winners()
      if(winner != 0) {
          setTimeout(resetGameArea, 1000)
          resetMoveVariables()
          winner = 0
     }
}
function handleStone2move(){
     if (gamestart == false) return
     $movebox2.innerHTML = '<img src="images/stone.png" alt="Luva braca" title="Imagem Mão Fechada">'
     moveplayer2 = 'stone'
     setwinner()
     addWinnerScore()
     printPlayerScore()
     winners()
     if(winner != 0) {
          setTimeout(resetGameArea, 1000)
          resetMoveVariables()
          winner = 0
     }
}
function handlePaper2move(){
     if (gamestart == false) return
     $movebox2.innerHTML = '<img src="images/Paper.png" alt="Luva branca aberta" title="Imagem Mão Aberta">'
     moveplayer2 = 'paper'
     setwinner()
     addWinnerScore()
     printPlayerScore()
     winners()
     if(winner != 0) {
          setTimeout(resetGameArea, 1000)
          winner = 0
          resetMoveVariables()
          winner = 0
     }
}

function handleScissors2move(){
     if (gamestart == false) return
     $movebox2.innerHTML = '<img src="images/scissors.png" alt="Luva branca fazendo dois" title="Imagem Mão fazendo dois">'
     moveplayer2 = 'scissors'
     setwinner()
     addWinnerScore()
     printPlayerScore()
     winners()
     if(winner != 0) {
          setTimeout(resetGameArea, 1000)
          resetMoveVariables()
          winner = 0
     }
}


$buttonToggleStart.addEventListener('click', handleToggleGame)
$buttonreset.addEventListener('click', resetAll)

$buttoMoveStone1.addEventListener('click', handleStone1move)
$buttoMovePaper1.addEventListener('click', handlePaper1move)
$buttoMoveScissors1.addEventListener('click', handleScissors1move)

$buttoMoveStone2.addEventListener('click', handleStone2move)
$buttoMovePaper2.addEventListener('click', handlePaper2move)
$buttoMoveScissors2.addEventListener('click', handleScissors2move)
