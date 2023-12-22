const text = document.querySelector(".text");
const banana = document.querySelector(".x");

setInterval(function(){
    text.innerHTML = Math.ceil(Math.random() * 100000);
    text.style.color = "#" + Math.floor(Math.random()*16777215);

}, 500)