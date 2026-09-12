const themeButton = document.querySelector("#theme-button");
const contactForm = document.querySelector("form");
const formMessage = document.querySelector("#form-message");

// Change the page theme.
function toggleTheme() {
    const isDark = document.body.classList.toggle("dark-mode");

    themeButton.textContent = isDark
        ? "Switch to light mode"
        : "Switch to dark mode";
}

// Show a confirmation without sending a real message.
function showConfirmation(event) {
    event.preventDefault();

    formMessage.textContent =
        "Thank you! This is a demo form, so your message was not sent.";

    contactForm.reset();
}

// Listen for a button click and a form submission.
themeButton.addEventListener("click", toggleTheme);
contactForm.addEventListener("submit", showConfirmation);