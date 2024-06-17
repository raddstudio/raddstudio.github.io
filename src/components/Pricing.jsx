import { useState } from 'react';
import Page from './Page';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Image from 'react-bootstrap/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Pricing = () => {
  const [selected, setSelected] = useState('fractional');

  const select = (s) => setSelected(s);
  const selectedClass = (c) => c == selected ? 'row mb-3 text-center' : 'row mb-3 text-center d-none';

  return <Page section="travel" className="py-5 my-5">
    <div className="container py-5 my-5">
      <header>
        <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
          <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
           <span className="fs-4">Web .:. Software .:. Ideas</span>
          </a>
          <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <a className="me-3 py-2 text-dark text-decoration-none" href="https://raddstudio.substack.com/p/how-to-work-with-us">How to work with us</a>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic" drop="end">
                Services
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => select('fractional')} href="#" active={selected == 'fractional'}>MVP to Market</Dropdown.Item>
                <Dropdown.Item onClick={() => select('nomadcamp')}  href="#" active={selected == 'nomadcamp'}>Nomad Camp</Dropdown.Item>
                <Dropdown.Item onClick={() => select('preseed')}  href="#" active={selected == 'preseed'}>Pre-Seed</Dropdown.Item>
                <Dropdown.Item onClick={() => select('seed')}  href="#" active={selected == 'seed'}>Seed</Dropdown.Item>
                <li><hr className="dropdown-divider" /></li>
                <Dropdown.Item onClick={() => select('fractionals')}  href="" active={selected == 'fractionals'}>Fractionals</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </nav>
        </div>

        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h1 className="display-4 fw-normal">Pricing</h1>
          </div>
      </header>

      <main>
        
        <div className={selectedClass('fractionals')} id="fractionals">
          <div className="col-12">
            <p className="fs-5 text-muted">We are building an equity collective with our products. Your contributions will pay out in dividends and build up your merits!</p>
          </div>
          <div className="col-12 col-md-8 ps-4">
            <div className="card p-4 mb-4 rounded-3 shadow-sm text-start">
              <h4 className="my-0 fw-normal">Fractional Leaders are core to our business</h4>
              <small>Each Chief Role has 2000h/a reserved | Available in <em>Each Studio Product</em></small>
              <p className="text-muted mt-5">Top contributors gain access to our pool of client work.</p>
              <div className="d-flex justify-content-center">
                <div className="d-flex justify-content-start">
                  <ul className="p-4 mb-4 text-start">
                    <li>CEO</li>
                    <li>CTO</li>
                    <li>CPO</li>
                  </ul>
                  <ul className="p-4 mb-4 text-start">
                    <li>CMO</li>
                    <li>CFO</li>
                    <li>CLO</li>
                  </ul>
                  <ul className="p-4 mb-4 text-start">
                    <li>CCO</li>
                    <li>COO</li>
                  </ul>
                </div>
                <div className="p-3">
                  <ol className="mt-2 mb-4 text-start">
                    <li><em>Packkit List</em></li>
                    <li><em>Click Studio</em></li>
                    <li><em>Time Bank</em></li>
                    <small>More to come...</small>
                  </ol>
                </div>
                <div className="p-4 text-center">
                  = <b>48,0000</b> <br /> <small>shares / year <br /> up for grabs</small>
                </div>
              </div>
              <small>
                Contribute your way to the top of your vertical and get priority access to client availablities (100h Min).
                <br />A quality multiplier (0-1, in the form of canonical grades A-F) is democratically elected by your peers in peer review.
                <br />Contributions start on a Support tier (1h/d Max), work your way up the ladder to the top of the vertical and lead the charge on the product in Innovation(2h/d Max).
              </small>
            </div>
          </div>
          <div className="col-12 col-md-4 ps-4">
            <div className="card mb-4 rounded-3 shadow-sm border-primary">
              <div className="card-header py-3 text-white bg-primary border-primary">
                <h4 className="my-0 fw-normal">Equity Collective</h4>
                <small>Join our Studio</small>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$997<small className="text-muted fw-light">/a</small></h1>
                <ul className="mt-3 mb-4 text-start">
                  <li>Ditch some of the solo grind</li>
                  <li>Stable and Steady work in Studio</li>
                  <li>Choose your contribution schedule</li>
                  <li>Grow into your role your way</li>
                  <li>Join a council of peers</li>
                  <li>Access to incubation and accelleration programs</li>
                </ul>
                <a href="https://buy.stripe.com/cN27vU9aS8RV6FG4gE" target="_blank" className="w-100 btn btn-lg btn-primary">Join our collective</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className={selectedClass('fractional')} id="fractional">
          <div className="col-12">
            <p className="fs-5 text-muted">Having custom software doesn’t mean having to spend $200,000 on a CTO or engineer. You can have a CTO for hire at a fraction of that cost and on flexible payment terms.</p>
          </div>
          <div className="col-12 col-md-4 ps-4">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Support</h4>
                <small>Ideal for small teams and startups</small>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$1,250<small className="text-muted fw-light">/m</small></h1>
                <ul className="mt-3 mb-4 text-start">
                  <li>Monthly success calls</li>
                  <li>Dedicated CTO for your team</li>
                  <li>Small Improvements</li>
                  <li>Direction and strategy consulting</li>
                  <li>Up to 1h daily</li>
                </ul>
                <a href="https://buy.stripe.com/28oaI6bj0b03c00005" target="_blank" className="w-100 btn btn-lg btn-outline-primary">Choose Support</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 ps-4">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Growth</h4>
                <small>Perfect for growing businesses</small>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$3,750<small className="text-muted fw-light">/m</small></h1>
                <ul className="mt-3 mb-4 text-start">
                  <li>Custom landing pages</li>
                  <li>UI/UX design and branding</li>
                  <li>Software setup and automations</li>
                  <li>Specifications and process improvements</li>
                  <li>Up to 3h daily</li>
                </ul>
                <a href="https://buy.stripe.com/8wM03s86O8RVggg3ci" target="_blank" className="w-100 btn btn-lg btn-primary">Choose Growth</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 ps-4">
            <div className="card mb-4 rounded-3 shadow-sm border-primary">
              <div className="card-header py-3 text-white bg-primary border-primary">
                <h4 className="my-0 fw-normal">Innovation</h4>
                <small>Accelerate your product development</small>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$12,500<small className="text-muted fw-light">/m</small></h1>
                <ul className="mt-3 mb-4 text-start">
                  <li>Full custom software build</li>
                  <li>Wireframing and prototyping</li>
                  <li>Test Driven Development</li>
                  <li>up to 10h daily</li>
                </ul>
                <a href="https://buy.stripe.com/eVa03s86Oecfe887sz" target="_blank" className="w-100 btn btn-lg btn-primary">Choose Innovation</a>
              </div>
            </div>
          </div>
          <div className="col-12 text-center"><small><a href="/pricing.html" className="btn btn-outline-secondary btn-lg">Select a Plan</a></small></div>
        </div>
        
        <div className={selectedClass('nomadcamp')} id="nomadcamp">
          <div className="col-12">
            <p className="fs-5 text-muted">Building a business is hard, we know how you feel. You dont have to go it alone! Choose one of our fractionals to be in your corner every step of the way. At Nomad Camp, you're the product.</p>
          </div>
          <div className="col-12 col-md-4 ps-4">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Monthly</h4>
                <small>Weekly Product Session</small>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$900<small className="text-muted fw-light">/m</small></h1>
                <ul className="mt-3 mb-4 text-start">
                  <li>Save $100!</li>
                  <li>Kaizen process</li>
                  <li>Ikigai direction</li>
                  <li>Goal Cycles</li>
                  <li>Accountability</li>
                </ul>
                <a href="https://buy.stripe.com/28oaI6bj0b03c00005" target="_blank" className="w-100 btn btn-lg btn-outline-primary">Choose Monthly</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 ps-4">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Quarterly</h4>
                <small>Weekly Product Session</small>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$2,500<small className="text-muted fw-light">/q</small></h1>
                <ul className="mt-3 mb-4 text-start">
                  <li>Save $500!</li>
                  <li>Kaizen process</li>
                  <li>Ikigai direction</li>
                  <li>Goal Cycles</li>
                  <li>Accountability</li>
                </ul>
                <a href="https://buy.stripe.com/28oaI6bj0b03c00005" target="_blank" className="w-100 btn btn-lg btn-primary">Choose Monthly</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 ps-4">
            <div className="card mb-4 rounded-3 shadow-sm border-primary">
              <div className="card-header py-3 bg-primary text-white ">
                <h4 className="my-0 fw-normal">Annually</h4>
                <small>Weekly Product Session</small>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$5,000<small className="text-muted fw-light">/a</small></h1>
                <ul className="mt-3 mb-4 text-start">
                  <li>Save $7500!</li>
                  <li>Only $100 per session!</li>
                  <li>Kaizen process</li>
                  <li>Ikigai direction</li>
                  <li>Goal Cycles</li>
                  <li>Accountability</li>
                </ul>
                <a href="https://buy.stripe.com/28oaI6bj0b03c00005" target="_blank" className="w-100 btn btn-lg btn-primary">Choose Monthly</a>
              </div>
            </div>
          </div>
          <p><small>Get Started once <a href="https://buy.stripe.com/8wMeYm0Em8RV1lmcMN" target="_bl"> Weekly </a> or <a href="https://buy.stripe.com/dR68zYevc8RVggg3ce" target="_blank">Monthtly</a>. Get Annually for as low as $100 / cycle!!</small></p>
        </div>

        <div className={selectedClass('preseed')} id="preseed">
          <div className="col-12">
            <p className="fs-5 text-muted">Need some help at lift off? We are there for you!</p>
          </div>
          <div className="col-12 col-md-3 ps-4">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Slack / Discord / Teams</h4>
                <small>Join our comm channels and get async support</small>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$999<small className="text-muted fw-light">/m</small></h1>
                <ul className="mt-3 mb-4 text-start">
                  <li>Connect our teams</li>
                  <li>DMs and team channels</li>
                </ul>
                <a href="https://buy.stripe.com/eVaaI61Iq5FJfcc5kn" target="_blank" className="w-100 btn btn-lg btn-outline-secondary">Choose Virtual CTO</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 ps-4">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">On Staff</h4>
                <small>Daily Rate</small>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$400<small className="text-muted fw-light">/d</small></h1>
                <ul className="mt-3 mb-4 text-start">
                  <li>Leadership</li>
                  <li>Strategy</li>
                  <li>Road Mapping</li>
                  <li>Product Champion</li>
                  <li>Accountability</li>
                </ul>
                <a href="https://buy.stripe.com/bIY03s3Qy4BFd44bJx" target="_blank" className="w-100 btn btn-lg btn-outline-primary">Choose On Staff</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 ps-4">
            <div className="card mb-4 rounded-3 shadow-sm border-primary">
              <div className="card-header py-3 bg-primary text-white ">
                <h4 className="my-0 fw-normal">Advisor</h4>
                <small>~5h throughout the month</small>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$2,000<small className="text-muted fw-light">/m</small></h1>
                <ul className="mt-3 mb-4 text-start">
                  <li>Add a Champion to your product </li>
                  <li>Available Async via DM or Calls</li>
                  <li>Strategy Consults</li>
                  <li>Accountability Check-ins</li>
                  <li>Open to <a href="https://raddstudio.com/agreements/fast.pdf" target="_blank">FAST</a> agreement</li>
                </ul>
                <a href="https://buy.stripe.com/5kAbMabj0ecf8NO00O" target="_blank" className="w-100 btn btn-lg btn-outline-primary">Choose Advisor</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 ps-4">
            <div className="card mb-4 rounded-3 shadow-sm border-primary">
              <div className="card-header py-3 bg-primary text-white ">
                <h4 className="my-0 fw-normal">Dev. Week</h4>
                <small>Up to 40h</small>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$3,500<small className="text-muted fw-light">/w</small></h1>
                <ul className="mt-3 mb-4 text-start">
                  <li>Ruby Full Stack</li>
                  <li>Node Full Stack</li>
                  <li>PHP Full Stack</li>
                  <li>Java Full Stack</li>
                  <li>Mobile Development</li>
                </ul>
                <a href="https://buy.stripe.com/5kAbMabj0ecf8NO00O" target="_blank" className="w-100 btn btn-lg btn-primary">Choose Dev. Week</a>
              </div>
            </div>
          </div>
        </div>

        <div className={`${selectedClass('seed')} text-center`} id="seed">
          <div className="col-12">
            <p className="fs-5 text-muted">You made it! Amazing, lets make some moves.</p>
          </div>
          <div className="col-12 col-md-4 ps-4">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Retainer</h4>
                <small>60 anytime hours</small>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$5,000</h1>
                <ul className="mt-3 mb-4 text-start">
                  <li>up to 4h per day</li>
                </ul>
                <a href="https://buy.stripe.com/eVaaI61Iq5FJfcc5kn" target="_blank" className="w-100 btn btn-lg btn-outline-primary">Choose 60 Hours</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 ps-4">
            <div className="card mb-4 rounded-3 shadow-sm border-primary">
              <div className="card-header py-3 bg-primary text-white ">
                <h4 className="my-0 fw-normal">Retainer</h4>
                <small>120 anytime hours</small>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$10,000</h1>
                <ul className="mt-3 mb-4 text-start">
                  <li>up to 4h per day</li>
                </ul>
                <a href="https://buy.stripe.com/5kA6rQevc6JN7JK4gr" target="_blank" className="w-100 btn btn-lg btn-primary">Choose 120 Hours</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 ps-4">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Development Month</h4>
                <small>Up to 160h per month</small>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$13,600<small className="text-muted fw-light">/m</small></h1>
                <ul className="mt-3 mb-4 text-start">
                  <li>up to 8h per day</li>
                </ul>
                <a href="https://buy.stripe.com/3cs7vUdr86JN5BCdQU" target="_blank" className="w-100 btn btn-lg btn-primary">Choose Dev. Month</a>
              </div>
            </div>
          </div>
          <ul className="mt-3 mb-4 text-start col-4 offset-5">
            <li>Ruby Full Stack</li>
            <li>Node Full Stack</li>
            <li>PHP Full Stack</li>
            <li>Java Full Stack</li>
            <li>Mobile Development</li>
          </ul>
        </div>

        <h2 className="display-6 text-center mb-4 mt-5 pt-5">Compare plans</h2>

        <div className="table-responsive py-5 my-5">
          <table className="table text-center">
            <thead>
              <tr>
                <th style={{width: '34%'}}></th>
                <th style={{width: '22%'}}>Support</th>
                <th style={{width: '22%'}}>Growth</th>
                <th style={{width: '22%'}}>Innovation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="text-start">Monthly success calls</th>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
              </tr>
              <tr>
                <th scope="row" className="text-start">Dedicated CTO for your team</th>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
              </tr>
              <tr>
                <th scope="row" className="text-start">Small tech improvements</th>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
              </tr>
              <tr>
                <th scope="row" className="text-start">Direction and strategy consulting</th>
                <td></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
              </tr>
              <tr>
                <th scope="row" className="text-start">Custom landing pages</th>
                <td></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
              </tr>
              <tr>
                <th scope="row" className="text-start">UI/UX design and branding</th>
                <td></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
              </tr>
              <tr>
                <th scope="row" className="text-start">Software setup and automations</th>
                <td></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
              </tr>
              <tr>
                <th scope="row" className="text-start">Minimum Viable Product Design</th>
                <td></td>
                <td></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
              </tr>
              <tr>
                <th scope="row" className="text-start">Small phase custom builds</th>
                <td></td>
                <td></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
              </tr>
              <tr>
                <th scope="row" className="text-start">Wireframing and prototyping</th>
                <td></td>
                <td></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
              </tr>
              <tr>
                <th scope="row" className="text-start">Bug fixes, maintenance, backups</th>
                <td></td>
                <td></td>
                <td><FontAwesomeIcon icon={faCheck} /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>

  </Page>
}

export default Pricing;

          // Remote
          // Vanlife
          // Digital Nomad
