let container = document.querySelector(".container");
let divButton = document.createElement("button")


for(let i = 0; Math.sqrt(i) < 16; i++){
    let etchDiv = document.createElement("div");  
        etchDiv.className = "sketch";
        etchDiv.style.width = "37.5px";
        etchDiv.style.height = "37.5px";
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
}

function dimCalc(userPrompt){
    if(userPrompt <= 100 && userPrompt > 0 && Number.isInteger(userPrompt)){
        let dimDiv = (1 / userPrompt) * 600;
        return(dimDiv);
    }   else{alert("ERROR: Please enter a whole number between 1 and 100.")}
}

console.log(dimCalc(16));