const quiz = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: 2
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Shakespeare", "Dante", "Tolstoy", "Homer"],
    answer: 0
  },
  {
    question: "What is 5 + 7?",
    options: ["10", "12", "13", "14"],
    answer: 1
  }
];

let currentQuestion = 0;
let userAnswers = [];

function loadQuestion(index) {
  const q = quiz[index];
  $("#question").text(Q$ (index + 1)-$(q.question));
  $("#options").empty();
  q.options.forEach((opt, i) => {
    const selected = userAnswers[index] === i ? "selected" : "";
    $("#options").append(`
      <div class="option ${selected}" data-index="${i}">${opt}</div>
    `);
  });

  $("#prev").toggle(index > 0);
  $("#next").toggle(index < quiz.length - 1);
  $("#submit").toggle(index === quiz.length - 1);
}

$(document).ready(function () {
  loadQuestion(currentQuestion);

  $(document).on("click", ".option", function () {
    $(".option").removeClass("selected");
    $(this).addClass("selected");
    const selectedIdx = parseInt($(this).data("index"));
    userAnswers[currentQuestion] = selectedIdx;
  });

  $("#next").click(function () {
    if (userAnswers[currentQuestion] == null) {
      alert("Please select an option first.");
      return;
    }
    currentQuestion++;
    loadQuestion(currentQuestion);
  });

  $("#prev").click(function () {
    currentQuestion--;
    loadQuestion(currentQuestion);
  });

  $("#submit").click(function () {
    if (userAnswers[currentQuestion] == null) {
      alert("Please select an option.");
      return;
    }
    let score = 0;
    quiz.forEach((q, i) => {
      if (q.answer === userAnswers[i]) score++;
    });
    $("#quiz-container").hide();
    $("#score").text(score);
    $("#total").text(quiz.length);
    $("#result-container").removeClass("d-none");
  });
});