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
