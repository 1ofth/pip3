function getTime(){
    ct = new Date();

    return ct.toLocaleTimeString();
}

function getDate() {
    cd = new Date();

    return cd.toLocaleDateString();
}

function updateClock() {
    document.getElementById("clock_form:interactive_clock_time").innerText = getTime();
    document.getElementById("clock_form:interactive_clock_date").innerText = getDate();
}

function makeClockUpdatable() {
    setInterval("updateClock()", 10000);
}