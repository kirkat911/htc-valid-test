//Дата
var d = new Date();

var day=new Array("Воскресенье","Понедельник","Вторник",
"Среда","Четверг","Пятница","Суббота");

var month=new Array("Января","Февраля","Марта","Апреля","Мая","Июня",
"Июля","Августа","Сентября","Октября","Ноября","Декабря");

//Время
Data = new Date();
Hour = Data.getHours();
Minutes = Data.getMinutes();

document.write(day[d.getDay()]+" " +d.getDate()+ " " 
		+ month[d.getMonth()] + " " + d.getFullYear() + " г." +"  "+
		"Время: "+Hour+":"+Minutes );

//Проверка браузера
