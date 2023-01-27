let elem = document.querySelector("#elem")
let p = document.querySelector("#p")
let button = document.querySelector("#button")
button.addEventListener("click",func)
function func() {
    let a = elem.value
    for (let i = a - 1; i >= 1; i--) {
      a= a * i; 
    }
    p.textContent = a
  }
  
