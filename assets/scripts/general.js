// tip votes

const votes = document.querySelectorAll("[data-votes]")

votes.forEach((btn) => {
    btn.addEventListener("click", incrementVote)
})

function incrementVote(e) {
    let btnClicked = e.target.dataset.votes
    if (btnClicked.length === 0) btnClicked = 0
    btnClicked = parseInt(btnClicked) + 1
    e.target.dataset.votes = btnClicked
}
