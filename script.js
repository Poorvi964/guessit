'use strict';

//Gives a number between 0 and 1
let sceretNumber = Math.trunc(Math.random()*20)+1;

var score = 20;

var highscore = document.querySelector('.highscore').textContent;

document.querySelector('.check').addEventListener('click',function(){

    var guess = document.querySelector('.guess').value;
    if(!guess)
    {
        document.querySelector('.message').textContent = 'Enter a valid Number';
    }else if(guess == sceretNumber){
        document.querySelector('.message').textContent = 'Correct Answer!!!';
        document.querySelector('.number').textContent = sceretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width='30 rem';
        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;

        }

    }else if(guess !=sceretNumber){
        if(score<1){
        document.querySelector('.message').textContent = 'You Lost the Game';
        document.querySelector('body').style.backgroundColor='red';
        }else{
            document.querySelector('.message').textContent=(guess>sceretNumber)?'Too High':'Too Low';
            document.querySelector('.score').textContent=score--;
        }
    }


});


document.querySelector('.again').addEventListener('click',function(){
    score =20;
    document.querySelector('.score').textContent=score;
    document.querySelector('.message').textContent='Start Guessing';
    document.querySelector('.number').textContent='?';
    sceretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width = '15 rem';
});




