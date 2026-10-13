const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

// Mobile navigation menu
menuBtn.addEventListener("click", () => {
    const opened = navbar.classList.toggle("open");

    menuBtn.textContent = opened ? "✕" : "☰";
    menuBtn.setAttribute("aria-expanded", opened);
});

// Close menu after clicking a link
document.querySelectorAll("#navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("open");
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-expanded", "false");
    });
});

// Automatic copyright year
document.getElementById("year").textContent =
    new Date().getFullYear();

// Animated changing job title
const typing = document.getElementById("typing");
const titles = [
    "Web Developer",
    "Programmer",
    "Creative Designer"
];

let index = 0;

setInterval(() => {
    index = (index + 1) % titles.length;
    typing.textContent = titles[index];
}, 2500);

// Highlight the navigation link for the current section
if ("IntersectionObserver" in window) {
    const sections = document.querySelectorAll("main section[id]");
    const links = document.querySelectorAll("#navbar a");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                links.forEach(link => {
                    const active =
                        link.getAttribute("href") ===
                        "#" + entry.target.id;

                    link.classList.toggle("active", active);
                });
            }
        });
    }, { rootMargin: "-20% 0px -65% 0px" });

    sections.forEach(section => observer.observe(section));
}

// Contact form demonstration
document.getElementById("contactForm").addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("status");

    if (!name || !email || !message) {
        status.textContent = "Please fill in all fields.";
        return;
    }

    status.textContent =
        "Thank you, " + name +
        "! Your form is complete. An email service is needed to send your message.";

    event.target.reset();
});