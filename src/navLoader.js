import { createElement, content } from "./initialPageLoader";

export default function () {
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

        listItems[i].addEventListener("click", () => {
            listItems.forEach(item => item.style.borderBottom = "solid 2px #ffffff00");
            listItems[i].style.borderBottom = "solid 2px #ffffff";
        })
    }
    logoContainer.textContent = "Red House";
    listItemsLinks[0].textContent = "Home";
    listItemsLinks[1].textContent = "Menu";
    listItemsLinks[2].textContent = "Contact";

    content.appendChild(nav);
};