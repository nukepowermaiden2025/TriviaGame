





function trivia() {
    window.onload = function(){
        $(".start").on("click",stopwatch.start);
        
        
        
    
    };
    
 //Global Variables
 var riAns = 0;
 var wrAns = 0;
 var timer;
 var interval;
 var clockRunning = false;
 var $display = $(".display-all");
    

 console.log(riAns,wrAns,timer)

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

 console.log(stopwatch.start());
 console.log(stopwatch.reset());//Displaying clock here
 
    //Make a question object
        //key1 = question
        //key2 = answer array optionsgit
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

        imgSrc: "./assets/javascript/test.jpg"
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

        imgSrc: "./assets/javascript/globe.jpg"
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
    
    rightWrong();
    

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

    questionDisplay(QnAobj.Questions[1].ansArray);
    

    function correctAnswerDisplay(){
        let $corAnsS = $('<p>').html(QnAobj.Questions[1].corAns);
        $display.append($corAnsS);
    }
    correctAnswerDisplay();
  

//     //Image shows when right answer is selected

//     imgKeyS: $("imgkey-display").html(QnAobj.imgkey),

//     //Append data to page

}

trivia()



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


// })


   