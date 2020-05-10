//На лекции разрешили делать через функции, а не через классы.

const CountdownTimer = ({ selector, targetDate }) => {
  const selectorRef = document.querySelector(selector);
  const secsTimerRef = selectorRef.querySelector('span[data-value="secs"]');
  const minsTimerRef = selectorRef.querySelector('span[data-value="mins"]');
  const hoursTimerRef = selectorRef.querySelector('span[data-value="hours"]');
  const daysTimerRef = selectorRef.querySelector('span[data-value="days"]');

  const updateTimer = time => {
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    secsTimerRef.textContent = secs;
    minsTimerRef.textContent = mins;
    hoursTimerRef.textContent = hours;
    daysTimerRef.textContent = days;
  };

  let intervalId;

  const turnOffTimer = () => {
    clearInterval(intervalId);
    secsTimerRef.textContent = "00";
    minsTimerRef.textContent = "00";
    hoursTimerRef.textContent = "00";
    daysTimerRef.textContent = "00";
  };

  const turnOnTimer = () => {
    intervalId = setInterval(() => {
      const nowData = Date.now();
      const futureDate = Date.parse(targetDate);
      const differenceTime = futureDate - nowData;
      if (differenceTime > 0) {
        updateTimer(differenceTime);
      } else {
        turnOffTimer();
      }
    }, 1000);
  };

  turnOnTimer();
};

CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2020"),
});
