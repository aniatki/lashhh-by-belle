const radio = document.querySelectorAll("[data-href]")
const themeElem = document.getElementById("theme-link")
const themeName = localStorage["belleTheme"]
const theme = `static/css/theme-${themeName}.css`

radio.forEach((btn) => listen(btn, "click"))

if (localStorage["belleTheme"]) {
    themeElem.setAttribute("href", theme)
} else {
    themeElem.setAttribute("href", "static/css/theme-two.css")
}

function listen(element, eventType) {
    element.addEventListener(eventType, (e) => {
        let themeUrl = e.target.dataset.href
        localStorage.setItem("belleTheme", themeUrl)
        themeElem.setAttribute("href", `static/css/theme-${themeUrl}.css`)
    })
}
