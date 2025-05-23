let container = document.querySelector(".container");
let divButton = document.createElement("button");
let clearButton = document.createElement("button");
let bigContainer = document.querySelector(".bigContainer");
let userChoice = 16;
createGrid();

function dimCalc(userPrompt){
    let dimDiv = (1 / userPrompt) * 600;
    return(dimDiv);
}

function createGrid (){for(let i = 0; Math.sqrt(i) < userChoice; i++){
    let etchDiv = document.createElement("div");
        etchDiv.className = "sketch";
        etchDiv.style.width = dimCalc(userChoice) + "px";
        etchDiv.style.height = dimCalc(userChoice) + "px";
        etchDiv.addEventListener("mouseenter", () => {
        let rgbStringArray = new Array();
            for(let i = 0; i < 3; i++){
                let colorValue = (Math.random() * 256);
                colorValue = Math.round(colorValue);
                rgbStringArray.push(colorValue);
        }     
        etchDiv.style.backgroundColor = "rgb("+ rgbStringArray[0] +
                                             ", " + rgbStringArray[1] +
                                             ", " + rgbStringArray[2] + ")";      
                               
            })
                 
    container.appendChild(etchDiv);
    
    
}}

let sketchDivArray = document.querySelectorAll(".sketch");
let sketchDiv = document.querySelector(`.sketch`);

function opacChangeFunct(){sketchDivArray.forEach(function(sketchDiv){
    sketchDiv.addEventListener("mouseenter", () => {
        sketchDiv.style.opacity = parseFloat(window.getComputedStyle(sketchDiv).getPropertyValue("opacity")) + .1;
    });
});}

opacChangeFunct();

divButton.textContent = "New Grid";

divButton.addEventListener("click", () => {
    promptAnswer = prompt("Please enter the amount of squares per side of your new grid. (max 100)");
    userChoice = promptAnswer * 1;
    if (userChoice > 0 && userChoice <= 100){
    container.innerHTML = "";
    createGrid();
    sketchDivArray = document.querySelectorAll(".sketch");
    sketchDiv = document.querySelector(`.sketch`);
    opacChangeFunct();}
    else{alert("ERROR: Please enter a whole number between 1 and 100.")}
});

clearButton.textContent = "Clear Grid";
clearButton.addEventListener("click", () => {
    sketchDivArray.forEach(function(sketchDiv){
        sketchDiv.style.opacity = 0;
    })
})

bigContainer.appendChild(divButton);
bigContainer.appendChild(container);
bigContainer.appendChild(clearButton);

