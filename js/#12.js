let g = document.querySelector("#g")
let y = document.querySelector("#y")
g.addEventListener("mouseover", func)
   function func(){
      g.textContent = g.textContent + "("+g.href+")"
      y.textContent = y.textContent + "("+y.href+")"
}