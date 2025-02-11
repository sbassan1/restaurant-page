import "./styles.css";

console.log("the index.js script is working!");

const content = document.getElementById("content");

const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about");

class MainTitle {
    render() {
        const titleDiv = document.createElement("div");
        const mainTitle = document.createElement("h1");
        const undertitle = document.createElement("p");
        
        titleDiv.className = "title";
        mainTitle.textContent = "ARGENTINA STEAKHOUSE CLUB";
        undertitle.textContent = "Just the way it is.";
        
        titleDiv.appendChild(mainTitle);
        titleDiv.appendChild(undertitle);
        content.appendChild(titleDiv);
    }
}

class HomeContent {
    render() {
        const homeDiv = document.createElement("div");
        homeDiv.textContent = "HOME CONTENT IN PROGRESS";
        content.appendChild(homeDiv);
    }
}

class MenuContent {
    render() {
        const menuDiv = document.createElement("div");
        menuDiv.textContent = "MENU CONTENT IN PROGRESS";
        content.appendChild(menuDiv);
    }
}

class AboutContent {
    render() {
        const aboutDiv = document.createElement("div");
        aboutDiv.textContent = "ABOUT CONTENT IN PROGRESS.";
        content.appendChild(aboutDiv);
    }
}

const mainTitle = new MainTitle();
const homeContent = new HomeContent();
const menuContent = new MenuContent();
const aboutContent = new AboutContent();


// Render the title and home content first;
mainTitle.render();
homeContent.render();

homeBtn.addEventListener("click", () => {
    content.innerHTML = "";
    mainTitle.render();
    homeContent.render();
});

menuBtn.addEventListener("click", () => {
    content.innerHTML = "";
    mainTitle.render();
    menuContent.render();
});
aboutBtn.addEventListener("click", () => {
    content.innerHTML = "";
    mainTitle.render();
    aboutContent.render();
});