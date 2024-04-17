const halvingTime = "20 April 2024 04:20 AM";
const countdownElement = document.querySelector(".countdown");

document.getElementById("halvingTime").innerText = halvingTime;

function updateCountdown() {
  const endTime = new Date(halvingTime);
  const now = new Date();
  const timeDifference = endTime - now;

  // Check if the countdown has reached zero
  if (timeDifference <= 0) {
    clearInterval(timer); // Stop the countdown if it's over
    countdownElement.innerHTML = "<h2>Countdown Over!</h2>";
    return;
  }

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Updating the countdown display
  document.getElementById("days").innerText = formatTime(days);
  document.getElementById("hours").innerText = formatTime(hours);
  document.getElementById("minutes").innerText = formatTime(minutes);
  document.getElementById("seconds").innerText = formatTime(seconds);
}

// Making sure that the numbers are always displayed with leading zeros
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Call updateCountdown every second to keep the countdown updated
const timer = setInterval(updateCountdown, 1000);

// Update the countdown immediately when the page loads
updateCountdown();
