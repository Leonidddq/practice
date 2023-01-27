let elem1 = document.querySelector('#elem1')
let elem2 = document.querySelector('#elem2')
let elem3 = document.querySelector('#elem3')
elem1.addEventListener('click',func1)
elem2.addEventListener('click',func2)
elem3.addEventListener('click',func3)
function func1(){
    elem1.textContent = elem1.textContent ** 2;
  
}
function func2(){
   elem2.textContent = elem2.textContent ** 2;
 
}
function func3(){
   elem3.textContent = elem3.textContent ** 2;
 
}