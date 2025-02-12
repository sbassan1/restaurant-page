import "./styles.css";

import { MainTitle } from "./main-title.js";
import { HomeContent } from "./home.js";
import { MenuContent } from "./menu.js";
import { AboutContent } from "./about.js";

console.log("the index.js script is working!");

const content = document.getElementById("content");

const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about");


const mainTitle = new MainTitle();
const homeContent = new HomeContent();
const menuContent = new MenuContent();
const aboutContent = new AboutContent();

function renderContent(title, contentToRender) {
    content.innerHTML = "";
    content.appendChild(title.render());
    content.appendChild(contentToRender.render());
}


// Initial render
renderContent(mainTitle, homeContent);

homeBtn.addEventListener("click", () => {
  renderContent(mainTitle, homeContent);
});

menuBtn.addEventListener("click", () => {
  renderContent(mainTitle, menuContent);
});

aboutBtn.addEventListener("click", () => {
  renderContent(mainTitle, aboutContent);
});