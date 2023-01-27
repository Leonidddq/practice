let elem = document.querySelector("#elem")
let button = document.querySelector("#button")
button.addEventListener("click",func)
function func(){
  let a = ""
  let b = "awodkaosk092u83urij9u8he8734tvbdushbzIug87f1r209i9jfgae987rq3vbouphgvbpia;scnjUVBYUdf  [[[pnfa iub"
  for(let i = 0; i<8; i++){
    a += b.charAt(Math.floor(Math.random() * b.length))
  }
  elem.value = a
}