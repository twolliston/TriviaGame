(function () {
  var questions = [{
    question: "When was america first discovered?",
    choices: [1482, 1492, 1800, 1340, 1672],
    answer: 1492
  }, {
    question: "Which year did California become a state?",
    choices: [1846, 1853, 1851, 1800, 1850],
    answer: 1850
  }, {
    question: "In which year was america recognized as country?",
    choices: [1877, 1677, 1900, 1777, 1767],
    answer: 1777
  }, {
    question: "Independance Day was first established as a holiday by Congress in what year?",
    choices: [1670, 1870, 1820, 1830, 1840],
    answer: 1870
  }, {
    question: "Which date was the declaration of independence signed on?",
    choices: [1775, 1766, 1776, 1778, 1876],
    answer: 1776
  }];


  // Create global variables
  //  Interval Demonstration
  var number = 120;
  var intervalId;

  //Tracks question number
  var questionCounter = 0;

  //Tracks correct slections
  var correctCounter = 0;

  //Tracks incorrect selections
  var inCorrectCounter = 5;

  //Quiz div object
  var quiz = $('#trivia');

  // Display the start button
  $('#start').show();

  // Hide the timer
  $('#time-remain').hide();

  // Hide the score
  $('#score').hide();


  //Click handler for the 'Start Game' button
  $('#start').on('click', function (e) {
    e.preventDefault();

    questionCounter = 0;
    selections = [];
    loadQuestions();
    // Hide the start button
    $('#start').hide();
    // Display the timer
    $('#time-remain').show();

    // Run Count Down Timer
    run();

  });

  //Click handler for the 'ReStart Game' button
  $('#re-start').on('click', function (e) {
    e.preventDefault();

    //  Interval Demonstration
    number = 120;
    intervalId;

    //Tracks question number
    questionCounter = 0;

    //Tracks correct slections
    correctCounter = 0;

    //Tracks incorrect selections
    inCorrectCounter = 5;

    //Quiz div object
    quiz = $('#trivia');

    // Hide the timer
    $('#re-start').hide()

    // Hide the timer
    $('#time-remain').hide();

    // Hide the score
    $('#score').hide();

    // Deleting the questions prior to reloading questions
    // (this is necessary otherwise you will have repeat question)
    $("#trivia").empty();

    // Deleting the scorea prior to reloading qquestion
    // (this is necessary otherwise you will have repeat scores)
    $("#score").empty();

    // Display the start button
    $('#start').show();

  });

  // Click handler for the user selection    
  $(document).on("click", ".choice", choose);


  // Start Count Down Timer
  function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  //  The decrement function.
  function decrement() {
    // alert("pop");
    //  Decrease number by one.
    number--;

    //  Show the number in the #show-number tag.
    $("#time-remain").html("<h2>" + 'Time Remaining: ' + number + "</h2>");


    //  Once number hits zero...
    if (number === 0) {

      //  ...run the stop function.
      stop();

      //    Alert the user that time is up.
      // ...Display score function.
      displayScore();


    }
  }

  //  The stop function
  function stop() {
    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
  }

  function displayScore() {
    //...Show score
    $('#score').show();
    // Hide the timer
    $('#time-remain').hide();

    // Display the submit button
    $('#re-start').show();

    var scoreInfo = "";
    scoreInfo = $('<h2>').append('Times up');
    $("#score").append(scoreInfo);

    scoreInfo = $('<h2>').append('Correct Answers: ' + correctCounter);
    $("#score").append(scoreInfo);

    scoreInfo = $('<h2>').append('In-correct Answers: ' + inCorrectCounter);
    $("#score").append(scoreInfo);

  }

  // Creates and returns the div that contains the questions and 
  // the answer selections

  function createQuestion(index) {
    var qElement = $('<div>', {
      id: 'question' + questionCounter
    });

    var question = $('<p>').append(questions[index].question);
    qElement.append(question);

    var radioButtons = createRadios(index);
    qElement.append(radioButtons);

    return qElement;
  }


  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<form>');
    var correctAnswer = questions[index].answer;
    var correctIncorrect;
    var item;
    var optionAnswer;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      var id = "choice" + questionCounter;
      // Capture answer options
      optionAnswer = questions[index].choices[i];
      // Determine if option matches the correct answer
      if (optionAnswer === correctAnswer) {
        correctIncorrect = 1;
      } else {
        correctIncorrect = 0;
      }

      item = $('<div>');
      input = '<input type="radio" class="choice" name=' + id + ' value=' + correctIncorrect + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }


  // Reads the user selection and checks if a correct answer was choosen 
  function choose() {
    var userChoice = $(this).val();
    var userChoiceGroup = this.name;

    // disbale choices after selection is made
    if (userChoiceGroup == 'choice0') {
      $("input[name=choice0]").attr('disabled', true);
    } else if (userChoiceGroup == "choice1") {
      $("input[name=choice1]").attr('disabled', true);
    } else if (userChoiceGroup == 'choice2') {
      $("input[name=choice2]").attr('disabled', true);
    } else if (userChoiceGroup == 'choice3') {
      $("input[name=choice3]").attr('disabled', true);
    } else if (userChoiceGroup == 'choice4') {
      $("input[name=choice4]").attr('disabled', true);
    } else if (userChoiceGroup == 'choice5') {
      $("input[name=choice5]").attr('disabled', true);
    }

    // Increment correct counter and decrement incorrect counter if user guesses correctly
    if (userChoice == 1) {
      correctCounter++;
      inCorrectCounter--;
    } 

  }

  // Displays next requested element
  function loadQuestions() {

    quiz.fadeOut(function () {

      for (var i = 0; i < questions.length; i++) {
        questionCounter = i;
        var nextQuestion = createQuestion(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value=' + selections[questionCounter] + ']').prop('checked', true);
        }
      }

    });
  }


})();