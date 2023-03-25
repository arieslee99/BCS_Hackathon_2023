// display today's date and time, from https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-1.php
function displayDateAndTime() {
    var today = new Date();
    var day = today.getDay();
    var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    var prepand = (hour >= 12) ? " PM " : " AM ";
    hour = (hour >= 12) ? hour - 12 : hour;
    if (hour === 0 && prepand === ' PM ') {
        if (minute === 0 && second === 0) {
            hour = 12;
            prepand = ' Noon';
        }
        hour = 12;
        prepand = ' PM';
    }
    if (hour === 0 && prepand === ' AM ') {
        if (minute === 0 && second === 0) {
            hour = 12;
            prepand = ' Midnight';
        } else {
            hour = 12;
            prepand = ' AM';
        }
    }
    dateString = "Today is : " + daylist[day] + ". " + "Current Time : " + hour + " : " + minute + " : " + second + prepand;
    return dateString;
}


