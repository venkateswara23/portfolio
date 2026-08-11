// ===============================
// Navbar Background on Scroll
// ===============================

window.addEventListener("scroll", function () {

const navbar = document.querySelector(".navbar");

if (window.scrollY > 50) {

navbar.style.background = "#0b1220";

navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";

} else {

navbar.style.background = "#111827";

navbar.style.boxShadow = "none";

}

});

// ===============================
// Smooth Scrolling
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function (e) {

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

if (target) {

target.scrollIntoView({

behavior: "smooth"

});

}

});

});

// ===============================
// Active Navigation Link
// ===============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 100;

const sectionHeight = section.clientHeight;

if (scrollY >= sectionTop) {

current = section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if (link.getAttribute("href") === "#" + current) {

link.classList.add("active");

}

});

});

// ===============================
// Contact Form
// ===============================

const form = document.querySelector(".contact-form");

if (form) {

form.addEventListener("submit", function (e) {

e.preventDefault();

alert("Thank you! Your message has been received.");

form.reset();

});

}

// ===============================
// Resume Button Animation
// ===============================

const resumeBtn = document.querySelector(".resume-btn");

if (resumeBtn) {

resumeBtn.addEventListener("mouseenter", () => {

resumeBtn.style.transform = "scale(1.05)";

});

resumeBtn.addEventListener("mouseleave", () => {

resumeBtn.style.transform = "scale(1)";

});

}