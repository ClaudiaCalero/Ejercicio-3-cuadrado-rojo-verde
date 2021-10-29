//Teniendo un cuadrado de color rojo en el documento de HTML:
// Desarrollar una función que, al hacer click en el mismo, 
//éste se transforme en una círculo de color verde

let colors = ["red", "green"];

//get button
let button = document.getElementById("button");


//add event listener
button.addEventListener("click", function() {
    //change color with rando,
    randomColor = colors[Math.floor(Math.random() * colors.length)]
    //get container
    let container = document.getElementById("square");

    square.style.background = randomColor;

})
