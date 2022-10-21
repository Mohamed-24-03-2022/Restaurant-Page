import "./style.css";
import initialLoader from "./initialPageLoader.js";


initialLoader();
const switchPages = (() => {
    const mainContainer = document.querySelector(".main");
    const presentationCard = document.querySelector(".presentation-card");
    const menuCard = document.querySelector(".menu-card");
    const contactCard = document.querySelector(".contact-card");

    // remove menu and contact cards from thw flow
    menuCard.remove();
    contactCard.remove();

    const links = document.querySelectorAll("nav a");
    const homeLink = links[0];
    const menuLink = links[1];
    const contactLink = links[2];

    homeLink.addEventListener("click", (e) => {
        e.preventDefault();
        // remove menuCard
        menuCard.remove()
        // remove contactCard
        contactCard.remove()
        // add presentationCard
        mainContainer.appendChild(presentationCard);
    });
    menuLink.addEventListener("click", (e) => {
        e.preventDefault();
        // remove presentationCard
        presentationCard.remove()
        // remove contactCard
        contactCard.remove()
        // add menuCard
        mainContainer.appendChild(menuCard);
    });
    contactLink.addEventListener("click", (e) => {
        e.preventDefault();
        // remove presentationCard
        presentationCard.remove();
        // remove menuCard
        menuCard.remove();
        // add contactCard
        mainContainer.prepend(contactCard);
    });
})();
