   

    
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
    let c=0;
    let image='';
    let score = -1;

    function randum(){
        return Math.floor(Math.random()*2)
    }

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

    setInterval(function () {
        if (blockState) {
            setTimeout(block,2500);
        }
    },2500);

    function jump(){
        if (document.getElementById('sasuke').classList != 'animate'){
            document.getElementById('sasuke').classList.add("animate");
            setTimeout(removeJump,1250);
        }
    };

    function removeJump(){
        document.getElementById('sasuke').classList.remove('animate');
    };

    function block(){
        image= c%2 === 0 ? `<img src="assessts/block0.gif" id='h' class='block' >` : `<img src="assessts/block1.gif" id='h' class='block' >`
        game.innerHTML+=image;
        
        setTimeout(removeBlock,2500);
        
        blockState = true;

        c++;
    };

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
            
            if (mainCharacter.right <= 305 && mainCharacter.bottom < blockRect.top && blockRect.left <= 460) {
                console.log('Collided');
                block.style.animation = 'none';
                block.style.display = 'none';
                alert('Oops! YOU LOST');
            }
        }
    }