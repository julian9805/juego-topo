const $$button = document.querySelector('button'); 
const TIME_OUT_TOPO = 1000;
let score = 0;
let gameInterval;



const $$span = document.querySelector('span');



const $$holes = [
    document.querySelector('.hole1'),
    document.querySelector('.hole2'),
    document.querySelector('.hole3'),
    document.querySelector('.hole4'),
    document.querySelector('.hole5'),
    document.querySelector('.hole6')
];



function startGame(){
    gameInterval = setInterval (mooveTopo, TIME_OUT_TOPO);
    setTimeout(gameEnd, 15000);
    addEventListener('click', mooveTopo);
    
}

function stopGame(){
    clearInterval(gameInterval);
    hideMoles();
    score = 0;
    updateScore();
}


function mooveTopo(){
    for (const $$hole of $$holes){
        $$hole.classList.remove('up');
    }
    
    const n = Math.floor(Math.random() * 6);
    $$holes[n].classList.add('up');
}


const $$moles = document.querySelectorAll('.mole');

for(const $$mole of $$moles){
    $$mole.addEventListener('click', pointScore);
}


function pointScore(){
   
   if(this.parentNode.classList.contains('up')){
    this.parentNode.classList.remove('up');
    score++
    $$span.textContent = score;
   }
   console.log(score);
}

function gameEnd(){
    clearInterval(gameInterval);
    hideMoles();
    alert("Juego terminado, tu puntuacion es:" + score);
    score = 0;
    updateScore();
}

function updateScore(){
    const $$span = document.querySelector('.score')
    $$span.textContent = score;
}

function hideMoles(){
    const $$moles = document.querySelectorAll('.mole')
    $$moles.forEach($$mole => {
        $$mole.parentNode.classList.remove('up');
    })
}