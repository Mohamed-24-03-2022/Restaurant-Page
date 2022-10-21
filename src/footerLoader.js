import { createElement, content } from "./initialPageLoader";

export default function () {
    const footer = createElement("footer");
    const footerContainer = createElement("div");
    const footerText = createElement("p");
    const footerLink = createElement("a");
    const fontAwesome = createElement("i");

    footerContainer.classList.add("footer-container");
    fontAwesome.classList.add("fab", "fa-github");
    footerLink.setAttribute("href", "https://github.com/mohamed-24-03-2022");
    footerLink.setAttribute("target", "_blank");

    footerText.textContent = "Copyright © 2022 Mohamed-24-03-2022 ";

    footer.appendChild(footerContainer);
    footerText.appendChild(footerLink);
    footerLink.appendChild(fontAwesome);
    footerContainer.appendChild(footerText);

    content.appendChild(footer);
};

