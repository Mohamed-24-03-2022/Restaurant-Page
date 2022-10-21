import wineWaiter from "./wineWaiter.png";
import { createElement, content, mainContainer } from "./initialPageLoader";

export default function () {
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