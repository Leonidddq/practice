let elem = document.querySelector("input")
elem.addEventListener("blur",func)
function func(){
  let a = +elem.value
  if( a > 1  && a < 101){
   elem.style.color = 'green'
  }
  else{
   elem.style.color = 'red'
  }
}