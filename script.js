var painted = document.getElementById('paint');

let dimensions = 640;
let gridSize = 16;

function renderGrid()
{
    for(let i=0;i<gridSize*gridSize;i++)
    {
    const div = document.createElement('div');
    div.style.width = dimensions /gridSize + "px";
    div.style.height = dimensions /gridSize + "px";
    // div.style.background = "green";
    div.classList.add("hover");
    div.addEventListener('mouseover', changeColor);
    //div.addEventListener('mousedown', changeColor);
    painted.appendChild(div);
    }
}

function setGridSize(x)
{
    gridSize = x;
    painted.innerHTML = "";
    renderGrid();
}

painted.style.width = dimensions + "px";
painted.style.height = dimensions + "px";

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function renderGrid()
{
    for(let i=0;i<gridSize*gridSize;i++)
    {
    const div = document.createElement('div');
    div.style.width = dimensions /gridSize + "px";
    div.style.height = dimensions /gridSize + "px";
    // div.style.background = "green";
    div.classList.add("hover");
    div.addEventListener('mouseover', changeColor);
    //div.addEventListener('mousedown', changeColor);
    painted.appendChild(div);
    }
}

renderGrid();

function changeColor(e)
{
    if (e.type === 'mouseover' && mouseDown)
        e.target.style.backgroundColor = "gray";
}