var painted = document.getElementById('paint');

let dimensions = 480;

painted.style.width = dimensions + "px";
painted.style.height = dimensions + "px";

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

for(let i=0;i<16;i++)
    for(let j=0;j<16;j++)
    {
        const div = document.createElement('div');
        div.style.width = dimensions /16 + "px";
        div.style.height = dimensions /16 + "px";
        // div.style.background = "green";
        div.classList.add("hover");
        div.addEventListener('mouseover', changeColor);
        //div.addEventListener('mousedown', changeColor);
        painted.appendChild(div);
    }

function changeColor(e)
{
    if (e.type === 'mouseover' && mouseDown)
        e.target.style.backgroundColor = "gray";
}