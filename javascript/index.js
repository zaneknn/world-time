function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = document.querySelector("#los-angeles .date");
    let losAngelesTimeElement = document.querySelector("#los-angeles .time");
    let losAngelesTime = moment().tz(`America/Los_Angeles`);
    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      `h:mm:ss [<small>]A[</small>] `
    );
  }

  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = document.querySelector("#tokyo .date");
    let tokyoTimeElement = document.querySelector("#tokyo .time");
    let tokyoTime = moment().tz(`Asia/Tokyo`);
    tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format(
      `h:mm:ss [<small>]A[</small>] `
    );
  }
  //NewYork
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = document.querySelector("#new-york .date");
    let newYorkTimeElement = document.querySelector("#new-york .time");
    let newYorkTime = moment().tz(`America/New_York`);
    newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format(
      `h:mm:ss [<small>]A[</small>] `
    );
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === `current`) {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>  </div>
  <a href="https://worldtimeprojectbyzane.netlify.app/">All cities</a>
  `;
}

updateTime();
setInterval(updateTime, 1);

let citiesSelectElement = document.querySelector(`#city`);
citiesSelectElement.addEventListener(`change`, updateCity);
