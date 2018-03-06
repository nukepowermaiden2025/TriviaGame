


window.onload = function(){
    // $(".display-time").text("30:00");
    

};

var stopwatch = {

    time: 0,
    lap: 1,

    reset: function(){
        //set the stop watch variable to starting time and starting interval
        stopwatch.time = 30;
        stopwatch.lap = 1;
        //I need to reset the timer to 30 seconds on the page
        $(".display-time").text("30:00");
    },

   
 };

stopwatch.reset();
function trivia() {
  
 //Global Variables
 var riAns = 0;
 var wrAns = 0;
 var timer;
 var interval;
 var clockRunning = false;





    


 console.log(riAns,wrAns,timer)
 
// //Make a question object
//     //key1 = question
//     //key2 = answer array optionsgit
//     //key3 = correct answer
//     //key4 = image

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
    var $display = $(".display-all");
    

     //Right answer div generation
    let $rightAnsS = $("<p>").html("You guessed "+ riAns + " right." );
    $display.append($rightAnsS);
    console.log($rightAnsS);//Expected

    //Wrong answer div generation
    let $wrongAnsS = $("<p>").html("You guessed "+ wrAns + " wrong." );
    $display.append($wrongAnsS);
    console.log($wrongAnsS);//Expected

    //Timer
    //??????????????????????????

    //Question
    let $quesDisS = $("<p>").html(QnAobj.Questions[1].ques);
    $display.append($quesDisS);
    console.log($quesDisS);//Expected
    

    //Answer Choices
    //????????????????????????????
    function $ansArrS ($arr) {
        for (i in $arr ){
            let ansArrItem = $("<p>").html($arr[i]);
            ansArrItem.addClass("center");
            $(".display-all").append(ansArrItem);  
        }
    };
    
    $ansArrS( QnAobj.Questions[1].ansArray);
    console.log(JSON.stringify($ansArrS()));


    //Correct Ans
    let $corAnsS = $('<p>').html(QnAobj.Questions[1].corAns);
    $display.append($corAnsS);
    console.log(JSON.stringify($corAnsS));
//     //Image shows when right answer is selected

//     imgKeyS: $("imgkey-display").html(QnAobj.imgkey),

//     //Append data to page

}

trivia()



// //Functions
//     //Randomly chooses questions
//     //Process player guess
//     //Process questions asked
//     //Resets Timer
//     //Reset Game

// //Set the timeer & display first Question

// //Display the oject . question 
// //Display the object . answer array
// //Count Down Timer

// //If player guesses correctly
//     //Call Timer Reset
//     //Increment Right
// //Else player guess wrong
//     //Call Timer Reset
//     //Increment Wrong Answer


// })


   