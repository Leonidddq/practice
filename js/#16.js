let elem1 = document.querySelector("#elem1")
let elem2 = document.querySelector("#elem2")
let button1 = document.querySelector("#button1")
let button2 = document.querySelector("#button2")
button1.addEventListener("click", func1)
button2.addEventListener("click", func2)
function func1(){
   elem1.value++
}
function func2(){
   let a = elem2.value
   if(a > 0){
      elem2.value--
   }
}