var panel = $(".question");
var answerStyle = "btn btn-dark btn-lg btn-block choice";
var questionStyle = "text-center h3 ";
// Question for the player
var questions = [{
  question: "What is the capitol city of China?",
  answers: ["Shanghai",
             "Hong Kong",
            "Wuhan",
            "Beijing"],
  correctAnswer: "Beijing",
  image: "https://media3.giphy.com/media/3o6nUQlg4TSA9Hi7ss/200w.webp"
}, {
  question: "What is the longest River in the world?",
  answers: ["Nile", 
            "Amazon", 
            "Ganges", 
            "Niger"],
  correctAnswer: "Amazon",
  image: "https://media.giphy.com/media/rMh05ah48wiXK/giphy.gif"
}, {
  question: "In what country is the largest body of fresh water in the world located?",
  answers: ["China", 
            "Austrailia", 
            "Brasil", 
            "USA"],
  correctAnswer: "USA",
  image: "https://media.giphy.com/media/65kQC6Mg4XIsw/giphy.gif"
}, {
  question: "Which is the second largest island nation in the world?",
  answers: ["Indonesia", 
            "Japan", 
            "Madagascar", 
            "Australia"],
  correctAnswer: "Madagascar",
  image: "https://media.giphy.com/media/9CVe5MXsWff9K/giphy.gif"
}, {
  question: "The Arctic together with what country, contains 99% of glacial mass in the world?",
  answers: ["USA",
            "Canada",
            "Greenland",
            "Norway"],
  correctAnswer: "Greenland",
  image: "https://media.giphy.com/media/vBNAzpiskHO3m/giphy.gif"
}];


var trivia = {

    //Put out the initals variable for the game

    questions: questions,
    currentQuestionIndex: 0,
    counter: 30,
    correct: 0,
    incorrect: 0,

    //Reset
    reset: function() {
        this.currentQuestionIndex = 0;
        this.counter = 30;
        this.correct = 0;
        this.incorrect = 0;
        this.loadQuestion();
    },
    
    //Load a question on the page
    loadQuestion: function(){
      $("#waiting").hide();
      $("#start").hide();
      $("<div>").addClass(questionStyle)
                .text(questions[this.currentQuestionIndex].question)
                .appendTo(panel);

      for(let i=0; i<questions[this.currentQuestionIndex].answers.length; i++){
      $("<button>").addClass(answerStyle)
                  .text(questions[this.currentQuestionIndex].answers[i])
                  .appendTo(panel);
      }
    },
    // Load next question after timer runs out or 3 seconds after the correct answer is displayed
    loadNextQuestion:function(){

    },

    showCorrectAnswer:function(){
      
    },

    //Count down the time 
    countdown: function(){
      
    },
    start: function(){
     let interval = setInterval(function(){
          trivia.counter--;
          $(".counter").text(trivia.counter);
          console.log(trivia.counter);
        },1000);

        console.log(interval);
        //Delegate the click handler for elements that dynamically generate
        $(".question").on("click",".choice", function(){
            clearInterval(interval);
            
            console.log($(this).text());
          });
      

      // $("choice").on("click", function(){
      //   this.clearInterval(interval).apply(trivia);
      //   console.log(this)
      // })
    },
    //Show the results
    showResults: function(){

    },

    gamestart:function(){
      this.start();
      this.loadQuestion();
      console.log("Gamestart this is : " + JSON.stringify(this));
    }
    
}

//Start the game on click of button
$(document).ready(function(){
  $("#start").on("click",function(event){
    trivia.gamestart();
    console.log("The context is this:" + this);
  })
})

//Stop the Timer on click of answer