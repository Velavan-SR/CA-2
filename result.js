const scoreSpan = document.getElementById('scoreBoard');
const phrase = document.getElementById('phrase')
let arr =['SERIOUSLY BRO ??',"I DON'T SEE A BRIGHT FUTURE :(",'WE NEED MOREEE!!!','TRY HARDERRR !!','YOU CAN DO BETTER!','YOU WERE ALMOST THERE :)','YOU KNOW NO BOUNDS !!!']

let score = window.localStorage.getItem('score')
scoreSpan.innerText = window.localStorage.getItem('nickname')+' : '+score;

if(score>=0 && score<11){
    phrase.innerText = arr[0]
}else if(score>=11 && score<21){
    phrase.innerText = arr[0]
}else if(score>=21 && score<31){
    phrase.innerText = arr[2]
}else if(score>=31 && score<41){
    phrase.innerText = arr[3]
}else if(score>=41 && score<51){
    phrase.innerText = arr[4]
}else if(score>=51 && score<61){
    phrase.innerText = arr[5]
}else{
    phrase.innerText = arr[6];
}

// document.getElementById('highscore').innerText = 

document.getElementById('play-again').addEventListener('click',gameover);

function gameover(){
    window.location.href = 'game.html';
}

document.getElementById('home').addEventListener('click',goHome);

function goHome(){
    window.location.href = 'index.html';
}

