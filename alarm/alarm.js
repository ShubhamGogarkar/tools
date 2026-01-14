const hourBox = document.querySelector('.hour');
const minuteBox = document.querySelector('.minute');
const secondBox = document.querySelector('.second');

const setHourBox = document.querySelector('.setHour');
const setMinuteBox = document.querySelector('.setMinute');
const setSecondBox = document.querySelector('.setSecond');

const audio = document.querySelector('audio');
const butt = document.querySelector('.stopbutt');
const setButt = document.querySelector('.setAlarm');

let alarmRang = false; // 🔔 alarm flag

function updateClock() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // display time
    hourBox.innerText = hours.toString().padStart(2, '0');
    minuteBox.innerText = minutes.toString().padStart(2, '0');
    secondBox.innerText = seconds.toString().padStart(2, '0');

    const setHour = Number(setHourBox.value);
    const setMin = Number(setMinuteBox.value);
    const setSec = Number(setSecondBox.value);

    
 
    // alarm condition
    if (
        hours === setHour &&
        minutes === setMin &&
        seconds === setSec &&
        !alarmRang
    ) {
        console.log("Alarm ringing!");
        audio.play();
        alarmRang = false; 
    }
}

// stop alarm button
butt.addEventListener('click', function () {
    audio.pause();
    audio.currentTime = 0;
    alarmRang = false; // allow next alarm
});
  

setInterval(updateClock, 1000);
