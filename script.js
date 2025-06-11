document.addEventListener('DOMContentLoaded', function() {
    // Existing Quiz functionality
    const quiz = {
        question: "What is Nepal's main challenge in addressing climate change?",
        answers: ["Sea-level rise", "Melting glaciers"],
        correct: 1
    };

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

    // Existing Guestbook functionality
    const guestbookForm = document.getElementById('guestbook-form');
    const guestbookEntries = document.getElementById('guestbook-entries');
    const confirmationMessage = document.createElement('p');
    confirmationMessage.id = 'confirmation-message';
    confirmationMessage.style.fontWeight = 'bold';
    confirmationMessage.style.color = 'green';
    confirmationMessage.style.textAlign = 'center';
    confirmationMessage.style.marginTop = '1rem';
    guestbookForm.parentNode.insertBefore(confirmationMessage, guestbookEntries);

    guestbookForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message) {
            confirmationMessage.textContent = "✅ Thank you for contacting us. We will reach back to you soon.";
            guestbookForm.reset();
        }
    });

    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightbox = document.querySelector('.lightbox .close');
    const mapImages = document.querySelectorAll('.map-gallery img');

    mapImages.forEach(img => {
        img.addEventListener('click', function() {
            lightbox.style.display = 'block';
            lightboxImg.src = this.src;
            lightboxImg.alt = this.alt;
        });
    });

    closeLightbox.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
