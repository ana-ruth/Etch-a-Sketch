
let value;
let validNum = false;
let numOfSq;
const container = document.querySelector("#container");


const button = document.querySelector("button");
button.addEventListener('click',()=>{

    while(validNum == false)
    {        
        value = prompt("Please enter number of squares per side (< 100):" );
        if(value<=100) 
        {
            numOfSq = value;
            validNum = true;
            createGrid(numOfSq);
        }

    }
    validNum = false;
});

function generateColor()
    {
        const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let code = "";
        for(let i=0; i<6; i++){
        code += hexArray[Math.floor(Math.random()*16)];
        }
        return `#${code}`
   }



function createGrid(size)
{
    container.replaceChildren();
    for(let j=0;j<size;j++)
        {
            const row = document.createElement("div");
            row.classList.add("row");

            for (let i=0;i<size;i++)
            {
                const square = document.createElement("div");
                square.classList.add("square");
                
                function changeColor()
                {
                    square.style.backgroundColor = generateColor();
                }
                square.addEventListener("mouseover",changeColor);

                row.appendChild(square);
            }
            container.appendChild(row);
        }
}