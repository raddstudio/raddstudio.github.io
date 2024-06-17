// import './index.scss';
// import Layout from './pages/Layout';
// import Home from './pages/Home';
// import About from './pages/About';
// import Clients from './pages/Clients';
// import Services from './pages/Services';
// import Teams from './pages/Teams';
// import Solo from './pages/Solo';
// import Terms from './pages/Terms';
// import Privacy from './pages/Privacy';
// import Affiliates from './pages/Affiliates';
// import Survey from './pages/Survey';
// import reportWebVitals from './reportWebVitals';

debugger;

// Create a class for the element
class Home extends HTMLElement {
  static observedAttributes = ["color", "size"];

  constructor() {
    // Always call super first in constructor
    super();
  }

  connectedCallback() {
    console.log("Custom element added to page.");
  }

  disconnectedCallback() {
    console.log("Custom element removed from page.");
  }

  adoptedCallback() {
    console.log("Custom element moved to new page.");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name} has changed.`);
  }
}

customElements.define("home", Home);
