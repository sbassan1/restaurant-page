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
        mainTitle.textContent = "Argentina Steakhouse Gentlemans Club";
        undertitle.textContent = "Just the way it is.";
        
        titleDiv.appendChild(mainTitle);
        titleDiv.appendChild(undertitle);
        content.appendChild(titleDiv);
    }
}

class HomeContent {
    render() {
        const homeDiv = document.createElement("div");
        homeDiv.className = "home-div";

        const presentation_fieldset = document.createElement("fieldset");
        const fieldset_title = document.createElement("legend");
        fieldset_title.textContent = "Who are we?";

        presentation_fieldset.appendChild(fieldset_title);
        

        const mission_div = document.createElement("div");
        mission_div.className = "mission-div";
        const mission_title = document.createElement("h2");
        mission_title.textContent = "We want you to experience TRUE Argentinian Cuisine!";
        const mission_txt = document.createElement("p");
        mission_txt.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."

        mission_div.appendChild(mission_title);
        mission_div.appendChild(mission_txt);

        
        homeDiv.appendChild(presentation_fieldset);
        homeDiv.appendChild(mission_div);
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