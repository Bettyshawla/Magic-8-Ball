const userInput = document.querySelector("#input");
const askButton = document.querySelector("#button");

// output
const question = document.querySelector("#display-question");
const answer = document.querySelector("#answer");

//error
const errorMsg = document.querySelector("#error")

//event listner
addUserInput = function(){
    console.log("hello")
    question.innerText =  `The Question you asked is: ${userInput.value.toUpperCase()}`;
    
   
     let source = ["./images/magic8ball_1.png", "./images/magic8ball_2.png", "./images/magic8ball_3.png", "./images/magic8ball_4.png", "./images/magic8ball_5.png", "./images/magic8ball_7.png", "./images/magic8ball_8.png", "./images/magic8ball_9.png", "./images/magic8ball_10.png", "./images/magic8ball_11.png", "./images/magic8ball_12.png", "./images/magic8ball_13.png", "./images/magic8ball_14.png", "./images/magic8ball_15.png", "./images/magic8ball_16.png", "./images/magic8ball_17.png", "./images/magic8ball_18.png", "./images/magic8ball_19.png"]


     if(userInput.value === ''){
        errorMsg.style.display = "Block";
       answer.style.display = "none"
       question.style.display = 'none'

      } else if(userInput.value != "" ) {
        answer.src = source[Math.floor(Math.random()*source.length)];
        answer.style.display = "block"
        errorMsg.style.display = "none";
        answer.style.width = '30vw';
        answer.style.height = '60vh';
        question.style.display = "block"
      } 
        userInput.value = ""

       
    }

     

    