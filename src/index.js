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
        mainTitle.textContent = "Patagonia Grill";
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
        presentation_fieldset.className = "fieldset-div";

        const fieldset_title = document.createElement("legend");
        fieldset_title.textContent = "Who are we?";

        const introd_text = document.createElement("h2");
        introd_text.textContent = "We are argentinian chefs looking to bring some of our countries most amazing foods here";

        const explanation_text = document.createElement("p");
        explanation_text.textContent = "Patagonia Grill is more than just a steakhouse; it's a journey to the heart of Argentina. We're dedicated to showcasing the country's rich culinary heritage, using time-honored techniques and the finest ingredients. From the sizzle of the grill to the warmth of our hospitality, we invite you to experience the passion and tradition that define Argentinian cuisine.";

        presentation_fieldset.appendChild(fieldset_title);
        presentation_fieldset.appendChild(introd_text);
        presentation_fieldset.appendChild(explanation_text);
        

        const mission_div = document.createElement("div");
        mission_div.className = "mission-div";
        const mission_title = document.createElement("h2");
        mission_title.textContent = "We want you to experience TRUE Argentinian Cuisine!";
        const mission_txt = document.createElement("p");
        mission_txt.textContent = "Indulge in Argentina's finest cuts. We specialize in traditional parrilla grilling, offering succulent Asado (ribs), flavorful Vacio (flank steak), tender Bondiola (pork shoulder), and more. Each steak is expertly prepared to capture the authentic taste of Argentina.";

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