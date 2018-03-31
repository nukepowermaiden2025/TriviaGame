var panel = $(".display-all");
var countStartNumber = 30;

// Question for the player
var questions = [{
  question: "What is the capitol city of China?",
  answers: ["Cincinatti", "Cleveland", "Dayton", "Columbus"],
  correctAnswer: "Columbus",
  image: ""
}, {
  question: "What is the longest River in the world?",
  answers: ["Nile", "Amazon", "Ganges", "Niger"],
  correctAnswer: "Amazon",
  image: ""
}, {
  question: "In what country is the largest body of fresh water in the world located?",
  answers: ["China", "Austrailia", "Brasil", "USA"],
  correctAnswer: "USA",
  image: ""
}, {
  question: "Which what is the second largest island nation in the world?",
  answers: ["Indonesia", "Japan", "Madagascar", "Australia"],
  correctAnswer: "Madagascar",
  image: ""
}, {
  question: "The Arctic together with what country, contains 99% of glacial mass in the world?",
  answers: ["USA", "Canada", "Greenland", "Norway"],
  correctAnswer: "Greenland",
  image: ""
}];

var timer;//variable will control the set interval method

var trivia = {

    //Put out the initals variable for the game

    questions: questions,
    currentQuestion: 0,
    counter: countStartNumber,
    correct: 0,
    incorrect: 0,

    //Reset
    reset: function() {
        this.currentQuestion = 0;
        this.counter = countStartNumber;
        this.correct = 0;
        this.incorrect = 0;
        this.loadQuestion();
    },

    //Count down the time 
    countdown: function(){
        trivia.counter--;
        $("#display-time").text(trivia.counter);
        if(trivia.counter ===0){
            console.log("Your Time ran out")
            clearInterval(timer);

        //reset counter
        $("#display-time").html(trivia.counter);
        // and if the time is up show the answer
        panel.html("<h2>Out of Time!</h2>");
        panel.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer);
        panel.append("<img src='" + questions[this.currentQuestion].image + "' />");

        if (trivia.currentQuestion === questions.length - 1) {
        setTimeout(trivia.results, 3 * 1000);
        }
        else {
        setTimeout(trivia.nextQuestion, 3 * 1000);
        }
            }
    },
    //Show the results
    
    

}