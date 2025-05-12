let container = document.querySelector(".container");


for(let i = 0; i < 16; i++){
    let etchDiv = document.createElement("div");
    etchDiv.className = "sketch";
    etchDiv.style.width = "150px";
    etchDiv.style.height = "150px";
    container.appendChild(etchDiv);
}

function dimCalc(userPrompt){
    let dimDiv = Math.sqrt(360000 / userPrompt);
    return(dimDiv);
    }
