let elem = document.querySelectorAll("div")
let button = document.querySelector("input")
button.addEventListener('click',func)
function func(){
   for(let i = 0; i < elem.length ;i++){
   elem[i].textContent = elem[i].textContent.slice(0,10) + "..."
   }
}