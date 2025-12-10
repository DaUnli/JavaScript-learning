// Timers
const clock = document.getElementById("clock");

const ClockTimeDate = () => {
  const dayTime = new Date();
  clock.innerText = dayTime.toLocaleString();
};

setInterval(ClockTimeDate, 1000);

ClockTimeDate();
