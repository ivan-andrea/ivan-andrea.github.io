document.addEventListener('DOMContentLoaded', () => { 
  // VARIABLES
  const DATE_TARGET = new Date('07/08/2023 12:30 PM');
  // DOM for render
  const SPAN_DAYS = document.querySelector('span#days');
  const SPAN_HOURS = document.querySelector('span#hours');
  const SPAN_MINUTES = document.querySelector('span#minutes');
  const SPAN_SECONDS = document.querySelector('span#seconds');
  // Milliseconds for the calculations
  const MILLISECONDS_OF_A_SECOND = 1000;
  const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
  const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
  const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24
  // Method that updates the countdown and the sample
  function updateCountdown() {
      // Calcs
      const NOW = new Date()
      const DURATION = DATE_TARGET - NOW;
      const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
      const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
      const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
      const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);
      // Render
      SPAN_DAYS.textContent = (REMAINING_DAYS.toString()).padStart(2,"0");
      SPAN_HOURS.textContent = (REMAINING_HOURS.toString()).padStart(2,"0");
      SPAN_MINUTES.textContent = (REMAINING_MINUTES.toString()).padStart(2,"0");
      SPAN_SECONDS.textContent = (REMAINING_SECONDS.toString()).padStart(2,"0");
  }
  // INIT
  updateCountdown();
  // Refresh every second
  setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);
});

function show_hide(id) {
  var x = document.getElementById(id);
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

function show_hide_block(id) {
  var x = document.getElementById(id);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}