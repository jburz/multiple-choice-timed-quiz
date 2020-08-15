//Build timer
//Variable to count down from start
const timer = document.getElementById("timer");
const timerButton = document.getElementById('timer-button');
let totalSeconds = 180;
let timerSeconds = 0;
let secondsElapsed = 0;
let timerMinutes = 0;
let interval;

//This function sets up the timer to the proper time
function displayTimer(min, sec) {
    formatTime(min, sec);
};

//function to format seconds
function formatTime(min, sec) {
    if (timerSeconds < 10) {
        timer.textContent = "Time Remaining: " + min + ":0" + sec;
    }   else {
        timer.textContent = "Time Remaining: " + min + ":" + sec;
    }
}

//function to count timer down
function startTimer() {
    runQuiz();
    timerButton.disabled = true;
    interval = setInterval(function (){
        secondsElapsed++;
        updateTimer();
    }, 1000);
};

//updates the timer every second
function updateTimer() {
    if (timerMinutes === 0 && timerSeconds === 0) {
        disableButtons();
        clearInterval(interval);
        alert("Time is up!");
    } else {
        timerMinutes = Math.floor((totalSeconds - secondsElapsed) / 60);
        timerSeconds = (totalSeconds - secondsElapsed) % 60;
        displayTimer(timerMinutes, timerSeconds);
    }
};

