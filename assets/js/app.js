(function () {
  var questions = [{
    question: "When was america first discovered?",
    choices: [1482, 1492, 1800, 1340, 1672],
    correctAnswer: 1
  }, {
    question: "Which year did California become a state?",
    choices: [1846, 1853, 1851, 1800, 1850],
    correctAnswer: 4
  }, {
    question: "In which year was america recognized as country?",
    choices: [1877, 1677, 1900, 1777, 1767],
    correctAnswer: 3
  }, {
    question: "Independance Day was first established as a holiday by Congress in what year?",
    choices: [1670, 1870, 1820, 1830, 1840],
    correctAnswer: 1
  }, {
    question: "Which date was the declaration of independence signed on?",
    choices: [1775, 1766, 1776, 1778, 1876],
    correctAnswer: 2
  }];


  // Create global variables

  //Tracks question number
  var questionCounter = 0;
  //Array containing user choices
  var selections = [];
  //Quiz div object
  var quiz = $('#trivia'); 

  // Display the start button
  $('#start').show();

 
 //Click handler for the 'Start Game' button
    $('#start').on('click', function (e) {
      e.preventDefault();
      
      questionCounter = 0;
      selections = [];
      loadQuestions();
      $('#start').hide();
    });


  // Creates and returns the div that contains the questions and 
  // the answer selections

  function createQuestion(index) {
    var qElement = $('<div>', {
      id: 'question'
    });

    var question = $('<p>').append(questions[index].question);
    qElement.append(question);

    return qElement;
  }


  // Creates a list of the answer choices as radio inputs


  // Reads the user selection and pushes the value to an array


  // Displays next requested element
  function loadQuestions() {
    quiz.fadeOut(function () {
      for (var i=0; i < questions.length; i++) {    
        questionCounter = i;
        var nextQuestion = createQuestion(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value=' + selections[questionCounter] + ']').prop('checked', true);
        } 
       }
    });
  }


  // Computes score and returns a paragraph element to be displayed


})();