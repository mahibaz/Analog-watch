const secondNeedle = document.querySelector('.second-needle');
const minutedNeedle = document.querySelector('.minute-needle');
const hourNeedle = document.querySelector('.hour-needle');

function clockTick(){
  const date = new Date();
  
  const seconds = date.getSeconds() / 60;
  const minutes = (seconds + date.getMinutes()) / 60;
  const hours = (minutes + date.getHours()) / 12;

  rotateClockNeedle(secondNeedle, seconds);
  rotateClockNeedle(minutedNeedle, minutes);
  rotateClockNeedle(hourNeedle, hours);
}

function rotateClockNeedle(element, rotation){
  element.style.setProperty('--rotate', rotation * 360)
}

setInterval(clockTick,1000);