let today = new Date();
let month = today.getMonth() +1;
let year = today.getFullYear();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let availableDevlogs = ["2026-9", "2026-10"];

function updateDisplay() {
  document.getElementById("display").textContent = months [month - 1];
  document.getElementById("calendarimg").src = "images/calendar-" + month + ".gif";
  let current = year + "-" + month;
  if (availableDevlogs.includes(current)){
    document.getElementById("travel").disabled = false;
  } else {
    document.getElementById("travel").disabled = true;
  }
}

document.getElementById("right").addEventListener("click", function() {
  month = month + 1;
  if (month > 12) {
    month = 1;
    year = year + 1;
  }
  document.getElementById("display").textContent = months[month -1];
  updateDisplay();
});

document.getElementById("left").addEventListener("click", function() {
  month = month - 1;
    if (month < 1) {
    month = 12;
    year = year - 1;
  }
  document.getElementById("display").textContent = months[month -1];
  updateDisplay();
});

document.getElementById("travel").addEventListener("click",function() {
  window.location.href = "devlog-" + year + "-" + month + ".html";
});

updateDisplay();
