
document.addEventListener("DOMContentLoaded", () => {
    // Project Cards Scroll Animation
    const cards = document.querySelectorAll(".project-card");

    function revealOnScroll() {
        cards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                card.classList.add("show");
            }
        });
    }
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run once in case some are in view

    // Footer Reveal
    const footer = document.querySelector(".footer");

    function revealFooter() {
        const rect = footer.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            footer.classList.add("show");
        }
    }
    window.addEventListener("scroll", revealFooter);
    revealFooter();
});

document.addEventListener("DOMContentLoaded", () => {
    const contactSection = document.querySelector("#contact");

    function revealContact() {
        const rect = contactSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            contactSection.classList.add("show");
        }
    }

    window.addEventListener("scroll", revealContact);
    revealContact(); // Run once to check if already in view
});

document.addEventListener("DOMContentLoaded", function () {
    const text = "a 10th Grader Here!";
    const typingText = document.getElementById("typing-text");
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            typingText.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }

    typeEffect();
});
