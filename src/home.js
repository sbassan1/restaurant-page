
export class HomeContent {
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

        return homeDiv;
    }
}
