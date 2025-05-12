let container = document.querySelector(".container");


for(let i = 0; i < 16; i++){
    let etchDiv = document.createElement("div");
    etchDiv.className = "sketch";
    etchDiv.style.width = "150px";
    etchDiv.style.height = "150px";
    etchDiv.addEventListener("mouseenter", () => {
        etchDiv.style.backgroundColor = "blue";
    })
    container.appendChild(etchDiv);
}

function dimCalc(userPrompt){
    if(userPrompt <= 100 && userPrompt > 0 && Number.isInteger(userPrompt)){
        let dimDiv = Math.sqrt(360000 / userPrompt);
        return(dimDiv);
    }   else{alert("ERROR: Please enter a whole number between 1 and 100")}
}

for(let i = 0; i < 8; i++){
    let colorValue = (Math.random() * 256);
    colorValue = Math.round(colorValue);
    console.log(colorValue);
}
