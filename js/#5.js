let elem1 = document.querySelector("#elem1")
let elem2 = document.querySelector("#elem2")
let elem3 = document.querySelector("#elem3")
let elem4 = document.querySelector("#elem4")
elem1.addEventListener("blur",func)
function func(){
    let a = elem1.value;
    let arr = [];
    arr.push(a);
    arr = a.split(" ");
    elem2.value = arr[0]
    elem3.value = arr[1]
    elem4.value = arr[2]
}