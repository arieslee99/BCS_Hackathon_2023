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
    var eventTitle = document.getElementById('eventTitleInput').value;
    var eventMonth = document.getElementById('eventMonthInput').value;
    var eventDay = document.getElementById('eventDayInput').value;
    //var eventTime = document.getElementById('eventTimeInput').value;

    const event = {title:eventTitle, month:eventMonth, day:eventDay};

    events.push(event);
    return "New Event Added: " + eventTitle + " on" + eventMonth + " " + eventDay;
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

// removes old events from list of events
function removeOldEvents() {
    for (var i = 0; i < events.length; i++) {
        var e = events[i];
        if (eventPassed(e)) {
            events.splice(i, 1);
        }
    }
}

function showDaySummary() {
    //
}


