var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var time = new Date();
var month = time.getMonth();
var year = time.getFullYear();
var day = time.getDay();
var date = time.getFullYear() + '-' + months[month] + '-' + time.getDate();
console.log("time: ", time);
console.log(year, months[month], day);
console.log("year: ", year);
document.getElementById("clock").innerHTML = date;

