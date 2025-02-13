class DishCard {
  constructor(name, description, cost) {
    this.name = name;
    this.description = description;
    this.cost = cost;
  }

  createCard() {
    const card = document.createElement("div");
    card.className = "dish-card";

    const title = document.createElement("h4");
    title.className = "dish-name";
    title.textContent = this.name;

    const desc = document.createElement("p");
    desc.textContent = this.description;

    const price = document.createElement("p");
    price.textContent = `Cost: ${this.cost} $`;

    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(price);

    return card;
  }
}

const dishes = [
  new DishCard("Asado", "Traditional Argentine barbecue with a variety of grilled meats.", 25),
  new DishCard("Bondiola", "Slow-cooked pork shoulder, tender and flavorful.", 18),
  new DishCard("Milanesa", "Breaded and fried beef or chicken cutlet, served with mashed potatoes or salad.", 15),
  new DishCard("Choripán", "Grilled chorizo sausage served in a crusty bread roll, topped with chimichurri sauce.", 10),
  new DishCard("Vacío", "Grilled flank steak, marinated and cooked to perfection.", 22),
  new DishCard("Filet de Merluza", "Grilled hake fish fillet, served with a side of fresh vegetables.", 20),
];



export class MenuContent {
    render() {
      const menuDiv = document.createElement("div");
      
      const dishes_div = document.createElement("div");
      dishes_div.className = "dishes-div";

      dishes.forEach(dish => {
        dishes_div.appendChild(dish.createCard());
      });


      menuDiv.appendChild(dishes_div);


      return menuDiv;
    }
  }
  