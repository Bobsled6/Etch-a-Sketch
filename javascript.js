let container = document.querySelector(".container");


for(let i = 0; i < 16; i++){
    let etchDiv = document.createElement("div");
    etchDiv.className = "sketch";
    etchDiv.style.width = "150px";
    etchDiv.style.height = "150px";
    container.appendChild(etchDiv);
}

function dimCalc(userPrompt){
    userPrompt = prompt();
    let dimDiv = Math.sqrt(360000 / userPrompt);
    return(dimDiv);
    }
