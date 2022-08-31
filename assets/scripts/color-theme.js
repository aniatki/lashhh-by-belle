const radio = document.querySelectorAll("[data-href]")
const cssLink = document.querySelector("#theme-link")

radio.forEach((btn) => listen(btn, "click"))

function listen(element, eventType) {
    element.addEventListener(eventType, (e) => {
        let themeUrl = `assets/css/theme-${e.target.dataset.href}.css`
        cssLink.setAttribute("href", themeUrl)
    })
}
