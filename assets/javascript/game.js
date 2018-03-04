 //Global Variables
 var riAns = 0;
 var wrAns = 0;
 var timer;

var trivia = {
   
   
//Set the selectors to change
    //Right answer div generation
    rightS: $("<p>").text("You guessed"+ riAns + "right." ),

    //Wrong answer div generation
    wrongS: $("<p>").text("You guessed"+ wrAns + "wrong." ),

    //Timer

    //Question
    quesDisS:$("ques-display").text($(this).QnAobj.ques),

    //Answer Choice
    

    //Correct Ans
    corAnsS:$("corAns-display").text($(this).QnAobj.corAns),

    //Image shows when right answer is selected

    imgKeyS:$("imgkey-display").html($(this).QnAobj.imgkey),

    //Append data to page



//Make a question object
    //key1 = question
    //key2 = answer array optionsgit
    //key3 = correct answer
    //key4 = image

    QnAobj:[{
        ques:"First RandomWord Question 1",
        ansArr:["ans1", "ans2", "ans3", "ans4"],
        corAns:"ans1",
        imgkey:"<img src='./assets/images/test.jpg' />"
        }
    ]
    









}



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





   