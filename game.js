   

    
    // GAME FUNCTIONALITY
    
    let jumpEffect = new Audio('./assessts/jump2.mp3');
    const mode = window.localStorage.getItem('id');
    const kakashi = document.getElementById('kakashi');
    const naruto = document.getElementById('naruto');
    const game = document.getElementById('game');
    const scoree = document.getElementById('timer');
    let blockState = false;
    let scoreState = false;
    let removeState = false;
    let bgmState = false;
    let gameStopped = false;
    let c=0;
    let image='';
    let score = -1;
    let intervalId;
    let backgroundMusic;
    // localStorage.setItem('highscore',0);

    function randum(){
        return Math.floor(Math.random()*2)
    }

       // Easy Gameplay


if(window.localStorage.getItem('id')=='easy'){

    document.addEventListener("keydown", function(event) {
        if (event.key === ' ') {
          jump();
          jumpEffect.currentTime = 0;
          jumpEffect.play();
        }
      });


    document.body.addEventListener('click',() =>{
        jump();
        jumpEffect.currentTime = 0;
        jumpEffect.play();

        if (!bgmState){
            backgroundMusic = new Audio('./assessts/Naruto-ost.mp3');
            backgroundMusic.play();
            backgroundMusic.loop = true;
            bgmState = true;
        }

        document.getElementById('instructions').style.visibility='hidden';

        setInterval(checkDead,10);
        
        if (!removeState) {
            kakashi.remove();
            naruto.remove();
            removeState=true;
        };
        if (!blockState) {block()};
        if (!scoreState) {setScore()};
    });

    intervalId = setInterval(function () {
                    if (blockState) {
                    setTimeout(block,3500);
                    }
                },3500);

    function jump(){
        if (document.getElementById('sasuke').classList != 'animate'){
            document.getElementById('sasuke').classList.add("animate");
            setTimeout(removeJump,1250);
        }
    };

    function removeJump(){
        document.getElementById('sasuke').classList.remove('animate');
    };

    function block() {
        if (gameStopped) {
            clearInterval(intervalId);
        } else {
            const image = document.createElement("img");
            image.src = c % 2 === 0 ? "assessts/block0.gif" : "assessts/block1.gif";
            image.id = "h";
            image.className = "block";
            game.appendChild(image);
            
            setTimeout(removeBlock, 3500);
            
            blockState = true;
            
            c++;
        }
    }
    

    function removeBlock(){
        document.getElementById('h').remove()
    };

    setInterval(function () {
        if (scoreState) {
            setScore();
        }
    },1000);

    function setScore(){
        scoreState = true;
        score++;
        scoree.innerText=score;
    }

     // FUNCTIONALITIES FOR CHECKING IF THE ELEMENTS ARE COLLIDING

     function checkDead() {
        const mainCharacter = document.getElementById('sasuke').getBoundingClientRect();
        const block = document.querySelector('.block');
    
        if (block) {
            const blockRect = block.getBoundingClientRect();
            
            if (window.innerHeight - mainCharacter.bottom < 250 && blockRect.left <= 205 && blockRect.left >=105) {
                gameStopped = true;
                blockState = false;
                scoreState = false;
                backgroundMusic.pause();
                localStorage.setItem('score',score);
                window.location.href='result.html';
            }
        }
    }



};

        // Mid Gameplay

