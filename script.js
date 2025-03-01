const dateText = document.getElementById("date-text");
const calIcn = document.getElementById("cal-icn");
const mapCalender = document.getElementById("map-calender");

function toggleCalender() {
    mapCalender.classList.toggle("d-none");
}

dateText.addEventListener("click", toggleCalender);
calIcn.addEventListener("click", toggleCalender);

document.addEventListener("click", (closeCal) => {
    if (!mapCalender.contains(closeCal.target) && !dateText.contains(closeCal.target) && !calIcn.contains(closeCal.target)) {
        mapCalender.classList.add("d-none");
    }
});

const monthToggle = document.getElementById("group");
const dropdownIcon = document.getElementById("month-drpdwn");
const monthList = document.getElementById("grp-month");

function toggleMonthList() {
    monthList.classList.toggle("d-none");
}

monthToggle.addEventListener("click", toggleMonthList);
dropdownIcon.addEventListener("click", toggleMonthList);

document.addEventListener("click", (event) => {
    if (!monthToggle.contains(event.target) && !dropdownIcon.contains(event.target) && !monthList.contains(event.target)) {
        monthList.classList.add("d-none");
    }
});

let yearGroup = document.getElementById("year-group");
let yearDrpDwn = document.getElementById("year-drpdwn");
let grpList = document.getElementById("grp-list");

function toggleYear() {
    grpList.classList.toggle("d-none");
}

yearGroup.addEventListener("click", toggleYear);
yearDrpDwn.addEventListener("click", toggleYear);


document.querySelectorAll("#grp-month li").forEach(li => {
    li.classList.add("month");
});

document.querySelectorAll(".days li").forEach(li => {
    li.classList.add("day");
});


const months = document.querySelectorAll(".month");
const days = document.querySelectorAll(".day");

let selectedDay = 1;
let selectedMonth = "February";
let selectedYear = "2025";

months.forEach(month => {
    month.addEventListener("click", () => {
        selectedMonth = month.innerText;
        monthToggle.innerText = selectedMonth;
        monthList.classList.add("d-none");
        updateDate();
    })
})

days.forEach(day => {
    day.addEventListener("click", () => {
        selectedDay = day.innerText;
        updateDate();
    })
})

function updateDate() {
    if (selectedMonth && selectedDay) {
        document.getElementById("date-text").value = `${selectedMonth} ${selectedDay}`;
    }
}

document.querySelectorAll("#maptime-ul li").forEach(li => {
    li.classList.add("time");

})

const dateText2 = document.getElementById("date-text-2");
const mapTime = document.getElementById("maptime-ul");

function toggleMapTime() {
    mapTime.classList.toggle("d-none");
}

dateText2.addEventListener("click", toggleMapTime);

document.addEventListener("click", (closeTime) => {
    if (!dateText2.contains(closeTime.target) && !mapTime.contains(closeTime.target)) {
        mapTime.classList.add("d-none");
    }
})

let selectedTime = "Now";

document.querySelectorAll("#maptime-ul li").forEach(time => {
    time.addEventListener("click", () => {
        selectedTime = time.innerText;
        dateText2.value = selectedTime;
        mapTime.classList.add("d-none"); 
    });
});


function updateTime(){
    if(selectedTime){
        document.getElementById("date-text-2").value = `${selectedTime}`
    }
}

