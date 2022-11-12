
function get_and_display_time() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const time = new Date();
    const month = time.getMonth();
    const year = time.getFullYear();
    const day = time.getDay();
    var hour = time.getHours();
    // const hour = 4;
    var minutes = time.getMinutes();
    // const minutes = 4;
    var seconds = time.getSeconds();
    // const seconds = 4;
    const date = time.getDate();
    // var date = 23;
    var number_suffix = which_number_suffix_to_use(date);
    const number_prefix_hour = which_number_prefix_to_use(hour);
    const number_prefix_minutes = which_number_prefix_to_use(minutes);
    const number_prefix_seconds = which_number_prefix_to_use(seconds);
    const current_time = number_prefix_hour + hour + ":" + number_prefix_minutes + minutes + ":" + number_prefix_seconds + seconds;
    const date_display = weekday[day] + "," + " " + months[month] + " " + date + number_suffix + " " + time.getFullYear();
    document.getElementById("clock").innerHTML = current_time;
    document.getElementById("date").innerHTML = date_display;

    function which_number_prefix_to_use(time) {
        time = time.toString();
        if (time.length < 2) {
            number_prefix = "0"
        } else {
            number_prefix = ""
        }
        return number_prefix;
    }

    function which_number_suffix_to_use(date) {
        date = date.toString();
        if (date.length < 2) {
            if (date == 1) {
                number_suffix = "st";
            }
            if (date == 2) {
                number_suffix = "nd";
            }
            if (date == 3) {
                number_suffix = "rd";
            } else {
                number_suffix = "th";
            }
            return number_suffix;
        } else if (date.length == 2) {
            if (date[1] == 1) {
                number_suffix = "st";
            }
            if (date[1] == 2) {
                number_suffix = "nd";
            }
            if (date[1] == 3 && date[0] == 2) {
                number_suffix = "rd";
            } else {
                number_suffix = "th";
            }
            return number_suffix;
        }
    }

}
// get_and_display_time();
// setTimeout(get_and_display_time, 5000);

// let timer = setTimeout(function myTimer() {
//     get_and_display_time();
//     timer = setTimeout(get_and_display_time, 1000);
// }, 1000);

setInterval(get_and_display_time(), 1000);
// while (true) {
//     get_and_display_time()
// }