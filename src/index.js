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
        // add presentationCard
        setTimeout(() => (presentationCard.style.opacity = "1"), 100);
        mainContainer.appendChild(presentationCard);
        // remove menuCard
        menuCard.style.opacity = "0";
        setTimeout(() => menuCard.remove(), 100);
        // remove contactCard
        contactCard.style.opacity = "0";
        setTimeout(() => contactCard.remove(), 100);
    });
    menuLink.addEventListener("click", (e) => {
        e.preventDefault();
        // remove presentationCard
        presentationCard.style.opacity = "0";
        setTimeout(() => presentationCard.remove(), 100);
        // add menuCard
        setTimeout(() => (menuCard.style.opacity = "1"), 100);
        mainContainer.appendChild(menuCard);
        // remove contactCard
        contactCard.style.opacity = "0";
        setTimeout(() => contactCard.remove(), 100);
    });
    contactLink.addEventListener("click", (e) => {
        e.preventDefault();
        // remove presentationCard
        presentationCard.style.opacity = "0";
        setTimeout(() => presentationCard.remove(), 100);
        // remove menuCard
        menuCard.style.opacity = "0";
        setTimeout(() => menuCard.remove(), 100);
        // add contactCard
        setTimeout(() => (contactCard.style.opacity = "1"), 100);
        mainContainer.appendChild(contactCard);
    });
})();
