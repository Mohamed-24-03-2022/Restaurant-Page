import locationImgSrc from "./location.png";
import { createElement, content, mainContainer } from "./initialPageLoader";

export default function () {
    const contactCardContainer = createElement("div");
    const card = [
        createElement("div"),
        createElement("div"),
        createElement("div"),
    ];
    const cardsClasses = ["phone", "location", "location-img"];
    const cardsContent = [
        "☎ 999 999 999",
        "🗺️ Tucson, Arizona, United States",
        "",
    ];
    const locationImg = new Image();

    contactCardContainer.classList.add("contact-card");
    mainContainer.appendChild(contactCardContainer);

    for (let i = 0; i < 3; i++) {
        card[i].classList.add(`${cardsClasses[i]}`);
        contactCardContainer.appendChild(card[i]);
        card[i].textContent = `${cardsContent[i]}`;
    }
    locationImg.src = locationImgSrc;
    card[2].appendChild(locationImg);

    content.appendChild(mainContainer);
};