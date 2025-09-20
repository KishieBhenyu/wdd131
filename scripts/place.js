// Footer date
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Weather values (static for now)
const temp = 20;  // °C
const wind = 10;  // km/h

// Wind chill calculation function
function calculateWindChill(t, s) {
  return (
    13.12 +
    0.6215 * t -
    11.37 * Math.pow(s, 0.16) +
    0.3965 * t * Math.pow(s, 0.16)
  ).toFixed(1);
}

// Apply conditions
let windChill = "N/A";
if (temp <= 10 && wind > 4.8) {
  windChill = calculateWindChill(temp, wind) + " °C";
}

document.querySelector("#temp").textContent = temp;
document.querySelector("#wind").textContent = wind;
document.querySelector("#windchill").textContent = windChill;