const board = document.querySelector('#board')
const colors = ['#f5e836','#fdec01','#b1fd01','#1efd01','01fd22']
const SQUARES_NUMBER = 600
const radiuses = ['0%','15%','25%','50%','75%','85%']

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))


    board.append(square) 
}

function setColor(element) {
    const color = getRandomColor()
    const radius = getRadius()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 12px ${color}, 0 0 10px ${color},  0 0 20px ${color}`
    element.style.borderRadius = `${radius}`
    element.style.transform = 'scale(3)'
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.borderRadius = '0'
    element.style.transform = 'scale(0)'
    element.style.boxShadow = ' 0 0 2px #000'
}

function getRandomColor() {
 const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}

function getRadius() {
    const radusesIndex = Math.floor(Math.random() * radiuses.length)
    return radiuses[radusesIndex]
}