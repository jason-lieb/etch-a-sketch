// Select body and create container
const body = document.querySelector('body');
const container = document.createElement('div');
container.id = 'container';
// Style container with CSS grid
container.style.width = '100%';
container.style.display = 'grid';
container.style.gridTemplateColumns = 'repeat(16, 1fr)';
// Create 16x16 grid of divs in container
for (let i=0; i < 16; i++) {
    for (let j=0; j < 16; j++) {
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
squares.forEach(square => {square.addEventListener('mouseleave', () => square.style.backgroundColor = 'white')});