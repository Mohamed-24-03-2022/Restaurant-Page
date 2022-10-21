import wine1 from "./wine1.png";
import wine2 from "./wine2.png";
import wine3 from "./wine3.png";
import wine4 from "./wine4.png";
import wine5 from "./wine5.png";
import wine6 from "./wine6.png";
import wine7 from "./wine7.png";
import wine8 from "./wine8.png";
import { createElement, content, mainContainer } from "./initialPageLoader";

export default function () {
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
