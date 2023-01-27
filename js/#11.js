let p = document.querySelectorAll("p")
let button = document.querySelector('#button')
button.addEventListener("click",func)
function func(){
   for(let i = 0; i<p.length;i++){
    p[i].textContent= p[i].textContent + (i + 1)
}
}

