
export class MainTitle {
    render() {
        const titleDiv = document.createElement("div");
        const mainTitle = document.createElement("h1");
        const undertitle = document.createElement("p");
        
        titleDiv.className = "title";
        mainTitle.textContent = "Patagonia Grill";
        undertitle.textContent = "Just the way it is.";
        
        titleDiv.appendChild(mainTitle);
        titleDiv.appendChild(undertitle);
        
        return titleDiv;
    }
}
