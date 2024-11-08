let HomeScore = document.getElementById("homeScore")
let GuestScore = document.getElementById("guestScore")

let countHome = 0
let countGuest = 0
function oneHome(){
    countHome += 1
    HomeScore.textContent = countHome
}

function twoHome(){
    countHome += 2
    HomeScore.textContent = countHome
}

function threeHome(){
    countHome += 3
    HomeScore.textContent = countHome
}

function oneGuest(){
    countGuest += 1
    GuestScore.textContent = countGuest
}

function twoGuest(){
    countGuest += 2
    GuestScore.textContent = countGuest
}

function threeGuest(){
    countGuest += 3
    GuestScore.textContent = countGuest
}