let scores, currentscore, activeplayer, gamePlaying;
init()



//document.querySelector('#current-' + activeplayer).textContent = dice;

document.querySelector('.dice').style.display = 'none'



document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying){
        //1. Random Numbers
    let dice = Math.floor(Math.random() * 6) + 1;

    //2. Display the result
    let diceDOM =document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //3. update the round score if the rolled number is not 1
    if (dice !== 1) {
        // Add score
        currentscore += dice
        document.querySelector('#current-' + activeplayer).textContent = currentscore;
    } else {
        // Next player
        nextplayer();

    }
    }

})


document.querySelector('.btn-hold').addEventListener('click', function () {
   if (gamePlaying){
     // Adding currentscore to Globalscore
     scores[activeplayer] += currentscore

     // update my UI
     document.querySelector('#score-' + activeplayer).textContent = scores[activeplayer]
    
     //Check if player won the game
     if(scores[activeplayer] >= 20){
         document.querySelector('#name-' + activeplayer).textContent = 'Winner!';
         document.querySelector('.dice').style.display = 'none'
         document.querySelector('.player-' + activeplayer + '-sect').classList.add('player--winner')
         document.querySelector('.player-' + activeplayer + '-sect').classList.remove('player--active')
         gamePlaying = false
     }
     else{
         nextplayer()
     }
   }
})


function nextplayer() {
    activeplayer === 0 ? activeplayer = 1 : activeplayer = 0
        currentscore = 0;
        document.getElementById('current-0').textContent = '0'
        document.getElementById('current-1').textContent = '0'
        document.querySelector('.player-0-sect').classList.toggle('player--active')
        document.querySelector('.player-1-sect').classList.toggle('player--active')
        document.querySelector('.dice').style.display = 'none'
}

document.querySelector('.btn-new').addEventListener('click', function () {
    init()
})

function init(){
    scores = [0,0];
    activeplayer = 0
    currentscore = 0
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = 0
    document.getElementById('score-1').textContent = 0
    document.getElementById('current-0').textContent = 0
    document.getElementById('current-1').textContent = 0
    document.getElementById('name-0').textContent = 'player 1'
    document.getElementById('name-1').textContent = 'player 2'
    document.querySelector('.player-0-sect').classList.remove('player--winner')
    document.querySelector('.player-1-sect').classList.remove('player--winner')
    document.querySelector('.player-0-sect').classList.remove('player--active')
    document.querySelector('.player-1-sect').classList.remove('player--active')
    document.querySelector('.player-0-sect').classList.add('player--active')
}