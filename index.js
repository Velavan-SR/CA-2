const Btn = document.querySelectorAll('.btns');
Btn.forEach(b => {
    b.addEventListener('click',(e) => {
        window.localStorage.setItem('id',e.target.id)
        window.location.href='game.html'
    })
});