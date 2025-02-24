document.addEventListener("DOMContentLoaded", function () {
    // ----- Efecto de tipeo -----
    const text = "Turning Ideas into Pixel Perfect Websites";
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

    // ----- Resaltar página activa en el menú -----
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });

    // ----- Animación de carga -----
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 300);
});
