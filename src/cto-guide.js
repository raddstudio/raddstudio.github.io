'use strict';

(function() {
  class CTOGuide extends HTMLElement {
    constructor(){
      // establish prototype chain
      super();

      // attaches shadow tree and returns shadow root reference
      // https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow
      const shadow = this.attachShadow({ mode: 'open' });

      // creating a container for the editable-list component
      const guideContainer = document.createElement('div');

      const keys = ["architecture","career-growth","development","finance","guide","handbooks","hiring","more","people","product","project-management","reverse-interview","skills","startups","technologies"]; //guide.keys;
      const sections = guide; //this.sections;


      // adding a class to our container for the sake of clarity
      guideContainer.classList.add('guide');

      // creating the inner HTML of the editable list element
      guideContainer.innerHTML = sections.map(s =>`
          <div class="row my-5">
            <div class="col-12">
              <h2 slot="title">${keys[s]}</h2>
              
              <div class="row my-5 justify-content-center">
              ${sections[keys[s]].map(c => 
                `<card data="${sections[keys[s]][c]}"></card>`).join('')}
              </div>
          </div>
        </div>`);

      // appending the container to the shadow DOM
      shadow.appendChild(guideContainer);
    }
  }
  customElements.define("cto-guide", CTOGuide, { extends: "div" });
})();