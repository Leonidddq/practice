let elem = document.querySelector("#elem")
elem.addEventListener("blur", func)
function func(){
   let date = new Date(2016,12,31);
   let day = date.getDay();
   let days = ['воскресение','понедельник','вторник','среда','четверг','пятница','суббота']
   elem.value = (days[day])

}