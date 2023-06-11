let marqueur = document.querySelector('#marqueur');
let list = document.querySelectorAll('ul li');

function IndicatorMove(e){
    marqueur.style.left = e.offsetLeft + 'px';
    marqueur.style.width = e.offsetWidth + 'px';
}

list.forEach(link => {
    link.addEventListener('mousemove', (e) => {
        IndicatorMove(e.target);
    })
})

function actif(){
    list.forEach((item) => item.classList.remove('actif'));
    this.classList.add('actif');
}

list.forEach((item) => item.addEventListener('mousemove', actif));