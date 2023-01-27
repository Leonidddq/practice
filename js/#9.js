let elem1 = document.querySelector("#elem1")
let button = document.querySelector("#button")
button.addEventListener("click",func)
function func(){
   let b = elem1.value
   let arr1 = []
   arr1.push(b)
   arr1 = b.split("")
   let arr2 = []
   arr2.push(b)
   arr2 = b.split("")
   arr2 = arr2.reverse()
   if(arr1[0] == arr2[0]){
      elem1.value = 'yes'
   }
   else{
      elem1.value = 'no'
   }
console.log(arr1,arr2)
}