







// window.onload = function(){
//     $(".start").on("click",stopwatch.start);
    
    
    

// };

//Global Variables
var riAns = 0;
var wrAns = 0;
var timer;
var interval;
var clockRunning = false;
var $display = $(".display-all");


console.log(riAns,wrAns,timer)

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
    }
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
    ques:"What is the thing",
    ansArray: [ 
            "dog",
            "cat",
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

console.log(QnAobj.Questions[0].ques);
console.log(QnAobj.Questions[1].ques);


////////Set the selectors/////////////////////////////////////////



    //Right/wrong answer div generation//REFACTOR TO TWO argument function here**
function rightWrong(){
    let $rightAnsS = $("<p>").html("You guessed "+ riAns + " right." );
    let $wrongAnsS = $("<p>").html("You guessed "+ wrAns + " wrong." );
    $display.append($rightAnsS);
    $display.append($wrongAnsS);

    console.log($rightAnsS);
    console.log($wrongAnsS);

};

// rightWrong();


//Timer
//??????????????????????????

//Question with Answer Choices REFACTOR to take two arguments
function questionDisplay($arr){

    let $quesDisS = $("<p>").html(QnAobj.Questions[1].ques);
    $display.append($quesDisS);
    console.log($quesDisS);//Expected

    for (i in $arr ){
        let ansArrItem = $("<p>").html($arr[i]);
        ansArrItem.addClass("center");
        $(".display-all").append(ansArrItem);  
    };
}

// questionDisplay(QnAobj.Questions[1].ansArray);


function correctAnswerDisplay(){
    let $corAnsS = $('<p>').html(QnAobj.Questions[1].corAns);
    $display.append($corAnsS);
}
// correctAnswerDisplay();


function imageDisplay(){
    let $imgCorAns = $('<img>');
    $imgCorAns.attr("src", QnAobj.Questions[1].imgSrc);
    $imgCorAns.attr("width", 250);
    $display.append($imgCorAns);

    
}
// imageDisplay();





function trivia() {
//Construct game Logic

//Step 1
    //Player presses Button
    $(".start").on("click", function(){
        console.log("startworks")

    })
    //Pause 2 seconds
    //Question from pbject is displayed
    //Clock Starts

//Step 2
     //If player clicks on right answer
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

//Display the oject . question 
//Display the object . answer array
//Count Down Timer

//If player guesses correctly
    //Call Timer Reset
    //Increment Right
//Else player guess wrong
    //Call Timer Reset
    //Increment Wrong Answer


}

trivia()


   