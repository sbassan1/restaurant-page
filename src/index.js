import "./styles.css";

console.log("the index.js script is working!");

const content = document.getElementById("content");

const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about");



class mainTitle {

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

const title = new mainTitle();
title.render();

class homeContent {

    render() {

    }

}

class menuContent {

    render() {

    }

}

class aboutContent {

    render(){

    }
}