if(window.localStorage.getItem('id')=='mid'){

    document.addEventListener("keydown", function(event) {
        if (event.key === ' ') {
          jump();
          jumpEffect.currentTime = 0;
          jumpEffect.play();
        }
      });


    document.body.addEventListener('click',() =>{
        jump();
        jumpEffect.currentTime = 0;
        jumpEffect.play();

        if (!bgmState){
            backgroundMusic = new Audio('./assessts/Naruto-ost.mp3');
            backgroundMusic.play();
            backgroundMusic.loop = true;
            bgmState = true;
        }

        document.getElementById('instructions').style.visibility='hidden';

        setInterval(checkDead,10);
        
        if (!removeState) {
            kakashi.remove();
            naruto.remove();
            removeState=true;
        };
        if (!blockState) {block()};
        if (!scoreState) {setScore()};
    });

    intervalId = setInterval(function () {
                    if (blockState) {
                    setTimeout(block,2500);
                    }
                },2500);

    function jump(){
        if (document.getElementById('sasuke').classList != 'animate-mid'){
            document.getElementById('sasuke').classList.add("animate-mid");
            setTimeout(removeJump,900);
        }
    };

    function removeJump(){
        document.getElementById('sasuke').classList.remove('animate-mid');
    };

    function block() {
        if (gameStopped) {
            clearInterval(intervalId);
        } else {
            const image = document.createElement("img");
            image.src = c % 2 === 0 ? "assessts/block0.gif" : "assessts/block1.gif";
            image.id = "h";
            image.className = "block-mid";
            game.appendChild(image);
            
            setTimeout(removeBlock, 2500);
            
            blockState = true;
            
            c++;
        }
    }
    

    function removeBlock(){
        document.getElementById('h').remove()
    };

    setInterval(function () {
        if (scoreState) {
            setScore();
        }
    },1000);

    function setScore(){
        scoreState = true;
        score++;
        scoree.innerText=score;
    }


    // FUNCTIONALITIES FOR CHECKING IF THE ELEMENTS ARE COLLIDING

    function checkDead() {
        const mainCharacter = document.getElementById('sasuke').getBoundingClientRect();
        const block = document.querySelector('.block-mid');
    
        if (block) {
            const blockRect = block.getBoundingClientRect();
            
            if (window.innerHeight - mainCharacter.bottom < 250 && blockRect.left <= 205 && blockRect.left >=105) {
                gameStopped = true;
                blockState = false;
                scoreState = false;
                backgroundMusic.pause();
                localStorage.setItem('score',score);
                window.location.href='result.html';
            }
        }
    }

};


        //Hard Gameplay


if(window.localStorage.getItem('id')=='hard'){

    document.addEventListener("keydown", function(event) {
        if (event.key === ' ') {
          jump();
          jumpEffect.currentTime = 0;
          jumpEffect.play();
        }
      });


    document.body.addEventListener('click',() =>{
        jump();
        jumpEffect.currentTime = 0;
        jumpEffect.play();

        if (!bgmState){
            backgroundMusic = new Audio('./assessts/Naruto-ost.mp3');
            backgroundMusic.play();
            backgroundMusic.loop = true;
            bgmState = true;
        }

        document.getElementById('instructions').style.visibility='hidden';

        setInterval(checkDead,10);
        
        if (!removeState) {
            kakashi.remove();
            naruto.remove();
            removeState=true;
        };
        if (!blockState) {block()};
        if (!scoreState) {setScore()};
    });

    intervalId = setInterval(function () {
                    if (blockState) {
                    setTimeout(block,1750);
                    }
                },1750);

    function jump(){
        if (document.getElementById('sasuke').classList != 'animate-hard'){
            document.getElementById('sasuke').classList.add("animate-hard");
            setTimeout(removeJump,600);
        }
    };

    function removeJump(){
        document.getElementById('sasuke').classList.remove('animate-hard');
    };

    function block() {
        if (gameStopped) {
            clearInterval(intervalId);
        } else {
            const image = document.createElement("img");
            image.src = c % 2 === 0 ? "assessts/block0.gif" : "assessts/block1.gif";
            image.id = "h";
            image.className = "block-hard";
            game.appendChild(image);
            
            setTimeout(removeBlock, 1750);
            
            blockState = true;
            
            c++;
        }
    }
    

    function removeBlock(){
        document.getElementById('h').remove()
    };

    setInterval(function () {
        if (scoreState) {
            setScore();
        }
    },1000);

    function setScore(){
        scoreState = true;
        score++;
        scoree.innerText=score;
    }

    // FUNCTIONALITIES FOR CHECKING IF THE ELEMENTS ARE COLLIDING

    function checkDead() {
        const mainCharacter = document.getElementById('sasuke').getBoundingClientRect();
        const block = document.querySelector('.block-hard');
    
        if (block) {
            const blockRect = block.getBoundingClientRect();
            
            if (window.innerHeight - mainCharacter.bottom < 250 && blockRect.left <= 205 && blockRect.left >=105) {
                gameStopped = true;
                blockState = false;
                scoreState = false;
                backgroundMusic.pause();
                localStorage.setItem('score',score);
                window.location.href='result.html';
            }
        }
    }

};
