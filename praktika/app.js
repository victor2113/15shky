const bigSquare = document.querySelector('.bigSquare');
const cellSize = 100;
const empty = {
    value: 0,
    top: 0,
    left: 0
}
const nums = [...Array(15).keys()].map(x => x + 1); //sort(() => Math.random() - 0.5);
const cells = [];
cells.push(empty);

function move(n) {
    const cell = cells[n];

    const lD = Math.abs(empty.left - cell.left);
    const tD = Math.abs(empty.top - cell.top);
    if (lD + tD > 1)
        return;

    cell.element.style.left = `${empty.left * cellSize}px`;
    cell.element.style.top = `${empty.top * cellSize}px`;

    const emptyLeft = empty.left;
    const emptyTop = empty.top;

    empty.left = cell.left;
    empty.top = cell.top;

    cell.left = emptyLeft;
    cell.top = emptyTop;

    const isWon = cells.every(cell => { return cell.value == cell.top * 4 + cell.left; });
    if (isWon) {
        alert("Victory!");
    }


}

for (let i = 1; i < 16; i++) {
    const cell = document.createElement('div');
    const value = nums[i - 1];
    cell.className = 'cell';
    cell.innerHTML = nums[i - 1];
    const left = i % 4;
    const top = (i - left) / 4;

    cells.push({
        value: value,
        left: left,
        top: top,
        element: cell
    });



    cell.style.left = `${left * cellSize}px`;
    cell.style.top = `${top * cellSize}px`;
    cell.addEventListener('click', () => { move(i); });

    bigSquare.append(cell);
}