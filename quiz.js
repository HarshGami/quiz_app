const questions = [
  {
    questionText: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    questionText: "Arrays in JavaScript can be used to store ______.",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    questionText:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
  {
    questionText:
      "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    options: ["1. break", "2. stop", "3. halt", "4. exit"],
    answer: "1. break",
  },
];

let score = 0;
let timeleft = 50;
  let timer = setInterval(() => {
    if (timeleft < 0) {
      end();
    }
    else {
      document.getElementById("time").innerHTML = "Time: " + timeleft;
    }
    timeleft -= 1;
  }, 1000);

function run() {
  document.getElementById("heading").innerText = questions[0].questionText;
  document.getElementById("op1").innerText = questions[0].options[0];
  document.getElementById("op2").innerText = questions[0].options[1];
  document.getElementById("op3").innerText = questions[0].options[2];
  document.getElementById("op4").innerText = questions[0].options[3];
}

let i = 0;
function nextq() {
  document.getElementById("heading").innerText = questions[i].questionText;
  document.getElementById("op1").innerText = questions[i].options[0];
  document.getElementById("op2").innerText = questions[i].options[1];
  document.getElementById("op3").innerText = questions[i].options[2];
  document.getElementById("op4").innerText = questions[i].options[3];
}

function end() {
  clearInterval(timer);
  document.getElementById("time").innerHTML = "Time: ";
  document.getElementById("info").style.width = '40vw';
  document.getElementById("heading").innerText = "All Done!";
  document.getElementById("op1").style.display = 'none';
  document.getElementById("op2").style.display = 'none';
  document.getElementById("op3").style.display = 'none';
  document.getElementById("op4").style.display = 'none';
  document.getElementById("name").style.display = 'block';
  document.getElementById("ans").innerText = "Your final score is: " + score;
}

const highsocres = JSON.parse(localStorage.getItem("highscores")) || [];
const maxhighscores = 5; 

let add = () =>{
  let initilas = document.getElementById("initial").value;
  document.getElementById("time").innerHTML = "Time: ";
  let listitem ={
    name: initilas,
    marks: score
  };
  highsocres.push(listitem);
  highsocres.sort((a,b)=> b.marks - a.marks);
  highsocres.splice(5);

  localStorage.setItem("highscores", JSON.stringify(highsocres));
}

function op1() {
  if (document.getElementById("op1").innerText === questions[i].answer) {
    i++;
    score++;
    document.getElementById("ans").innerText = "Correct";
    if (i >= questions.length) {
      end();
    }
    nextq();
  }
  else {
    document.getElementById("ans").innerText = "Incorrect";
    timeleft -= 10;
  }
}

function op2() {
  if (document.getElementById("op2").innerText === questions[i].answer) {
    i++;
    score++;
    document.getElementById("ans").innerText = "Correct";
    if (i >= questions.length) {
      end();
    }
    nextq();
  }
  else {
    document.getElementById("ans").innerText = "Incorrect";
    timeleft -= 10;
  }
}

function op3() {
  if (document.getElementById("op3").innerText === questions[i].answer) {
    i++;
    score++;
    document.getElementById("ans").innerText = "Correct";
    if (i >= questions.length) {
      end();
    }
    nextq();
  }
  else {
    document.getElementById("ans").innerText = "Incorrect";
    timeleft -= 10;
  }
}

function op4() {
  if (document.getElementById("op4").innerText === questions[i].answer) {
    i++;
    score++;
    document.getElementById("ans").innerText = "Correct";
    if (i >= questions.length) {
      end();
    }
    nextq();
  }
  else {
    document.getElementById("ans").innerText = "Incorrect";
    timeleft -= 10;
  }
}
