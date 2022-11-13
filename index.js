function get_and_display_time() {
    //I created a list of the months and days of the week, this is needed so I can spell it out instead of using numbers.
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    //This is the line that grabs the current date.  The lines after this one grabs the particular elements needed for the clock to function.
    const time = new Date();
    let month = time.getMonth();
    let year = time.getFullYear();
    let day = time.getDay();
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let date = time.getDate();

    // These lines here then execute the necessary functions to determine what the prefix and suffixes of the numbers should be.
    let number_suffix = which_number_suffix_to_use(date);
    let number_prefix_hour = which_number_prefix_to_use(hour);
    let number_prefix_minutes = which_number_prefix_to_use(minutes);
    let number_prefix_seconds = which_number_prefix_to_use(seconds);

    // These lines here are ussed to setup the display of how the time should look.
    let current_time = number_prefix_hour + hour + ":" + number_prefix_minutes + minutes + ":" + number_prefix_seconds + seconds;
    let date_display = weekday[day] + "," + " " + months[month] + " " + date + number_suffix + " " + time.getFullYear();

    // These two lines display where in the HTML code to place the time and date.
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
                return "st";
            }
            if (date == 2) {
                return "nd";
            }
            if (date == 3) {
                return "rd";
            } else {
                return "th";
            }
            // return number_suffix;
        } else if (date.length == 2) {
            if (date[1] == 1) {
                return "st";
            }
            if (date[1] == 2) {
                return "nd";
            }
            if (date[1] == 3 && date[0] == 2) {
                return "rd";
            } else {
                return "th";
            }
            return "";
        }
    }

}

// This setInterval() command, what a nifty little function!!!!  I need to be careful there, the command doesn't work if the () are placed after the function call.
// So it's function, not function(). 
setInterval(get_and_display_time, 1000);