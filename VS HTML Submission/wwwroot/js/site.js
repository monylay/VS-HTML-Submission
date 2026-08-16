// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//animation for title

let position = 0;
let direction = 1;

function animateTitle() {
    position += direction;

    if (position >= 100 || position <= 0) {
        direction *= -1;
    } 
    document.getElementById("title").style.left = position + "px";
}

setInterval(animateTitle, 10);