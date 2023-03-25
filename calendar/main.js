// display today's date and time, from https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-1.php

const events = [];

// display date and time
function displayDateAndTime() {
    var today = new Date();
    var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
    var monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return dayList[today.getDay()] + ", " + monthList[today.getMonth()] + " " + today.getUTCDate() + ", " + today.getHours() + ":" + today.getMinutes();
}

// add event to list of events
function addEvent() {
    var eventTitle = document.getElementById('eventTitle').value;
    var eventMonth = document.getElementById('eventMonth').value;
    var eventDay = document.getElementById('eventDay').value;
    var eventTime = document.getElementById('eventTime').value;

    const event = {title:eventTitle, month:eventMonth, day:eventDay, time:eventTime};

    events.push(event);
    return "New Event Added: " + eventTitle + ", at " + eventTime + " on" + eventDate;
}


// display all events in list as a string
function displayEvents() {
    var eventsAsString = "";
    for (var i = 0; i < events.length; i++) {
        var e = events[i];
        var stringToAdd = "Title: " + e.title + "When: " + e.month + " " + e.day + ", at " + e.time + "\n";
        eventsAsString.concat(stringToAdd);

    }
    return eventsAsString;
}

// return true if event has passed
function eventPassed(event) {
    today = new Date();
    eventDay = new Date(2023, event.month, event.day);

    return today.getTime() >= eventDay.getTime()
}

function removeOldEvents() {
    for (var i = 0; i < events.length; i++) {
        var e = events[i];
        if (eventPassed(e)) {
            events.splice(i, 1);
        }
    }

}

document.getElementById('addEventButton').addEventListener('click', addEvent);
document.getElementById('displayAllUpcomingEvents').innerText = displayEvents();

