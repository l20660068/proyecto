// Toggle menú en dispositivos móviles
function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("show");
}

// Abrir modal con la imagen del proyecto
function openModal(image) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modalImg");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = image.src;
    captionText.innerHTML = image.alt;
}

// Cerrar modal
function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Cerrar modal con la tecla Escape
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});
