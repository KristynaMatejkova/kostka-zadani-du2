
const kostka = document.querySelector('.dice')
let side = 1
const otoceni = () => {
    side = side + 1
    if (side === 7){
        side = 1
    }
    kostka.src = `img/side${side}.svg`
}

document.addEventListener('keydown', otoceni)
