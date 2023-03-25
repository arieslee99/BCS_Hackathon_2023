const eventNames = [];
const eventMonths = [];
const eventDays = [];
const eventNamesPast = [];
const eventMonthsPast = [];
const eventDaysPast = [];
const oldEvents = "";

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
    var eventMonth = document.getElementById('months').value;
    var eventDay = document.getElementById('days').value;

    eventNames.push(eventTitle);
    eventMonths.push(eventMonth);
    eventDays.push(eventDay);
    
    document.getElementById('allEvents').innerText = displayEvents();

}


// display all events in list as a string
function displayEvents() {
    var eventsAsString = "";
    for (var i = 0; i < eventNames.length; i++) {
        var stringToAdd = "Title: " + eventNames[i] + ". When: " + eventMonths[i] + " " + eventDays[i] + "\n";
        eventsAsString = eventsAsString.concat(stringToAdd);
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
    for (var i = 0; i < eventNames.length; i++) {
        if (eventPassed(e)) {
            eventNamesPast.push(eventNames[i])
            eventMonthsPast.push(eventMonths[i]);
            eventDaysPast.push(eventDays[i]);
            var stringToAdd = "Title: " + eventNames[i] + ". When: " + eventMonths[i] + " " + eventDays[i] + "\n";
            eventNames.splice(i, 1);
            eventMonths.splice(i, 1);
            eventDays.splice(i, 1);
            oldEvents = oldEvents.concat(stringToAdd);
        }
    }
    return oldEvents;
}

function showDaySummary(day) {
    var eventsOnDay = "";
    var stringToAdd = "";
    for (var i = 0; i < eventNames.length; i++) {
        if (eventDays[i] === day) {
            stringToAdd = "Event: " + eventNames[i] + " on March " + eventDays[i] + "\n"; 
            eventsOnDay = eventsOnDay.concat(stringToAdd);
        }
    }
    return eventsOnDay;
}



