// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        // Scroll to the target section smoothly
        const targetId = this.getAttribute("href");
        document.querySelector(targetId).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Basic form submission (for demonstration, no backend)
document.querySelector(".contact-form form").addEventListener("submit", function (e) {
    e.preventDefault();
    // Simulate form submission with an alert
    alert("Pesan Anda telah terkirim! (Ini adalah simulasi, tidak ada backend)");
    // Reset form after submission
    this.reset();
});

// Theme toggle functionality
const themeToggleButton = document.getElementById("theme-toggle");
const bodyElement = document.body;

// Check if dark mode is already applied (from localStorage)
if (localStorage.getItem("theme") === "dark") {
    bodyElement.classList.add("dark-mode");
    themeToggleButton.textContent = "🌙";  // Dark mode icon
} else {
    bodyElement.classList.remove("dark-mode");
    themeToggleButton.textContent = "🌞";  // Light mode icon
}

// Toggle theme (dark/light) and save preference to localStorage
themeToggleButton.addEventListener("click", () => {
    bodyElement.classList.toggle("dark-mode");

    // Save user preference for theme in localStorage
    if (bodyElement.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeToggleButton.textContent = "🌙";  // Icon for light mode
    } else {
        localStorage.setItem("theme", "light");
        themeToggleButton.textContent = "🌞";  // Icon for dark mode
    }
});
