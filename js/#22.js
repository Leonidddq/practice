let elem = document.querySelector("#elem")
let p = document.querySelector("#p")
let button = document.querySelector("#button")
button.addEventListener("click",func)
function func(){
  p.textContent = 5/9 * (elem.value - 32)
}