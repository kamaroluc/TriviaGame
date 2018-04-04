$(document).ready(function(){
  
    var time = new Date();
    Date.prototype.toShortString = function(){
        var x = this.getSeconds();
      return x + " : 00";
    };
    //stop time when reach 0
    time.countDown = function(){
      var z = this.getSeconds();
      var a = 0;
      if(z == 0){
        return;
      }
      // call and display function
        a = z-1;
      this.setSeconds(a);
      $("#clockdiv").html(time.toShortString());
      setTimeout(function(){time.countDown();}, 1000);
    };
    time.setSeconds(26);
    setTimeout(function(){time.countDown();}, 1000);
   });
 
 // quiz answers, questions, correct answers
 var questions = [
     {
      question: "Mark Zuckerberg was one of the founders of which social networking site?",
      answers: {a: 'Facebook', b: 'Youtube', c: 'Google', d: 'Twitter'},
      correct: 'a'
    },

     {
     question: "What is the only bird known to fly backwards?",
     answers : {a: 'chicken', b: 'pork', c: 'duck', d: 'Hummingbirds'},
     correct:'d'
    },
    {
     question: "Which sea creature has three hearts?",
     answers:{a: 'octupus', b: 'angler',c: 'pelican eel', d: 'isopod'},
     correct: 'a'
    },
     
     {
     question: "How many pedals do most modern pianos have?",
     answers: {a: 'four', b: 'two', c: 'one', d: 'three'},
     correct: 'd'
    },

     {question:"What is one quarter of 1,000?",
     answers:{a: '342', b: '400', c: '50', d: '250'},
     correct: 'd'
    },

      {question: "who's smarter?",
      answers:{a: 'me', b: 'you', c: 'them', d: 'neither'},
      correct: 'b'
    
      },
    ]

   
     // display the qusetions 
 for (var i=0; i < questions.length; i++){
  $("#quiz").append(questions[i].question+"<br>")

// display the answers with radio button
}
$("#quiz").append('<input type = "radio" name = "' + i + '" id = "'+ i + 'a" value =  " ' + questions [i].answers.a +'" >' + questions [i].answers.a + '<br>');

$("#quiz").append('<input type = "radio" name = "' + i + '" id = "'+ i + 'b" value =  " ' + questions [i].answers.b +'" >' + questions [i].answers.b + '<br>');
    
$("#quiz").append('<input type = "radio" name = "' + i + '" id = "'+ i + 'c" value =  " ' + questions [i].answers.c +'" >' + questions [i].answers.c + '<br>');
    
$("#quiz").append('<input type = "radio" name = "' + i + '" id = "'+ i + 'd" value =  " ' + questions [i].answers.d +'" >' + questions [i].answers.d + '<br> <br>');


function showResults(questions, quizContainer, resultsContainer){
	
	// gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = [ ] ;
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}

    
    
