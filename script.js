// Function to toggle between light and dark mode
function toggleTheme() {
    const body = document.getElementById('body');
    const themeIcon = document.getElementById('theme-icon');

    // Check the current theme and toggle
    if (body.classList.contains('bg-gray-100')) {
        body.classList.remove('bg-gray-100', 'text-gray-800');
        body.classList.add('bg-gray-900', 'text-white');
        themeIcon.textContent = '🌙'; // Change icon to moon
        localStorage.setItem('theme', 'dark'); // Save theme preference
    } else {
        body.classList.remove('bg-gray-900', 'text-white');
        body.classList.add('bg-gray-100', 'text-gray-800');
        themeIcon.textContent = '🌞'; // Change icon to sun
        localStorage.setItem('theme', 'light'); // Save theme preference
    }
}

// Check for saved user preference
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';
const body = document.getElementById('body');
const themeIcon = document.getElementById('theme-icon');

// Apply the saved theme on page load
if (currentTheme === 'dark') {
    body.classList.remove('bg-gray-100', 'text-gray-800');
    body.classList.add('bg-gray-900', 'text-white');
    themeIcon.textContent = '🌙'; // Set icon to moon
} else {
    body.classList.add('bg-gray-100', 'text-gray-800');
    themeIcon.textContent = '🌞'; // Set icon to sun
}

// Add event listener to the theme toggle button
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
