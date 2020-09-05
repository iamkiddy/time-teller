let hours = document.querySelector(".hrs");
let minutes = document.querySelector(".mins");
let seconds = document.querySelector(".secs");

function changeSeconds() {
  const now = new Date();

  let getHrs = now.getHours();
  let getMins = now.getMinutes();
  let getSecs = now.getSeconds();

  hours.innerText = getHrs;
  minutes.innerText = getMins;
  seconds.innerText = getSecs;
}

setInterval(changeSeconds, 1000);
