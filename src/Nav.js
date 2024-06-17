import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function Nav() {
  return (
    <nav className="justify-content-end mx-3 navbar navbar-expand navbar-light fixed-top d-none">
      <a className="p-2 m-1 bg-light rounded" href="/">Home</a>
      <a className="p-2 m-1 bg-light rounded" href="/about">About</a>
      <a className="p-2 m-1 bg-light rounded" href="/services">Services</a>
	      <a className="p-2 m-1 bg-light rounded" href="/teams">Teams</a>
	      <a className="p-2 m-1 bg-light rounded" href="/solo">Solo</a>
	      <a className="p-2 m-1 bg-light rounded" href="/clients">Clients</a>
      Opportunities
	      <a className="p-2 m-1 bg-light rounded" href="/investor.html">Investors</a>
	      <a className="p-2 m-1 bg-light rounded" href="/careers.html">Careers</a>
	      <a className="p-2 m-1 bg-light rounded" href="/interns.html">Interns</a>
    </nav>
  );
}