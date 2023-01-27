let elem1 = document.querySelector("#elem1")
let p1 = document.querySelector("#p1")
let p2 = document.querySelector("#p2")
let p3 = document.querySelector("#p3")
p1.addEventListener("click", func1)
p2.addEventListener("click", func2)
p3.addEventListener("click", func3)
function func1(){
   elem1.value = +elem1.value + 1
}
function func2(){
    elem1.value = +elem1.value + 1
 }
 function func3(){
    elem1.value = +elem1.value + 1
 }
  