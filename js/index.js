const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    console.log('loop');

    const pipePos = pipe.offsetLeft;
    const marioPos = +window.getComputedStyle(mario).bottom.replace('px', '');//Converte para número
    if(pipePos <= 120 && pipePos > 0 && marioPos < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePos}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPos}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
    }
    console.log(pipePos);
    clearInterval(loop);
}, 10);

document.addEventListener('keydown', jump);//Ação de pressionar a tecla do teclado