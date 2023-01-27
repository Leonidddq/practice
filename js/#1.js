let elem = document.querySelector("#elem")
let p = document.querySelector("p")
elem.addEventListener("blur",func)
function func(){
    p.textContent = elem.value
}