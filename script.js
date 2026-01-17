// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.querySelector('i').classList.toggle('fa-bars');
    menuBtn.querySelector('i').classList.toggle('fa-times');
});

// Close menu when a link is clicked
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('active'));
});

// Dark/Light Mode Theme Switcher
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'light') themeToggle.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'light');
    }
});