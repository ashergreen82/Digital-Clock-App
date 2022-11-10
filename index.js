var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
var time = new Date();
var month = time.getMonth();
var year = time.getFullYear();
var day = time.getDay();
var hour = time.getHours();
var minutes = time.getMinutes();
var seconds = time.getSeconds();
// var date = time.getDate();
var date = 11;
var number_suffix = which_number_suffix_to_use(date);
var current_time = hour + ":" + minutes + ":" + seconds;
var date = weekday[day] + "," + " " + months[month] + " " + date + number_suffix + " " + time.getFullYear();
document.getElementById("clock").innerHTML = current_time;
document.getElementById("date").innerHTML = date;

function which_number_suffix_to_use(date) {
    // let date = date.toString();
    if (date.length < 2) {
        if (date == 1) {
            number_suffix = "st"
        }
        if (date == 2) {
            number_suffix = "nd"
        }
        if (date == 3) {
            number_suffix = "rd"
        } else {
            number_suffix = "th"
        }
        return number_suffix;
    } else if (date.length == 2) {
        if (date[1] == 1) {
            number_suffix = "st"
        }
        if (date[2] == 2) {
            number_suffix = "nd"
        }
        if (date[3] == 3) {
            number_suffix = "rd"
        } else {
            number_suffix = "th"
        }
        return number_suffix;
    }
}