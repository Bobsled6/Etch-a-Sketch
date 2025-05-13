let container = document.querySelector(".container");
let divButton = document.createElement("button");
let bigContainer = document.querySelector(".bigContainer");
let userChoice = 16;
createGrid();

function dimCalc(userPrompt){
    if(userPrompt <= 100 && userPrompt > 0 && Number.isInteger(userPrompt)){
        let dimDiv = (1 / userPrompt) * 600;
        return(dimDiv);
    }   else{alert("ERROR: Please enter a whole number between 1 and 100.")}
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
        }   etchDiv.style.backgroundColor = "rgb("+ rgbStringArray[0] +
                                             ", " + rgbStringArray[1] +
                                             ", " + rgbStringArray[2] + ")";})                              
    container.appendChild(etchDiv);
}}

console.log(dimCalc(16));

divButton.textContent = "New Grid";

divButton.addEventListener("click", () => {
    promptAnswer = prompt("Please enter the amount of squares per side of your new grid. (max 100)");
    userChoice = promptAnswer * 1;
    createGrid();
});

bigContainer.appendChild(divButton);
bigContainer.appendChild(container);
