const MIN_HOUR = 8
const MAX_HOUR = 16
const MIN_MINUTE = 1
const MAX_MINUTE = 59

let today, tomorrow, afterTomorrow, beforeLast, last
switch (new Date().getDay()) {
    case 1:
    case 6:
    case 7:
        today = "Monday"
        tomorrow = "Tuesday"
        afterTomorrow = "Wednesday"
        beforeLast = "Thursday"
        last = "Friday"
        break
    case 2:
        today = "Tuesday"
        tomorrow = "Wednesday"
        afterTomorrow = "Thursday"
        beforeLast = "Friday"
        last = "Monday"
        break
    case 3:
        today = "Wednesday"
        tomorrow = "Thursday"
        afterTomorrow = "Friday"
        beforeLast = "Monday"
        last = "Tuesday"
        break
    case 4:
        today = "Thursday"
        tomorrow = "Friday"
        afterTomorrow = "Monday"
        beforeLast = "Tuesday"
        last = "Wednesday"
        break
    case 5:
        today = "Friday"
        tomorrow = "Monday"
        afterTomorrow = "Tuesday"
        beforeLast = "Wednesday"
        last = "Thursday"
        break
}
const dates = [today, tomorrow, afterTomorrow, beforeLast, last]

let hourNow = new Date().getHours()
const hours = [hourNow, hourNow + 1, hourNow + 2, hourNow + 3, hourNow + 4]

let minuteNow = new Date().getMinutes()

const dateElements = document.querySelectorAll(".date-container")
const hourElements = document.querySelectorAll(".hour-container")
const minuteElements = document.querySelectorAll(".minute-container")

for (let i = 0; i < dates.length; i++) {
    dateElements[i].innerText = dates[i]
    hourElements[i].innerText = hours[i]
    minuteElements[i].innerText = Math.floor(minuteNow)
    hourElements.forEach((element) => {
        if (element.innerText > MAX_HOUR) {
            element.classList.add("unavailable")
            element.nextElementSibling?.classList.add("unavailable")
        }
    })

    Math.floor((minuteNow += 5))
    if (minuteNow > MAX_MINUTE) minuteNow = MIN_MINUTE
}

dateElements.forEach((elem) => {
    elem.addEventListener("click", (e) => {
        const clicked = e.target.children
        console.log(clicked)
    })
})
hourElements.forEach((elem) => {
    elem.addEventListener("click", (e) => {
        // console.log(e.target)
    })
})
minuteElements.forEach((elem) => {
    elem.addEventListener("click", (e) => {
        // console.log(e.target)
    })
})
