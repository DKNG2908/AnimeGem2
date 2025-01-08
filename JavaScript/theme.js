document.addEventListener("DOMContentLoaded", () => {
    // Récupérer le bouton de changement de thème
    const themeToggleButton = document.getElementById("theme-toggle");

    // Vérifier si le thème sombre est déjà activé (stocké dans le localStorage)
    const isDarkTheme = localStorage.getItem("dark-theme") === "true";

    // Appliquer le thème sombre ou clair sur le moment
    if (isDarkTheme) {
        applyDarkTheme();
    } else {
        applyLightTheme();
    }

    themeToggleButton.addEventListener('click', () => {
        // Basculer entre les thèmes
        if (document.body.style.backgroundColor === 'rgb(255, 226, 226)') { // Équivaut à #FFE2E2
            applyDarkTheme();
            localStorage.setItem("dark-theme", "true"); // Sauvegarder le thème sombre dans le localStorage
        } else {
            applyLightTheme();
            localStorage.setItem("dark-theme", "false"); // Sauvegarder le thème clair dans le localStorage
        }
    });

    // Fonction pour appliquer le thème sombre
    function applyDarkTheme() {
        // Changer les couleurs de fond et de texte pour le mode sombre
        document.body.style.backgroundColor = '#001D1D';
        document.querySelector("header").style.backgroundColor = '#069F9F';
        document.querySelector("footer").style.backgroundColor = '#069F9F';
        document.body.style.color = 'white';

        // Modifier les liens du menu en mode sombre
        const menuLinks = document.querySelectorAll(".menu li a");
        menuLinks.forEach(link => link.style.color = 'white');

        // Modifier le style des boutons "Ajouter au panier"
        const addToCartButtons = document.querySelectorAll(".ajouteraupanier");
        addToCartButtons.forEach(button => {
            button.style.backgroundColor = '#069F9F';
            button.style.color = 'white';
        });

        // Modifier le style du total du panier
        const panierTotal = document.getElementById("totalPanier");
        if (panierTotal) {
            panierTotal.style.backgroundColor = '#069F9F';
            panierTotal.style.color = 'white';
        }

        const boutonPaiement = document.getElementById("boutonPaiement");
        if (boutonPaiement) {
            boutonPaiement.style.backgroundColor = '#001D1D';
            boutonPaiement.style.color = 'white';
        }

        // Modifier le style du bouton "Retour en haut"
        const scrollToTopButton = document.getElementById("scroll-to-top");
        scrollToTopButton.style.backgroundColor = '#069F9F';
        scrollToTopButton.style.color = 'white';

        // Modifier le formulaire de contact
        const contactForm = document.querySelector("#contact form");
        if (contactForm) {
            contactForm.style.color = 'white'; 
            contactForm.style.border = '2px solid white';
        }

        // Modifier les champs du formulaire de contact
        const formFields = document.querySelectorAll("#contact input");
        formFields.forEach(field => {
            field.style.color = 'white'; 
            field.style.border = '1px solid white';  
        });

        // Modifier le bouton "Envoyer" du formulaire de contact
        const sendButton = document.querySelector("#contact button[type='submit']");
        if (sendButton){
            sendButton.style.backgroundColor = '#069F9F';
            sendButton.style.color = 'white';
        }

        // Modifier le bouton de changement de thème
        themeToggleButton.style.backgroundColor = '#069F9F';
        themeToggleButton.style.color = 'white';
        
        const styleToggleButton = document.getElementById("style-toggle");
        styleToggleButton.style.backgroundColor = '#069F9F';
        styleToggleButton.style.color = 'white';

    }

    // Fonction pour appliquer le thème clair
    function applyLightTheme() {
        // Changer les couleurs de fond et de texte pour le mode clair
        document.body.style.backgroundColor = '#FFE2E2';
        document.querySelector("header").style.backgroundColor = '#F96060';
        document.querySelector("footer").style.backgroundColor = '#F96060';
        document.body.style.color = 'black';

        // Modifier les liens du menu en mode clair
        const menuLinks = document.querySelectorAll(".menu li a");
        menuLinks.forEach(link => link.style.color = 'black');

        // Modifier le style des boutons "Ajouter au panier"
        const addToCartButtons = document.querySelectorAll(".ajouteraupanier");
        addToCartButtons.forEach(button => {
            button.style.backgroundColor = '#F96060';
            button.style.color = 'black';
        });

        // Modifier le style du total du panier
        const panierTotal = document.getElementById("totalPanier");
        if (panierTotal) {
            panierTotal.style.backgroundColor = '#F96060';
            panierTotal.style.color = 'black';
        }

        const boutonPaiement = document.getElementById("boutonPaiement");
        if (boutonPaiement) {
            boutonPaiement.style.backgroundColor = '#FFE2E2';
            boutonPaiement.style.color = 'black';
        }
        
        // Modifier le style du bouton "Retour en haut"
        const scrollToTopButton = document.getElementById("scroll-to-top");
        scrollToTopButton.style.backgroundColor = '#F96060';
        scrollToTopButton.style.color = 'black';

        // Modifier le formulaire de contact
        const contactForm = document.querySelector("#contact form");
        if (contactForm) {
            contactForm.style.color = 'black'; 
            contactForm.style.border = '2px solid black';
        }

        // Modifier les champs du formulaire de contact
        const formFields = document.querySelectorAll("#contact input");
        formFields.forEach(field => {
            field.style.color = 'black';  
            field.style.border = '1px solid black';
        });

        // Modifier le bouton "Envoyer" du formulaire de contact
        const sendButton = document.querySelector("#contact button[type='submit']");
        if (sendButton) {
            sendButton.style.backgroundColor = '#F96060';
            sendButton.style.color = 'black';
        }

        // Modifier le bouton de changement de thème
        themeToggleButton.style.backgroundColor = '#F96060';
        themeToggleButton.style.color = 'black';

        const styleToggleButton = document.getElementById("style-toggle");
        styleToggleButton.style.backgroundColor = '#F96060';
        styleToggleButton.style.color = 'black';

        
    }
});
