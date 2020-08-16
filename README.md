# multiple-choice-timed-quiz

* This is a multiple choice game quiz I created to highlight the use of a timer and local storage.  The quiz is basic JavaScript questions.  On startup, you will be able to start the quiz or clear the high score.  The high score is set to local storage and will display if there is a high score set in local storage or will notify you if there is no high score set.

* One you hit the button to start the quiz the button will be disabled.  Read each question and select the answer that is correct.  You will be notified if you are right or wrong.  After you have finished answering the questions, your final score will be shown.  If your high score is greater than the current high score, you will be prompted to enter your intials.  Your high score and initials will then be stored in local storage and displayed on the screen.

* The timer is set at 1 minute and 30 seconds to start.  Every question you get wrong will reduce the time by 10 seconds.  If the timer reaches zero before you answer all of the questions, the game will end.  You can still log a high score in this case, however.  

* Any time the game ends, either by answering all of the questions or the timer running out, the answer buttons will be disabled.

* There is also a button to clear the local storage of the current high score that you can click at any time.
 
 Link to the [quiz](https://jburz.github.io/multiple-choice-timed-quiz)

 ![quiz screenshot](./assets/quiz1.png)
 
 ## Credits

 This entire application was created by [Jake Burzlaff](https://www.github.io/jburz).

 ## Future Updates

 1. Enable localstorage to hold the top 5 scores.
 2. Add more questions to the quiz
 3. Functionality to have different types of quizzes: coding, movies, etc...
 