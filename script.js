/* ========== NAVBAR ========== */
function hamburg() {
    document.querySelector(".dropdown").style.transform = "translateY(0px)";
}

function cancel() {
    document.querySelector(".dropdown").style.transform = "translateY(-500px)";
}

/* ========== TYPEWRITER (SAFE) ========== */
const texts = ["DEVELOPER", "DESIGNER"];
let speed = 100;

let textIndex = 0;
let charIndex = 0;

function typeWriter() {
    const el = document.querySelector(".typewriter-text");
    if (!el) return;

    if (charIndex < texts[textIndex].length) {
        el.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    const el = document.querySelector(".typewriter-text");
    if (!el) return;

    if (el.innerHTML.length > 0) {
        el.innerHTML = el.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

/* safer than window.onload */
document.addEventListener("DOMContentLoaded", typeWriter);

/* ========== PROJECT DATA ========== */
const projects = [
    {
        title: "NSTP Archiving",
        description: "Digital archiving system for NSTP records.",
        tech: "HTML, CSS, JS, PHP, MySQL",
        images: ["img/nstp1.png","img/nstp2.png","img/nstp3.png","img/nstp4.png","img/nstp5.png"]
    },
    {
        title: "MrSwabbers",
        description: "Service system for booking services.",
        tech: "HTML, CSS, JS, PHP",
        images: ["img/mr1.png","img/mr2.png","img/mr3.png","img/mr4.png","img/mr5.png"]
    },
    {
        title: "iCaterSync",
        description: "Catering booking system.",
        tech: "HTML, CSS, JS, PHP",
        images: ["img/ic1.png","img/ic2.png","img/ic3.png","img/ic4.png","img/ic5.png"]
    },
    {
        title: "Clinic System",
        description: "Clinic record management system.",
        tech: "HTML, CSS, JS, PHP",
        images: ["img/cl1.png","img/cl2.png","img/cl3.png","img/cl4.png","img/cl5.png"]
    },
    {
        title: "SMIT Athlete Profiling",
        description: "Athlete tracking system.",
        tech: "HTML, CSS, JS, PHP",
        images: ["img/sm1.png","img/sm2.png","img/sm3.png","img/sm4.png","img/sm5.png"]
    }
];

/* ========== MODAL STATE ========== */
let currentImages = [];
let currentIndex = 0;

/* ========== OPEN MODAL ========== */
function openModal(index) {
    const modal = document.getElementById("projectModal");
    const project = projects[index];

    if (!modal || !project) return;

    document.getElementById("modal-title").innerText = project.title;
    document.getElementById("modal-description").innerText = project.description;
    document.getElementById("modal-tech").innerText = project.tech;

    currentImages = project.images;
    currentIndex = 0;

    const img = document.getElementById("carousel-image");
    if (img) img.src = currentImages[currentIndex];

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

/* ========== CHANGE IMAGE ========== */
function changeImage(dir) {
    if (!currentImages.length) return;

    currentIndex = (currentIndex + dir + currentImages.length) % currentImages.length;

    const img = document.getElementById("carousel-image");
    if (img) img.src = currentImages[currentIndex];
}

/* ========== CLOSE MODAL ========== */
function closeModal() {
    const modal = document.getElementById("projectModal");
    if (!modal) return;

    modal.classList.remove("active");
    document.body.style.overflow = "auto";
}

/* ========== CLICK OUTSIDE CLOSE ========== */
document.addEventListener("click", function (e) {
    const modal = document.getElementById("projectModal");
    if (modal && e.target === modal) closeModal();
});
