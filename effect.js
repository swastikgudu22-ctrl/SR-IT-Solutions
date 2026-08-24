document.addEventListener("click", function (event) {

    createWaterRipple(event.clientX, event.clientY);

});


document.addEventListener("touchstart", function (event) {

    const touch = event.touches[0];

    createWaterRipple(touch.clientX, touch.clientY);

}, {
    passive: true
});


const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
        const isOpen = navMenu.classList.toggle("is-open");
        this.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.querySelectorAll("a").forEach(function (item) {
        item.addEventListener("click", function () {
            navMenu.classList.remove("is-open");
            navToggle.setAttribute("aria-expanded", "false");
        });
    });
}


function createWaterRipple(x, y) {

    const ripple = document.createElement("span");
    ripple.className = "water-ripple";

    ripple.style.left = x + "px";
    ripple.style.top = y + "px";

    document.body.appendChild(ripple);


    const rippleSecond = document.createElement("span");
    rippleSecond.className = "water-ripple second-ripple";

    rippleSecond.style.left = x + "px";
    rippleSecond.style.top = y + "px";

    document.body.appendChild(rippleSecond);


    setTimeout(() => {
        ripple.remove();
        rippleSecond.remove();
    }, 1200);
}

// ===================== OPENING INTRO =====================

document.addEventListener("DOMContentLoaded", function () {

    const intro = document.getElementById("intro-screen");

    if (!intro) {
        return;
    }

    // Keep intro visible for 4 seconds
    setTimeout(function () {

        // Start smooth fade-out
        intro.classList.add("hide-intro");

    }, 4000);

});