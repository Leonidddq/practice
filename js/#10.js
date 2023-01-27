let elem1 = document.querySelector("#elem1")
elem1.addEventListener("blur",func)
function func(){
   let b = elem1.value
   let arr = []
   arr.push(b)
   arr = b.split("")
   for(let i = 0; i<arr.length;i++){
   if(3 == arr[i]){
      elem1.value = 'yes'
   }
   else{
      elem1.value = 'no'
   }
}
console.log(arr)
}