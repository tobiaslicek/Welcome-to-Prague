let button = document.getElementById('button');
let theText = document.querySelectorAll('.top-5__header');    
button.onclick = function () { 
    for(let x of theText) {
        x.classList.toggle('top-5__header--colorized');
    }
}; 