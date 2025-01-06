// Mise à jour automatique de l'année dans le footer
document.getElementById("year").textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopButton = document.getElementById('scroll-to-top');
    
    // Afficher le bouton après 300px de défilement
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = 'block'; // Afficher le bouton
        } else {
            scrollToTopButton.style.display = 'none'; // Cacher le bouton
        }
    });

    // Faire défiler la page vers le haut quand on clique sur le bouton
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
