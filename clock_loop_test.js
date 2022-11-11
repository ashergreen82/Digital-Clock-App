const hours = 4
const minutes = 4
const seconds = 4

for (; hours < 60; hours++) {
    if (hours == 60) {
        hours = 0;
    }
    for (; minutes < 60; minutes++) {
        if (minutes == 60) {
            minutes = 0
        }
        for (; seconds < 60; seconds++) {
            if (seconds == 60) {
                seconds = 0
            }
        }

    }
    console.log(hours + ":" + minutes + ":" + seconds)
    // const current_time = number_prefix_hour + hour + ":" + number_prefix_minutes + minutes + ":" + number_prefix_seconds + seconds;