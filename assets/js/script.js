

let Quizcategory = document.getElementById("quiz-categories");

function runGame(event) {
    let category = event.target.value;

    if (category === "music") {
        shuffledQuestions = musicQuestions.sort(() => Math.random() - 0.5);
        currentQuestionSet = shuffledQuestions;
        playerDifficulty = "music";
        difficultyEasyBtn.innerText = "Loading...";
      } else if (difficulty === "medium") {
        shuffledQuestions = mediumQuestions.sort(() => Math.random() - 0.5);
        currentQuestionSet = shuffledQuestions;
        playerDifficulty = "medium";
        difficultyMediumBtn.innerText = "Loading...";
      } else if (difficulty === "hard") {
        shuffledQuestions = hardQuestions.sort(() => Math.random() - 0.5);
        currentQuestionSet = shuffledQuestions;
        playerDifficulty = "hard";
        difficultyHardBtn.innerText = "Loading...";
      }



function runGame(){

}

function QuestionGameArea(){

}

function CheckcorrectAnswer(){

}

function NextquestionIncrment() {

}
function CorrectAnswer() {

}

function WorngAnswer() {

}

function category(){

 let catoption = document.getElementById("quiz-categories");
    if (catoption.style.display === "none") {
        catoption.style.display = "block";
    } else {
        catoption .style.display = "none";
    }
}

function MusicQuestions() {

}

function MoviesQuestions() {

}

function GeneralKnowlageQuestions() {

}

function Highscore() {

}

function TotalErned() {

}