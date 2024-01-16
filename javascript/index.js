function updateLosAngelesTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = document.querySelector("#los-angeles .date");
  let losAngelesTimeElement = document.querySelector("#los-angeles .time");
  let losAngelesTime = moment().tz(`America/Los_Angeles`);
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    `h:mm:ss [<small>]A[</small>] `
  );
}
updateLosAngelesTime();
setInterval(updateLosAngelesTime, 1);

function updateTokyoTime() {
  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = document.querySelector("#tokyo .date");
  let tokyoTimeElement = document.querySelector("#tokyo .time");
  let tokyoTime = moment().tz(`Asia/Tokyo`);
  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format(
    `h:mm:ss [<small>]A[</small>] `
  );
}
updateTokyoTime();
setInterval(updateTokyoTime, 1);
