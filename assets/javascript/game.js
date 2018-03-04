
 
 //Global Variables
 var riAns = 0;
 var wrAns = 0;
 var timer = "00:00";

 console.log(riAns,wrAns,timer)
 


 var QnAobj={
    
    Questions:[

        {
        questionText:"What is the thing",
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
        questionText:"Where are you?",
        ansArray: [ 
                "beach",
                "lake",
                "party",
                "outpost",
                ],

        corAns: "outpost",

        imgSrc: "./assets/javascript/globe.jpg"
        }

    ]
    
};


console.log(QnAobj.Questions[0].questionText);
console.log(QnAobj.Questions[1].questionText);

 function trivia() {
  
//Set the selectors to change
    //Right answer div generation
   let rightAnsS = $("<p>").html("You guessed"+ riAns + "right." );
   console.log(rightAnsS);

    //Wrong answer div generation
   let wrongAnsS = $("<p>").html("You guessed"+ wrAns + "wrong." );
    console.log(wrongAnsS);
    //Timer

//     //Question
//     quesDisS: $("ques-display").html(QnAobj.ques),

//     //Answer Choice
    

//     //Correct Ans
//     corAnsS: $('<div> class="corAns-display"</div>').html(QnAobj.corAns),

//     //Image shows when right answer is selected

//     imgKeyS: $("imgkey-display").html(QnAobj.imgkey),

//     //Append data to page



// //Make a question object
//     //key1 = question
//     //key2 = answer array optionsgit
//     //key3 = correct answer
//     //key4 = image

}



// var connet = $("display-all");



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


   