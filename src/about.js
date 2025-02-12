

export class AboutContent {
    render() {
      const aboutDiv = document.createElement("div");
      aboutDiv.className = "about-div";

      const disclaimerDiv = document.createElement("div");
      disclaimerDiv.className = "disclaimer";

      disclaimerDiv.innerHTML = `
      <h4>Disclaimer:</h4>
      <p>This website is a mockup created solely for personal educational and web development purposes. The services, products, or features displayed here are not real and are part of a fictional project. This site is not affiliated with any actual company or organization, and no transactions or real-world interactions are possible. The content and design are intended for practice and learning only. Thank you for understanding!</p>
      `;

      const socials = document.createElement("div");
      socials.className = socials;

      socials.innerHTML = `
        <h4>My socials</h4>
        <ul>
          <li>santiagobassani2000@gmail.com</li>
          <li>https://github.com/sbassan1</li>
          <li>https://www.linkedin.com/in/santiago-martin-bassani-russo/</li>
        </ul>
      
      `;

      const credits = document.createElement("div");

      credits.innerHTML = `
        <h4>Credits: </h4>
        <p>Background taken from freepix.com user: rawpixel.com</p>
      `;

      aboutDiv.appendChild(disclaimerDiv);
      aboutDiv.appendChild(socials);
      aboutDiv.appendChild(credits);


      return aboutDiv;
    }
  }
  