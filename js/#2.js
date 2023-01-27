
let elem1 = document.querySelector("#elem1")
let elem2 = document.querySelector("#elem2")
let elem3 = document.querySelector("#elem3")
let p = document.querySelector("p")
let button = document.querySelector("#button")
button.addEventListener("click",func)
function func(){
    p.textContent = +elem1.value + +elem2.value + +elem3.value
}