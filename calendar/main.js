const eventNames = [];
const eventMonths = [];
const eventDays = [];



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
    var months = document.getElementById('months');
    var eventMonth = months.options[months.selectedIndex].text;
    var days = document.getElementById('days2');
    var eventDay = days.options[days.selectedIndex].text;

    eventNames.push(eventTitle);
    eventMonths.push(eventMonth);
    eventDays.push(eventDay);
    
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

function showDaySummary(day) {
    var eventsOnDay = "";
    var stringToAdd = "";
    for (var i = 0; i < eventNames.length; i++) {
        if (eventDays[i] == day) {
            stringToAdd = "Event: " + eventNames[i] + " on March " + eventDays[i] + "\n"; 
            eventsOnDay = eventsOnDay.concat(stringToAdd);
        }
    }
    
    document.getElementById('allEvents').innerText = "";
    document.getElementById('allEvents').innerText = eventsOnDay;
    console.log(eventNames);
}



