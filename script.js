const quizData = [
    {
        question: 'When was World War 2?',
        a: '1972-1975',
        b: '1914-1918',
        c: '1918-1922',
        d: '1939-1945',
        correct: 'd'
    },
    {
        question: 'What is the most commonly used programming language?',
        a: 'JavaScript',
        b: 'PHP',
        c: 'C#',
        d: 'Java',
        correct: 'a'
    },
    {
        question: 'How many bits does a byte have?',
        a: '8',
        b: '4',
        c: '2',
        d: '16',
        correct: 'a'
    },
    {
        question: 'What year was I born?',
        a: '1996',
        b: '1995',
        c: '1992',
        d: '1997',
        correct: 'd'
    },
    {
        question: 'What is the capital of USA?',
        a: 'New York',
        b: 'Washington',
        c: 'London',
        d: 'Manchester',
        correct: 'b'
    }
]

const question = document.querySelector('#question')
const answerItems = document.querySelectorAll('.answer')
const a_text = document.querySelector('#a_text')
const b_text = document.querySelector('#b_text')
const c_text = document.querySelector('#c_text')
const d_text = document.querySelector('#d_text')
const submitBtn = document.querySelector('.submit')
const quiz = document.querySelector('.container');

let currentQuestion = 0;
let score = 0;

loadQuestion();

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    question.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerItems.forEach(answer => {
        answer.checked = false;
    })
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const answer = getSelected()
    deselectAnswers()

    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            score++;
        }
        currentQuestion++;

        if (currentQuestion < quizData.length) {
            loadQuestion()
        }
        else {
            quiz.classList.add('results');
            quiz.innerHTML = `<p>Thank you for taking our quiz!</p>
            <p>Your score is: ${score} / ${quizData.length}</p>
            <button onclick="location.reload()" style="border-radius: 1rem; margin-top: 1.5rem;">Reload</button>
            `
        }
    }
})

function getSelected() {
    let answer;

    answerItems.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    })
    return answer;
}