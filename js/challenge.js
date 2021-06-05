const timer = document.getElementById('counter')
const pause = document.getElementById('pause')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const heart = document.getElementById('heart')
let count = 0
let intervalID 
let likedNumber


document.addEventListener("DOMContentLoaded", function() {
    intervalID = setInterval(function () {
        count += 1 
        timer.innerText = count
    }, 1000)
    pause.addEventListener("click", function () {
        clearInterval(intervalID)
        //you could probobly use some form of if statment here like 
        //if button says payse clearintervbal if rasueme code the counter 
        pause.innerText = "resume"
        pause.addEventListener("click", function () {
            intervalID = setInterval(function () {
                count += 1 
                timer.innerText = count
                pause.innerText = "pause"
            }, 1000)
        })
    })
    minus.addEventListener("click", function () {
        timer.innerText = parseInt(timer.innerText) - 1
    })
    plus.addEventListener("click", function () {
        timer.innerText = parseInt(timer.innerText) + 1
    })
})

heart.addEventListener("click", function () {
    likedNumber = timer.innerText
})

