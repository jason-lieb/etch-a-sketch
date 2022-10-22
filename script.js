// Select body and create button
const body = document.querySelector('body');
const button = document.createElement('button');
button.style.height = '20px';
button.style.width = '80px';
const buttonText = document.createTextNode('BUTTON!');
button.appendChild(buttonText);
body.appendChild(button);
// Function to create square grid of divs in container
let createGrid = function (x) {
    const container = document.createElement('div');
    container.id = 'container';
    container.style.width = '100%';
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(' + x + ', 1fr)';
    for (let i=0; i < x; i++) {
        for (let j=0; j < x; j++) {
            const square = document.createElement('div');
            square.className = 'square';
            square.style.justifySelf = 'stretch';
            square.style.aspectRatio = '1/1';
            square.style.border = 'solid 1px black';
            container.appendChild(square);
        }
    }
    body.appendChild(container);
    // Turn divs black when hovered over
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {square.addEventListener('mouseenter', () => square.style.backgroundColor = 'black')});
    squares.forEach(square => {square.addEventListener('mouseleave', () => square.style.backgroundColor = '')});
}
createGrid(16);
// Create newGrid function and button event
let newGrid = function () {
    let newGridSize = prompt('How big should the new grid be?')
    newGridSize = Number(newGridSize);
    if (newGridSize > 100) newGridSize = 100;
    body.removeChild(container);
    createGrid(newGridSize);
}
button.addEventListener('click', newGrid);