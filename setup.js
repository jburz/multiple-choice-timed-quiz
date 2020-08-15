timerMinutes = Math.floor((totalSeconds - secondsElapsed) / 60);
timerSeconds = (totalSeconds - secondsElapsed) % 60;
hiScoreDisplay = document.querySelector("#hi-score");

displayTimer(timerMinutes, timerSeconds);

if (localStorage.getItem("hiScoreInitials") == null) {
    hiScoreDisplay.textContent = "No high score stored!";
} else {
    console.log("Current High Score");
    console.log("Initials: " + localStorage.getItem("hiScoreInitials"));
    console.log("Score: " + localStorage.getItem("hiScore"));
}
timerButton.addEventListener("click", startTimer);