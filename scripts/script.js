const container = document.getElementById('grid');

const totalSquares = 16 * 16;

for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    container.appendChild(square);
}