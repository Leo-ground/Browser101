'use strict'

let imgs = document.querySelector('.imgs');
let id = 1;

function createImg () {
    let imgRow = document.createElement('div');
    imgRow.innerHTML=` 
        <img src="/chap.5/img/bug.png" alt="bug" class="bug" data-id=${id}>
        <img src="/chap.5/img/carrot.png" alt="carrot" class="carrot" data-id=${id}>
        `;
        id++;
    return imgRow;
}


function addImg () {
    const img = createImg();
    imgs.appendChild(img);
}

function imglocation() {
    addImg();
    let bug = document.querySelector('.bug');
    let carrot = document.querySelector('.carrot');
    let axisX = Math.random()*100;
    let axisY = Math.random()*100;
    console.log(`${axisX},${axisY}`);
    bug.style.transform=`translate(${axisX}px,${axisY}px)`
    carrot.style.transform=`translate(${axisX}px,${axisY}px)`
}





// bug.addEventListener('click',(event) => {
//     const id = event.target.dataset.id;
//     console.log(`id: ${id}`);
//     if(id){
//         const toBeDeleted = document.querySelector(`.bug[data-id="${id}"]`);
//         toBeDeleted.remove();
//     }
//     bug.remove();
// });

// carrot.addEventListener('click',() => {
//     console.log('stop');
// });

