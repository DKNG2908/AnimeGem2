// Sélectionner le bouton pour changer le style
const styleToggleButton = document.getElementById('style-toggle');

// Fonction pour appliquer le style sauvegardé ou par défaut
function applyStoredStyle() {
    // Vérifier si un style a été sauvegardé dans le localStorage
    const savedStyle = localStorage.getItem('style');

    // Si un style est sauvegardé, on l'applique
    if (savedStyle) {
        document.querySelector('link[rel="stylesheet"]').href = savedStyle;
    } else {
        // Par défaut, on charge AnimeGem1.css
        document.querySelector('link[rel="stylesheet"]').href = 'CSS/AnimeGem1.css';
    }
}

// Appliquer le style dès le chargement de la page
applyStoredStyle();

// Ajouter un événement pour changer le style au clic
styleToggleButton.addEventListener('click', () => {
    const currentLink = document.querySelector('link[rel="stylesheet"]');

    // Si le style actuel est AnimeGem1.css, on le change pour AnimeGem2.css, et inversement
    if (currentLink.href.includes('AnimeGem1.css')) {
        currentLink.href = 'CSS/AnimeGem2.css';
        // Sauvegarder le choix de l'utilisateur dans le localStorage
        localStorage.setItem('style', 'CSS/AnimeGem2.css');
    } else {
        currentLink.href = 'CSS/AnimeGem1.css';
        // Sauvegarder le choix de l'utilisateur dans le localStorage
        localStorage.setItem('style', 'CSS/AnimeGem1.css');
    }
});
