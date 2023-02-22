const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// months are ZERO index based;
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
let day = weekdays[futureDate.getDay()];
let month = months[futureDate.getMonth()];
let date = futureDate.getDate()
let year = futureDate.getFullYear()
let hours = futureDate.getHours()
let minutes = futureDate.getMinutes()
minutes = minutes < 10 ? `0${minutes}` : minutes;

function timePeriod(hours) {
  if (hours >= 12) return `pm`
  return `am`
}

let period = timePeriod(hours)

giveaway.textContent = `giveaway ends on ${day}, ${date} ${month} ${year} ${hours}:${minutes}${period}`;

const futureTime = futureDate.getTime()

function getRemainingTime() {

  let today = new Date().getTime()
  let total = futureTime - today;
  
  // getting values in milliseconds
  let oneDay = 24 * 60 * 60 * 1000
  let oneHour = 60 * 60 * 1000
  let oneMinute = 60 * 1000
  
  let days = Math.floor(total / oneDay)
  let hours = Math.floor((total%oneDay) / oneHour)
  let minutes = Math.floor((total%oneHour) / oneMinute)
  let seconds = Math.floor((total % oneMinute) / 1000)
  
  let values = [days, hours, minutes, seconds]
  
  
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`)
    }
    return item
  }
  
    items.forEach((item, index) => {
      item.innerHTML = format(values[index])
    })
  if (total < 0) {
    clearInterval(id)
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
  }
    
}
let id = setInterval(getRemainingTime, 1000)

getRemainingTime()