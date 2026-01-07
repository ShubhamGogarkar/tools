function updateClock(){

const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
document.querySelector('.hour').innerText = hours.toString().padStart(2, '0');
document.querySelector('.minute').innerText = minutes.toString().padStart(2, '0');
document.querySelector('.second').innerText = seconds.toString().padStart(2, '0');
}


setInterval(updateClock, 1000);d

