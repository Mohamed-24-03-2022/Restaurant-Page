import createNavBar from "./navLoader.js";
import createPresentation from "./presentationLoader.js";
import createMenu from "./menuLoader.js";
import createContact from "./contactLoader.js";
import createFooter from "./footerLoader.js";


const createElement = (element) => document.createElement(element);
const content = document.querySelector("#content");
const mainContainer = createElement("div");
mainContainer.classList.add("main");

export { createElement, content, mainContainer };
export default function () {
    createNavBar();
    createPresentation();
    createMenu();
    createContact();
    createFooter();
}
