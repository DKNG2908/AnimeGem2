document.addEventListener("DOMContentLoaded", () => {
    // Récupérer le panier depuis localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const cartItemsContainer = document.querySelector('#produitPanier'); // Sélection du conteneur adapté
    const totalPriceContainer = document.querySelector('#prixTotal'); // Le conteneur pour afficher le total
    const totalPanierContainer = document.querySelector('#totalPanier #prixTotal'); // Conteneur pour le totalPanier

    // Vérification de l'existence du conteneur
    if (!cartItemsContainer) {
        console.error("Le conteneur 'produitPanier' n'a pas été trouvé dans le DOM.");
        return;
    }

    // Si le panier est vide
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Votre panier est vide.</p>";
        if (totalPriceContainer) totalPriceContainer.innerHTML = `Total : €0.00`; // Afficher 0 si le panier est vide
        if (totalPanierContainer) totalPanierContainer.textContent = `Total : 0 €`; // Afficher 0 pour totalPanier
    } else {
        afficherPanier(); // Afficher le panier et calculer le total
    }

    // Fonction pour afficher le panier et mettre à jour le total
    function afficherPanier() {
        cartItemsContainer.innerHTML = ""; // Réinitialise le contenu du panier

        let totalPrice = 0;

        // Afficher chaque produit dans le panier
        cart.forEach(item => {
            if (!item.id || !item.name || !item.price || isNaN(item.price)) {
                return; // Ignore les produits mal définis
            }

            const itemElement = document.createElement('div');
            itemElement.classList.add('produitPanier');
            itemElement.innerHTML = `
                <img src="${item.image || 'default-image.jpg'}" alt="${item.name}" style="width: 100px; height: 100px; object-fit: cover;">
                <h3>${item.name}</h3>
                <p>Prix : ${item.price.toFixed(2)} €</p>
                <p>Quantité : ${item.quantity}</p>
                <button class="remove-from-cart" data-id="${item.id}">Supprimer</button>
                <button class="decrease-quantity" data-id="${item.id}">-</button>
                <button class="increase-quantity" data-id="${item.id}">+</button>
            `;
            cartItemsContainer.appendChild(itemElement);
        });
    }

    // Fonction pour supprimer un produit du panier
    function removeFromCart(event) {
        const productId = event.target.getAttribute('data-id');
        cart = cart.filter(item => item.id !== productId);  // Supprimer le produit

        localStorage.setItem('cart', JSON.stringify(cart));  // Sauvegarder dans localStorage

        // Rafraîchir le panier et recalculer le total
        afficherPanier();
    }

    // Fonction pour diminuer la quantité d'un produit
    function decreaseQuantity(event) {
        const productId = event.target.getAttribute('data-id');
        const item = cart.find(item => item.id === productId);

        if (item && item.quantity > 1) {
            item.quantity--;
            localStorage.setItem('cart', JSON.stringify(cart));
            afficherPanier();  // Rafraîchir le panier et recalculer le total
        }
    }

    // Fonction pour augmenter la quantité d'un produit
    function increaseQuantity(event) {
        const productId = event.target.getAttribute('data-id');
        const item = cart.find(item => item.id === productId);

        if (item) {
            item.quantity++;
            localStorage.setItem('cart', JSON.stringify(cart));
            afficherPanier();  // Rafraîchir le panier et recalculer le total
        }
    }

    // Ajouter les événements aux boutons (délégué)
    cartItemsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-from-cart')) {
            removeFromCart(event);
        } else if (event.target.classList.contains('decrease-quantity')) {
            decreaseQuantity(event);
        } else if (event.target.classList.contains('increase-quantity')) {
            increaseQuantity(event);
        }
    });

    // Initialiser l'affichage du panier au chargement
    afficherPanier();
});
