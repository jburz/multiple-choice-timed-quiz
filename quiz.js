const questionElem = document.getElementById("question");
const answersElem = document.getElementById("answers");
let score = 0;
let buttonAnswer = [];
let hiScore = localStorage.getItem("hiScore");
let hiScoreInitials;


let quizQuestions = [
    {
        q: "Which of the following statements will show a message as well as ask for user input in a popup?",
        a: { 1: "alert()", 2: "prompt()", 3: "confirm()", 4: "message()" }, c: "prompt()"
    },
    {
        q: "What is the correct JavaScript syntax to print “Hello World!” in the console?",
        a: { 1: "print(\"Hello World!\")", 2: "console.print(\"Hello World!\")", 3: "console.log(\"Hello World!\")", 4: "log.console(\"Hello World!\")" }, c: "console.log(\"Hello World!\")"
    },
    {
        q: "JavaScript goes inside which element in HTML?",
        a: { 1: "<p>", 2: "<body>", 3: "<javascript>", 4: "<script>" }, c: "<script>"
    },
    {
        q: "How do you declare a function in JavaScript?",
        a: { 1: "function firstFunction()", 2: "function firstFunction", 3: "var function = firstFunction()", 4: "function firstFunction{}" }, c: "function firstFunction()"
    },
    {
        q: "How do you declare a variable in JavaScript that isn't going to change?",
        a: { 1: "const", 2: "keep", 3: "let", 4: "var" }, c: "const"
    }
];

//function to run quiz questions
function runQuiz() {

    //create question element and content
    let pTagQuestion = document.createElement("p");
    pTagQuestion.textContent = quizQuestions[0].q;
    questionElem.appendChild(pTagQuestion);

    //array to create 4 button elements
    let questionIndex = 0;

    //create a button element for each of the 4 answers
    for (let i = 0; i < 4; i++) {
        buttonAnswer[i] = document.createElement("button");
        buttonAnswer[i].setAttribute("id", "answer-button" + i);
        buttonAnswer[i].setAttribute("class", "btn btn-info text-center");
        buttonAnswer[i].textContent = quizQuestions[questionIndex].a[i + 1];
        console.log(buttonAnswer[i].textContent);
        answersElem.append(buttonAnswer[i]);
    };

    //Click listener to wait for an answer button click
    answersElem.addEventListener("click", function (event) {
        questionIndex++;

        //Check for correct answer
        if (event.target.textContent == quizQuestions[questionIndex - 1].c) {
            alert("Correct");
            score++;
        } else {
            alert("Wrong");
        }

        console.log("Answer selected: " + event.target.textContent);
        console.log("Correct answer: " + quizQuestions[questionIndex - 1].c);
        console.log("Score: " + score);
        //Check if game over    
        if (questionIndex < quizQuestions.length) {
            updateQuestion(questionIndex);
        } else {
            disableButtons();

            //Stop timer
            clearInterval(interval);

            //output score and percent correct
            alert("Game over, thanks for playing!  Your total score was " + score + "/" + quizQuestions.length + " correct, or " + score / quizQuestions.length * 100 + "%!");
            // console.log(score);
            // console.log(hiScore);
            if (score > hiScore) {
                hiScore = score;
                hiScoreInitials = prompt("You got a new high score! Please enter your initials to record your record.");
                localStorage.setItem("hiScoreInitials", hiScoreInitials);
                localStorage.setItem("hiScore", hiScore);
                displayHighScore();
            } else {
                alert("You didn't quite get a new high score....better luck next time!");
            }
        }
    });

    //update question and answer elements with new values
    function updateQuestion(index) {
        pTagQuestion.textContent = quizQuestions[index].q;
        for (let i = 0; i < 4; i++) {
            buttonAnswer[i].textContent = quizQuestions[index].a[i + 1];
        }
    }

}
//Disable answer buttons
function disableButtons() {
    //Disable answer buttons
    for (let i = 0; i < 4; i++) {
        buttonAnswer[i].disabled = true;
    }

}

function displayHighScore() {
    if (localStorage.getItem("hiScoreInitials") == null) {
        hiScoreDisplay.textContent = "No high score set!";
    } else {
        hiScoreDisplay.textContent = ("Current High Score: " + localStorage.getItem("hiScore") + "/" + quizQuestions.length + " by " + localStorage.getItem("hiScoreInitials"));
    }
}

function clearHighScore() {
    localStorage.removeItem("hiScoreInitials");
    localStorage.removeItem("hiScore");
    displayHighScore();
}




