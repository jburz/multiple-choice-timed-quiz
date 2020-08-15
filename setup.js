timerMinutes = Math.floor((totalSeconds - secondsElapsed) / 60);
timerSeconds = (totalSeconds - secondsElapsed) % 60;
hiScoreDisplay = document.querySelector("#hi-score");

displayTimer(timerMinutes, timerSeconds);
displayHighScore();

timerButton.addEventListener("click", startTimer);
document.getElementById("clear-button").addEventListener("click", clearHighScore);