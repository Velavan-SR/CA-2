   

    
    // GAME FUNCTIONALITY
    
    
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
        }
      });

    // document.addEventListener('click',jump);

    document.body.addEventListener('click',() =>{
        jump();

        document.getElementById('instructions').style.visibility='hidden';
        
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
            setTimeout(block,3000);
        }
    },3000);

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
        
        setTimeout(removeBlock,3000);
        
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