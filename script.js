document.addEventListener('DOMContentLoaded', function() {
    // Quiz Data
    const quiz = {
        question: "What is Nepal's main challenge in addressing climate change?",
        answers: ["Sea-level rise", "Melting glaciers"],
        correct: 1
    };

    // Quiz functionality
    const questionElement = document.getElementById('question');
    const answer1Button = document.getElementById('answer1');
    const answer2Button = document.getElementById('answer2');
    const resultElement = document.getElementById('result');

    questionElement.textContent = quiz.question;
    answer1Button.textContent = quiz.answers[0];
    answer2Button.textContent = quiz.answers[1];

    answer1Button.addEventListener('click', function() {
        checkAnswer(0);
    });
    answer2Button.addEventListener('click', function() {
        checkAnswer(1);
    });

    function checkAnswer(selected) {
        if (selected === quiz.correct) {
            resultElement.textContent = "✅ Correct! Nepal's glaciers are melting.";
            resultElement.style.color = "green";
        } else {
            resultElement.textContent = "❌ Incorrect. Try again!";
            resultElement.style.color = "red";
        }
    }

    // Guestbook functionality
    const guestbookForm = document.getElementById('guestbook-form');
    const guestbookEntries = document.getElementById('guestbook-entries');

    guestbookForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message) {
            const entry = document.createElement('p');
            entry.innerHTML = `<strong>${name} (${email}):</strong> ${message}`;
            guestbookEntries.appendChild(entry);
            guestbookForm.reset();
        }
    });
});
