'use strict'

let elementX = document.getElementById("xline");
let elementY = document.getElementById("yline");
let elementBox= document.getElementById("textBox");




window.addEventListener('click', (event) => {
    
    //console.log(`event.client: ${event.clientX}, ${event.clientY}`);
    //elementY.style.top=`${event.clientY}px`;
    // console.log(element.style.backgroundColor="red");

});

window.addEventListener('mousemove', (event) => {
    // console.log(`event.client: ${event.clientX}, ${event.clientY}`);
    elementX.style.left=`${event.clientX}px`;
    elementY.style.top=`${event.clientY}px`;
    elementBox.style.left=`${event.clientX}px`;
    elementBox.style.top=`${event.clientY}px`;
    elementBox.textContent=`x: ${event.clientX}, y: ${event.clientY}`;
    

});