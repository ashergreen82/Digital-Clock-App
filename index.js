var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var time = new Date();
var date = time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate();
var month = time.getMonth();
var year = time.getFullYear();
var day = time.getDay();
console.log("time: ", time);
console.log(year, months[month], day);
console.log("year: ", year);
document.getElementById("Clock").innerHTML = "This is a test";

