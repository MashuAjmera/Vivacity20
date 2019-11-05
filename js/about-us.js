var footfall = 0;





function countfootfall() {
    if (footfall < 30) {
        footfall += 5;
    }
    document.getElementById('counterfootfall').innerHTML = footfall + 'k+';
    setTimeout(countfootfall, 100);
}




var colleges = 0;

function countcolleges() {
    if (colleges < 1000) {
        colleges += 5;
    }
    document.getElementById('countercolleges').innerHTML = colleges + "+";
    setTimeout(countcolleges, 3);
}

var events = 0;

function countevents() {
    if (events < 3000) {
        events += 10;
    }
    document.getElementById('counterevents').innerHTML = events + "+";
    setTimeout(countevents, 1);
}

document.getElementById('aboutus').onshow = function () {
    countcolleges();
    countevents();
    countfootfall();
}

// window.addEventListener('load', countfootfall);
// window.addEventListener('load', countcolleges);
// window.addEventListener('load', countevents);
