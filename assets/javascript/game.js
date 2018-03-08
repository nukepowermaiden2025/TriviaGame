//author Kourtney Reynolds
//The thoery behind what I want to accomplish is
    //Create puzzle pieces in the form of
        //variables
        //Objects
        //functions
    //Put reusable puzzle pieces



//Global Variables
var riAns = 0;
var wrAns = 0;
var timer;
var interval;
var clockRunning = false;
var $display = $(".display-all");

////////Create Stop Watch Object/////////////////////////////////////////

var stopwatch = {

time: 30,

reset: function(){
    //set the stop watch variable to starting time and starting interval
    stopwatch.time = 30;
    // stopwatch.lap = 1;
    //I need to reset the timer to 30 seconds on the page
    $(".display-time").text("30");
},

//Starting the timer on the clock
    //if the clock is not running start it
start: function(){
    if(!clockRunning){
        interval = setInterval(stopwatch.count,1000);//Count is going to tell the clock to count down
        clockRunning = true;
       
            // var interval = setInterval(function(){
            //     time -= 1;
            //     if(time === 0){
            //         clearInterval(interval);
            //     }
            //     //do whatever here..
            // }, 2000); 
                    
            //     }
    // if(stopwatch.time===0){
    //     stopwatch.stop();
    // }
},
stop: function(){
    clearInterval(interval);//Stop the clock by clearing the setinterval
    clockRunning = false;
},

count: function(){
    stopwatch.time--;
    $(".display-time").text(stopwatch.time);
},

};

////////Create Question Object/////////////////////////////////////////

//Make a question object
    //key1 = question
    //key2 = answer options
    //key3 = correct answer
    //key4 = image

var QnAobj={

Questions:[

    {
    ques:"What is the thing?",
    ansArray: [ 
            "dog",
            "girl",
            "mouse",
            "Squirel",
            ],

    corAns: "dog",

    imgSrc: "./assets/images/test.jpg",

    },
    {
    ques:"Where are you?",
    ansArray: [ 
            "beach",
            "lake",
            "party",
            "outpost",
            ],

    corAns: "outpost",

    imgSrc: "./assets/images/globe.jpg"
    }

]};

////////Set the selectors/////////////////////////////////////////

//Right/wrong answer div generation//REFACTOR TO TWO argument function here**
function rightWrong(){
    let $rightAnsS = $("<p>").html("You guessed "+ riAns + " right." );
    let $wrongAnsS = $("<p>").html("You guessed "+ wrAns + " wrong." );
    $display.append($rightAnsS);
    $display.append($wrongAnsS);
};

//Question with Answer Choices REFACTOR to take two arguments
//An attempt at adding a promise to slow down my div so the classes add before click executes
var questionDisplay = function($arr)

{   $display.append($("<p>").html(QnAobj.Questions[1].ques));

    var promise = new Promise(function(resolve,reject)
    {
        setTimeout(function()
        {
            for (i in $arr )
            {
                let ansArrItem = $("<p>").html($arr[i]);
            
                resolve({ 
                    answerclass: ansArrItem.addClass("center choice"),
                    display:$(".display-all").append(ansArrItem)
                });//Resolve the display of the array items
                console.log("made it thru the promise");
            }; 
        }, 500);//Slowdown everything with a timeout function so that all the items in the list resolve
        return promise;
       
    });    
    
};

function correctAnswerDisplay(){
    let $corAnsS = $('<p>').html(QnAobj.Questions[1].corAns);
    $display.append($corAnsS);
};

function imageDisplay(){
    let $imgCorAns = $('<img>');
    $imgCorAns.attr("src", QnAobj.Questions[1].imgSrc);
    $imgCorAns.attr("width", 250);
    $display.append($imgCorAns);
};

$(document).ready(function()
{
   // executes when HTML-Document is loaded and DOM is ready
//    alert("(document).ready was called - document is ready!");


function trivia() {   
//Step 1
    //Player presses Button to get first question 
    //Display the oject . question 
    //Display the object . answer array
    //Count Down Timer
    $(".start").on("click", function()
    {
        stopwatch.reset();
    
        $.when(questionDisplay(QnAobj.Questions[1].ansArray)).then(function(){
            console.log("this should be the last message")
            
            setTimeout( function()//Test is to use the set time out to slow down the call back function for click handler
                                    //so that divs can generate before action is taken on them.
            {
                $(".choice").on("click",$(this),function()
                {
                    console.log("I clicked this");
                });

            }, 2000);

          
        })
        stopwatch.start(); 
        $(this).hide();        
        
    });//Works

    console.log(" IT ALL works till here");

//Step 2
//One Idea is to change my 
    //If player clicks on right answer
    // if( stopwatch.time > 0){
            //Then the clicked value returns 
    
  
        //A choice is made, stop the clock

            //If player guesses correctly
            //Call Timer Reset
            //Increment Right
        // if($(this).text() = QnAobj.Questions[1].corAns){
        // riAns++;
        // imageDisplay();
        // stopwatch.stop();
        // stopwatch.reset();
        // }
        //     //Else player guess wrong
        //         //Call Timer Reset
        //     //Increment Wrong Answer
        // else{
        // wrAns++;
        // stopwatch.stop();
        // stopwatch.reset();
        
    
            
        // };
        
/////////////////////NOTES//////////////////////

        //Display the "that's correct" message
        //pause half second
        //Display question object image
        //wrAns ++
        //pause 2 seconds
    //If player clicks on wrong answer
        //Display the "That's wrong. The correct answer + object.correct answer
        //pause 2 seconds
//Step 3
    //Remove the question from the screen
    //Add the next question


//Functions
    //Randomly chooses questions
    //Process player guess
    //Process questions asked
    //Resets Timer
    //Reset Game

//Set the timeer & display first Question



}

trivia()


});