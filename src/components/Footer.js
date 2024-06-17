
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Coinmarketcap from './Coinmarketcap';
import Mixcloud from './Mixcloud';

const Footer = () => {
  return <footer className="footer bg-dark">
  <div className="container">
    <Navbar fixed="bottom" className="w-100 text-end px-3 ps-5">
		<a className="ms-5 p-2 m-1 bg-light rounded" href="/affiliates">Affiliates</a>
		<a className="p-2 m-1 bg-light rounded" href="/terms">Terms</a>
		<a className="p-2 m-1 bg-light rounded" href="/privacy">Privacy</a>
        <p className="w-100 text-black"><a href="https://raddrick.github.io/" target="raddrick" className="bg-light p-1 rounded">@raddrick</a> / <a href="https://raddstudio.com" className="bg-light p-1 rounded">RaddStudio.com</a><br /> <span className="bg-light p-1 rounded">©'007-{new Date().getFullYear()}</span></p>
    </Navbar>
  </div>
</footer>
  
}
export default Footer;
