'use strict';

(function() {
  class GuideCard extends HTMLElement {
    constructor(){
      // establish prototype chain
      super();

      // attaches shadow tree and returns shadow root reference
      // https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow
      const shadow = this.attachShadow({ mode: 'open' });

      // creating a container for the editable-list component
      const cardContainer = document.createElement('div');

      const title = this.title || this.data[3];
      const image = this.image || this.data[0];
      const body = this.body || this.data[2];
      const link = this.link || this.data[1];
      
      // adding a class to our container for the sake of clarity
      cardContainer.classList.add('card');

      // creating the inner HTML of the editable list element
      cardContainer.innerHTML = sections.map(s =>`
        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
          <div class="card my-2">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: CTO Guide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em" dx="-2.3em">CTO Guide</text></svg>
            <img class="card-img-top" slot="image" src="${image}" />
            <div class="card-body">
              <h5 class="card-title" slot="title">${title}</h5>
              <p class="card-text" slot="body">${body}</p>
              <a href="${link}" slot="link" class="btn btn-primary" class="btn btn-primary" rel="nofollow">Read More</a>
            </div>
          </div>
        </div>`);
      
      // appending the container to the shadow DOM
      shadow.appendChild(cardContainer);
    }
  }
  customElements.define("guide-card", GuideCard, { extends: "div" });
})();
