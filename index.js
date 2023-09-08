const Btn = document.querySelectorAll('.btns');

const nameInput = document.getElementById('name');
const nicknameInput = document.getElementById('nickname');
let flag = true;


function handleInputChange() {
    const nameValue = nameInput.value;
    const nicknameValue = nicknameInput.value;


    if (nameValue === '' || nicknameValue === '') {
        alert('Please fill out both fields.');
        flag = false;
        return;
    }else{
        flag = true;
    }


    localStorage.setItem('name', nameValue);
    localStorage.setItem('nickname', nicknameValue);
} 

Btn.forEach(b => {
    b.addEventListener('click',(e) => {
        handleInputChange();
        if (flag){
            window.localStorage.setItem('id',e.target.id)
            window.location.href='game.html'
        }
    })
});