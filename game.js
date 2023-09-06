    const mode = window.localStorage.getItem('id');
    const sasuke = document.getElementById('sasuke');
    const kakashi = document.getElementById('kakashi');
    const naruto = document.getElementById('naruto');
    const game = document.getElementById('game');
    const scoree = document.getElementById('timer');
    let blockState = false;
    let scoreState = false;
    let c=0;
    let image='';
    let score = -1;

    function randum(){
        return Math.floor(Math.random()*2)
    }

    document.body.addEventListener('click',() =>{
        document.getElementById('instructions').style.visibility='hidden';
        kakashi.remove();
        naruto.remove();
        console.log("click event")
        console.log(kakashi,naruto)
        jump();
        if (!blockState) {block()};
        if (!scoreState) {setScore()};
        
    })

    setInterval(function () {
        if (blockState) {
            block();
        }
    },3000);

    function jump(){
        if (sasuke.classList != 'animate'){
            sasuke.classList.add("animate");
            setTimeout(removeJump,500);
        }
    };

    function removeJump(){
        sasuke.classList.remove("animate");
    };

    function block(){
        blockState = true;
        image= c%2 === 0 ? `<img src="assessts/block0.gif" id='h'>` : `<img src="assessts/block1.gif" id='h'>`
        game.innerHTML+=image;
        
        if (document.getElementById('h').classList != 'block'){
            document.getElementById('h').classList.add("block");
            console.log('yes')
            setTimeout(removeBlock,3000);
        }

        c++;
        // block();
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