const container = document.getElementById('grid');

function createGrid(gridSize) {
    container.innerHTML = '';

    const squareSize = 480 / gridSize;

    const totalSquares = gridSize * gridSize;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');

        square.style.width = squareSize + 'px';
        square.style.height = squareSize + 'px';

        square.addEventListener('mouseenter', () => {
            square.classList.add('hovered');
        });

        container.appendChild(square);
    }
}

function createNewGrid() {
    const userInput = prompt('Enter nuber of squares per side (maximum 100):');

    if (userInput === null) {
        return;
    }

    const gridSize = parseInt(userInput);

    if (isNaN(gridSize) || gridSize <= 0) {
        alert('Please enter a valid positive number.');
        return;
    }

    if (gridSize > 100) {
        alert('Maximum grid size is 100x100. Please enter a smaller number.')
        return;
    }

    createGrid(gridSize);
}

// TO-DO: resetGrid() function, that resets all etched cells

createGrid(16);