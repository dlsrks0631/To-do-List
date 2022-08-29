const clock = document.querySelector("#clock");

///// 시계 /////
function getClock() {
  const date = new Date(); // 현재 시각 구하기: new Date().getHours,minutes,seconds
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
