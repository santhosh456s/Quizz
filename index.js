let isCurret = function (choice) {
  return this.answer.toString() === choice;
};

let calculateScore = function (choice, timetaken) {
  if (!isCurret.call(this, choice)) return 0;
  return (1 / timetaken) * 1000;
};

let time = 0;

let questions = [
  {
    question: "In Java array are",
    answer: "Object",
    options: [
      "Object Refrence",
      "Object",
      "Primitive data type",
      "none of the above"
    ]
  },
  {
    question:
      "When you pass the array into the method,the method receives _______",
    answer: "Copy of the array",
    options: [
      "refrence of the array",
      "Copy of the array",
      "Length of the array",
      "A copy of the first element"
    ]
  }
];

let currentQuestionIndex = -1;

let handelClick = function (event) {
  let currentQuestion = questions[currentQuestionIndex];

  if (currentQuestion.answered) {
    return;
  }
  currentQuestion.answered = true;
  if (isCurret.call(currentQuestion, event.target.innerHTML)) {
    event.target.className = "correct";
    console.log("right");
  } else {
    event.target.className = "wroung";
    console.log("wroung");
  }

  let currentScore = +document.getElementById("score").innerHTML;
  let score = calculateScore.call(
    currentQuestion,
    event.target.innerHTML,
    time
  );

  currentScore = score;
 // Number('currentScore');
  console.log(currentScore);
  document.getElementById("score").innerHTML = currentScore;
};

function updatequestion() {
  currentQuestionIndex++;
  let { question, answer, options, isCurret, calculateScore } = questions[
    currentQuestionIndex
  ];

  let questionEl = document.getElementById("question");
  questionEl.innerHTML = question;

  let optionEl = document.getElementsByTagName("li");
  for (let i = 0; i < optionEl.length; i++) {
    optionEl[i].innerHTML = options[i];
    optionEl[i].className = " ";
    optionEl[i].addEventListener("click", handelClick);
  }
}

const startGame = function () {
  
  time = 0;
  document.getElementById("time").innerHTML = 10 - time;

  let timerid = setInterval(() => {
    time++;
    if (time === 10) {
      clearInterval(timerid);
    }
    document.getElementById("time").innerHTML = 10 - time;
  }, 1000);

  updatequestion();

  if (questions.length - 1 === currentQuestionIndex) {
    clearInterval(inravalId);
  }
};

let inravalId = setInterval(startGame, 12000);
startGame();
