// Modal stuff
const modal = document.querySelector(".date-time-modal")
const form = modal.querySelector("form")
const button = document.querySelector(".primary-btn")
const input = modal.querySelector("input")

const LOCAL_STORAGE_KEY = `bookLashAppointment${new Date().getSeconds()}`

form.addEventListener("submit", (e) => {
    JSON.stringify(localStorage.setItem(LOCAL_STORAGE_KEY, input.value))
})

button.addEventListener("click", () => {
    modal.showModal()
})
