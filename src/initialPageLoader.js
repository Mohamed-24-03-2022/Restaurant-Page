import wineWaiter from "./wineWaiter.png";
import wine1 from "./wine1.png";
import wine2 from "./wine2.png";
import wine3 from "./wine3.png";
import wine4 from "./wine4.png";
import wine5 from "./wine5.png";
import wine6 from "./wine6.png";
import wine7 from "./wine7.png";
import wine8 from "./wine8.png";
import locationImgSrc from "./location.png";

const createElement = (element) => {
    return document.createElement(element);
};

const content = document.querySelector("#content");
const mainContainer = createElement("div");
mainContainer.classList.add("main");

const createNavBar = () => {
    const nav = createElement("nav");
    const logoContainer = createElement("div");
    const listContainer = createElement("div");
    const list = createElement("ul");
    const listItems = [
        createElement("li"),
        createElement("li"),
        createElement("li"),
    ];
    const listItemsLinks = [
        createElement("a"),
        createElement("a"),
        createElement("a"),
    ];

    logoContainer.classList.add("logo");

    nav.appendChild(logoContainer);
    nav.appendChild(listContainer);
    listContainer.appendChild(list);
    for (let i = 0; i < listItems.length; i++) {
        list.appendChild(listItems[i]);
        listItems[i].appendChild(listItemsLinks[i]);
        listItemsLinks[i].setAttribute("href", " ");
    }
    logoContainer.textContent = "Red House";
    listItemsLinks[0].textContent = "Home";
    listItemsLinks[1].textContent = "Menu";
    listItemsLinks[2].textContent = "Contact";

    content.appendChild(nav);
};
const createPageContent = () => {
    const cardContainer = createElement("div");
    const textContainer = createElement("div");
    const texts = [createElement("p"), createElement("p")];
    const imgContainer = createElement("div");
    const img = new Image();
    const actionCallContainer = createElement("div");
    const actionText = createElement("p");

    cardContainer.classList.add("presentation-card");
    textContainer.classList.add("text");
    imgContainer.classList.add("img-container");
    actionCallContainer.classList.add("call-to-action");

    mainContainer.appendChild(cardContainer);
    cardContainer.appendChild(textContainer);
    texts.forEach((text) => textContainer.appendChild(text));
    cardContainer.appendChild(imgContainer);
    imgContainer.appendChild(img);
    cardContainer.appendChild(actionCallContainer);
    actionCallContainer.appendChild(actionText);

    texts[0].textContent = "Best red wine in the country";
    texts[1].textContent = "Made with passion since 1878";
    img.src = wineWaiter;
    actionText.textContent = "Order online or visit us!";

    content.appendChild(mainContainer);
};

const createFooter = () => {
    const footer = createElement("footer");
    const footerContainer = createElement("div");
    const footerText = createElement("p");
    const footerLink = createElement("a");
    const fontAwesome = createElement("i");

    footerContainer.classList.add("footer-container");
    fontAwesome.classList.add("fab", "fa-github");
    footerLink.setAttribute("href", "https://github.com/mohamed-24-03-2022");
    footerLink.setAttribute("target", "_blank");

    footer.appendChild(footerContainer);
    footerContainer.appendChild(footerText);
    footerText.appendChild(footerLink);
    footerLink.appendChild(fontAwesome);

    footerText.textContent = "Copyright © 2022 Mohamed-24-03-2022 ";

    content.appendChild(footer);
};

const createMenuCard = () => {
    const menuCardContainer = createElement("div");
    menuCardContainer.classList.add("menu-card");
    mainContainer.appendChild(menuCardContainer);

    for (let i = 1; i <= 8; i++) {
        const card = createElement("div");
        card.classList.add("card");
        menuCardContainer.appendChild(card);
        const wineName = createElement("p");
        const wineNames = [
            "Estrella River Proprietor's Reserve Merlot",
            "Sierra Salinas Mira",
            "Chateau Souverain Merlot",
            "Estrella River Proprietor's Reserve Cabernet Sauvignon",
            "14 Hands Cabernet Sauvignon",
            "Montes Malbec (Classic)",
            "Finca Decero Remolinos Vineyard Malbec",
            "Wines from Hahn Estate Pinot Noir",
        ];
        wineName.textContent = wineNames[i - 1];
        card.appendChild(wineName);
        const images = [wine1, wine2, wine3, wine4, wine5, wine6, wine7, wine8];
        const img = new Image();
        img.src = images[i - 1];
        card.appendChild(img);
    }
    content.appendChild(mainContainer);
};

const createContactCard = () => {
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

export {
    createNavBar,
    createPageContent,
    createFooter,
    createMenuCard,
    createContactCard,
};
