let elem1 = document.querySelector("#elem1")
elem1.addEventListener("blur",func)
function func(){
   let a = 0
   let b = elem1.value
   let arr = []
   arr.push(b)
   arr = b.split(".")
   elem1.value = arr.reverse().join("-") + "."

}