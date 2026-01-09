hourBox=document.querySelector('.hour');
minuteBox=document.querySelector('.minute');
secondBox=document.querySelector('.second');
setHourBox=document.querySelector('.setHour');
setMinuteBox=document.querySelector('.setMinute');
setSecondBox=document.querySelector('.setSecond');



function updateClock(){

const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
hourBox.innerText = hours;
minuteBox.innerText = minutes;
secondBox.innerText = seconds;



setSec=Number(setSecondBox.value);
setMin=Number(setMinuteBox.value);
setHour=Number(setHourBox.value);


if (hours === setHour && minutes === setMin && seconds === setSec)  {
    console.log("Alarm ringing!");}



}

setInterval(updateClock, 1000);