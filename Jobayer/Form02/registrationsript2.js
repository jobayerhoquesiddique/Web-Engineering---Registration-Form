document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("multiStepForm");
    const formSteps = document.querySelectorAll(".form-step");
    const nextBtns = document.querySelectorAll(".next-btn");
    const prevBtns = document.querySelectorAll(".prev-btn");
    const profileContainer = document.getElementById("profile-container");
    const formContainer = document.getElementById("form-container");
    const toggleDarkMode = document.getElementById("toggleDarkMode");

    let currentStep = 0;

    // Handle next step
    nextBtns.forEach((button, index) => {
        button.addEventListener("click", () => {
            formSteps[index].classList.remove("active");
            formSteps[index + 1].classList.add("active");
        });
    });

    // Handle previous step
    prevBtns.forEach((button, index) => {
        button.addEventListener("click", () => {
            formSteps[index + 1].classList.remove("active");
            formSteps[index].classList.add("active");
        });
    });

    // Form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);

        document.getElementById("profileName").textContent = name;
        document.getElementById("profileEmail").textContent = email;

        formContainer.classList.add("hidden");
        profileContainer.classList.remove("hidden");
    });

    // Edit profile
    document.getElementById("editProfile").addEventListener("click", () => {
        formContainer.classList.remove("hidden");
        profileContainer.classList.add("hidden");
    });

    // Load profile if exists
    if (localStorage.getItem("userName")) {
        document.getElementById("profileName").textContent = localStorage.getItem("userName");
        document.getElementById("profileEmail").textContent = localStorage.getItem("userEmail");

        formContainer.classList.add("hidden");
        profileContainer.classList.remove("hidden");
    }

    // Dark Mode Toggle
    toggleDarkMode.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
