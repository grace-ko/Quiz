var quiz = [
    { question:'Which one of the following chemicals is safe to use in cooking?',
     answers: ['Acetic acid','Hydrofluoric acid','hydrochloric acid','Sulfuric acid'],
     correctAnswer: 0
    },
    { question:'Which one of the following is referring to drinking alcohol?',
     answers: ['Methanol','Propanol','Ethanol','Butanol'],
     correctAnswer: 2
    },
    { question:'Which one of the following means Vitamin C?',
     answers: ['Retinol','Niacin','Thiamine','Ascorbic acid'],
     correctAnswer: 3
    },
    { question:'Which one of the following is the chemical name for bleach?',
     answers: ['Sodium chloride','Sodium bicarbonate','Sodium hypochlorite','Ferric oxide'],
     correctAnswer: 2
    },
    { question:'What is the common name for sucrose?',
     answers: ['Sugar','Salt','Pepper','MSG'],
     correctAnswer: 0
    }
];


var correctAnswerCount=0;
var questionList=0;

$(document).ready(function() {
 	$("#intro-music").get(0).play();
    $('.questionMain').hide();
    $('.result').hide();
    $('.congrats').hide();
    $('.finalAnswer').hide();
    $('.restart').hide();

    $('.start').click(function() {
        $(this).remove();
        $('.questionMain').show();
        $('.result').show();
        runQuiz();
    });

    /* Submit Answer */
    $('.answerForm').submit(function(event){
        event.preventDefault();
        finalAnswer=quiz[questionList].answers[quiz[questionList].correctAnswer];
        finalAnswerValue=parseInt(($('input[name="answer"]:checked').val()));

        if (finalAnswerValue===quiz[questionList].correctAnswer) {
            correctAnswerCount++;
            $('.score').html("Score:"+" "+correctAnswerCount+" "+'of'+ " "+quiz.length);
            
        }else{
            
            $('.answerList').append(quiz[questionList].question+'<br>'+finalAnswer+'<br>'+'<br>');
            alert("Sorry, incorrect!");
            $('.score').html("Score:"+" "+correctAnswerCount+" "+'of'+ " "+quiz.length);
        }
            
        $('.restart').click(function(){
            location.reload();
        });
        questionList++;
        runQuiz();

	});
});

/* Start Quiz */
var runQuiz=function(){
    /* Clear question */
    $('.answer').html('');
    /* Show result page*/

    if (questionList===quiz.length && correctAnswerCount===quiz.length){
	    $('.questionMain').hide();
	    $('.congrats').show();
	    $('.restart').show();

    }else if(questionList===quiz.length){

	    $('.questionMain').hide();
	    $('.finalAnswer').show();
	    $('.restart').show();

    }else{
        for (var i=0; i<quiz[questionList].answers.length; i++) {
            /* Add question */
            $('.question').text(quiz[questionList].question);
            /* Add answer choice */
            $('.answer').append(
                '<li><input type="radio" name="answer" id="' + i + '" value="' + i + '"/>'+ 
                '<label for="' + i + '">' + 
                quiz[questionList].answers[i] +'</label></li>');
        }
    }
}    
