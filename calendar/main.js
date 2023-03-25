// display today's date and time, from https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-1.php

const events = [];

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

function addEvent() {
    var eventTitle = document.getElementById('eventTitle').value;
    var eventDate = document.getElementById('eventDate').value;
    var eventTime = document.getElementById('eventTime').value;

    const event = {title:eventTitle, date:eventDate, time:eventTime};

    events.push(event);
    return "New Event Added: " + eventTitle + ", at " + eventTime + " on" + eventDate;
}

function displayEvents() {
    var eventsAsString = "";
    for (var i = 0; events.length; i++) {
        var e = events(i);
        var stringToAdd = "Title: " + e.title + "When: " + e.date + ", at " + e.time;
        eventsAsString.concat(stringToAdd);

    }
    return eventsAsString;
}


