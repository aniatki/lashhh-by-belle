const main = document.querySelector(".dashboard-main")

let itemsFromLocalStorage = []
getLocalStorageItems()
function getLocalStorageItems() {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        let item = localStorage.getItem(key)
        itemsFromLocalStorage.push(item)
    }
}

itemsFromLocalStorage.forEach((dateFrom) => {
    const dateObj = Date.parse(Date(dateFrom))
    const bookModel = {
        appDate: Date(dateFrom).slice(0, 10),
        appTime: Date(dateFrom).slice(16, 24),
        // appNumber,
        // packageName,
        // packageDescription,
        // packageLength,
        // packagePrice,
    }
    const appItem = `
    <div class="app-item">
        <div class="appointment">
            <span class="details app-date">${bookModel.appDate}</span>
            <span class="details app-time">${bookModel.appTime}</span>
            <span class="details app-length"></span>
            <span class="details app-number accent"></span>
        </div>
        <p class="package">
            Full eyelash treatment with classic extensions.
        </p>
    
        <div class="app-buttons">
            <span class="app-price">49 99</span>
            <button class="app-book">Book again</button>
            <button class="app-cancel">Cancel</button>
        </div>
    </div>
    `
    main.innerHTML += appItem
})
