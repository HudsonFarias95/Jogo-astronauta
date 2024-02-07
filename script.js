const astro = document.querySelector('.astro');
const ocram = document.querySelector('.ocram');


const jump = () => {
    astro.classList.add('jump');

    setTimeout(() => {
        astro.classList.remove('jump');

    }, 500);

}

const loop = setInterval(() => {
    const ocramPosition = ocram.offsetLeft;
    const astroPosition = +window.getComputedStyle(astro).bottom.replace('px','');

    if (ocramPosition <= 120 && ocramPosition > 0 && astroPosition < 90)   {
        ocram.style.animation = 'none';
        ocram.style.left = `${ocramPosition}px`;

        astro.style.animation = 'none';
        astro.style.bottom = `${astroPosition}px`;
    

        astro.src ='/images/explode.gif';
        astro.style.width = '75px'
        astro.style.marginLeft = "50px"

        clearInterval(loop);


}
}, 10);

document.addEventListener('keydown', jump);