document.getElementById('guestbook-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && message) {
        const entry = document.createElement('p');
        entry.innerHTML = `<strong>${name}:</strong> ${message}`;
        document.getElementById('guestbook-entries').appendChild(entry);

        document.getElementById('name').value = '';
        document.getElementById('message').value = '';
    }
});

const quiz = {
    question: "What is Nepal's main challenge in addressing climate change?",
    answers: ["Sea-level rise", "Melting glaciers"],
    correct: 1
};

document.getElementById('question').textContent = quiz.question;
document.getElementById('answer1').textContent = quiz.answers[0];
document.getElementById('answer2').textContent = quiz.answers[1];

document.getElementById('answer1').addEventListener('click', function() {
    checkAnswer(0);
});
document.getElementById('answer2').addEventListener('click', function() {
    checkAnswer(1);
});

function checkAnswer(selected) {
    if(selected === quiz.correct) {
        document.getElementById('result').textContent = "✅ Correct! Nepal's glaciers are melting.";
    } else {
        document.getElementById('result').textContent = "❌ Incorrect. Try again!";
    }
}
