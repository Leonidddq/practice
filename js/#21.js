let elem = document.querySelector("#elem")
let button = document.querySelector("#button")
button.addEventListener("click",func)
function func(){
  let a = ""
  let b = elem.value
  for(let i = 0; i<b.length; i++){
    a += b.charAt(Math.floor(Math.random() * b.length))
  }
  elem.value = a
}