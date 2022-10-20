import "./style.css";
import {
    createNavBar,
    createPageContent,
    createFooter,
    createMenuCard,
    createContactCard,
} from "./initialPageLoader.js";

createNavBar();
createPageContent();
createMenuCard();
createContactCard();
createFooter();

const switchPages = (() => {
    const mainContainer = document.querySelector(".main");
    const presentationCard = document.querySelector(".presentation-card");
    const menuCard = document.querySelector(".menu-card");
    const contactCard = document.querySelector(".contact-card");

    // remove menu and contact cards from thw flow
    menuCard.style.opacity = "0";
    menuCard.remove();
    contactCard.style.opacity = "0";
    contactCard.remove();

    const links = document.querySelectorAll("nav a");
    const homeLink = links[0];
    const menuLink = links[1];
    const contactLink = links[2];

    homeLink.addEventListener("click", (e) => {
        e.preventDefault();
        // remove menuCard
        menuCard.style.opacity = "0";
        menuCard.remove()
        // remove contactCard
        contactCard.style.opacity = "0";
        contactCard.remove()
        // add presentationCard
        presentationCard.style.opacity = "1"
        mainContainer.appendChild(presentationCard);
    });
    menuLink.addEventListener("click", (e) => {
        e.preventDefault();
        // remove presentationCard
        presentationCard.style.opacity = "0";
        presentationCard.remove()
        // remove contactCard
        contactCard.style.opacity = "0";
        contactCard.remove()
        // add menuCard
        menuCard.style.opacity = "1";
        mainContainer.appendChild(menuCard);
    });
    contactLink.addEventListener("click", (e) => {
        e.preventDefault();
        // remove presentationCard
        presentationCard.style.opacity = "0";
        presentationCard.remove();
        // remove menuCard
        menuCard.style.opacity = "0";
        menuCard.remove();
        // add contactCard
        contactCard.style.opacity = "1";
        mainContainer.prepend(contactCard);
    });
})();
