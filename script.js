// Function to save settings to Local Storage
function saveSettings(view) {
    localStorage.setItem('dataVizView', view);
}

// Function to load settings from Local Storage
function loadSettings() {
    return localStorage.getItem('dataVizView') || 'table';
}

document.getElementById('swapViewButton').addEventListener('click', function() {
    const tableView = document.getElementById('tableView');
    const otherView = document.getElementById('otherView');

    // Determine the current and new view
    const currentView = tableView.style.display === 'none' ? 'other' : 'table';
    const newView = currentView === 'table' ? 'other' : 'table';

    // Update the visibility of the views
    tableView.style.display = newView === 'table' ? 'block' : 'none';
    otherView.style.display = newView === 'table' ? 'none' : 'block';

    // Save the new view setting to Local Storage
    saveSettings(newView);
});

// Load settings on page load
window.addEventListener('load', function() {
    const savedView = loadSettings();
    const tableView = document.getElementById('tableView');
    const otherView = document.getElementById('otherView');

    // Apply the saved view setting
    tableView.style.display = savedView === 'table' ? 'block' : 'none';
    otherView.style.display = savedView === 'table' ? 'none' : 'block';
});

// profile.js

document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // For demonstration purposes, we'll use Local Storage to store profile data.
    // In a real application, you would send this data to a server.

    const profile = {
        username: username,
        email: email,
        password: password
    };

    localStorage.setItem('profile', JSON.stringify(profile));
    alert('Profile updated successfully');
});

// Load the profile data when the page loads
window.addEventListener('load', function() {
    const savedProfile = JSON.parse(localStorage.getItem('profile'));

    if (savedProfile) {
        document.getElementById('username').value = savedProfile.username;
        document.getElementById('email').value = savedProfile.email;
    }
});
