import React, { useEffect } from 'react';
import '../App.scss';
import "/node_modules/flag-icons/css/flag-icons.min.css"
import "/node_modules/masonry-layout/masonry"
import Page from '../components/Page';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Affiliates() {
  useEffect(() => {
      document.title = 'Radd Studio Inc. // Affiliates'
  })
  return (
    <>
    <Page section="affiliates" style={{background: "url(/images/creative_44644104_325374434720044_2268659194543660993_n.jpeg) no-repeat center center fixed"}}>
      <Row className="py-2 py-lg-5">
        <Col className="py-2 py-lg-5">
          <div className="px-md-4 pt-5 my-5 text-center">
            <div className="overflow-hidden" style={{minHeight: '80vh'}}>
            </div>
            <div className="col-md-8 offset-md-2 text-white">
              <div className="p-5 m-5 bg-dark rounded">
                <h1 className="display-4 fw-bold">We are on a Mission. 🚀</h1>
                <div className="col-lg-6 mx-auto">
                  <div className="lead mb-4">Our affiliates network makes it Possible.</div>
                  <div className="d-grid gap-2 d-sm-flex justify-content-sm-center p-5">
                    <a href="https://raddstudio.substack.com/p/our-affiliates-program" className="btn btn-primary btn-lg px-4 me-sm-3" target="_blank">Learn more</a>
                    <a href="#join" className="btn btn-outline-secondary btn-lg px-4">Join</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden" style={{minHeight: '80vh'}}>
            </div>
          </div>
        </Col>
      </Row>
    </Page>
    <Page section="affiliates" className="py-5 my-5">
      <div className="container">
        <div className="row mb-3 text-center">
          <div className="col-12">
            <h2 className="display-6 mb-4 mt-5 pt-5">Affiliate Fees</h2>
            <p>We offer <i>Revenue Sharing</i> programs for registered affiliates! <br /> If you know anyone who may benefit from working with us, have them connect with us and we will share the love!</p>
            <div className="table-responsive text-start py-5 my-5 col-12">
              <table className="table w-100">
                <thead>
                  <tr className="text-center">
                    <th style={{width: "50%", textAlign: "left"}}>Product</th>
                    <th style={{width: "22%", textAlign: "left"}}>Fare</th>
                    <th style={{width: "22%", textAlign: "right"}}>Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Chief Technology Officer</th>
                    <td>$20,000</td>
                    <td className="text-end">$1,000<small><sup>2</sup></small></td>
                  </tr>
                  <tr>
                    <th scope="row">Trusted Advisor</th>
                    <td>$2,000</td>
                    <td className="text-end">$100<small><sup>1</sup></small></td>
                  </tr>
                  <tr>
                    <th scope="row">On Staff</th>
                    <td>$400 daily</td>
                    <td className="text-end">$10<small><sup>2</sup></small></td>
                  </tr>
                  <tr>
                    <th scope="row">Development Month</th>
                    <td>$13,600</td>
                    <td className="text-end">$750<small><sup>1</sup></small></td>
                  </tr>
                  <tr>
                    <th scope="row">Development Week</th>
                    <td>$3,500</td>
                    <td className="text-end">$500<small><sup>1</sup></small></td>
                  </tr>
                  <tr>
                    <th scope="row">Development Retainer</th>
                    <td>$5,000 / $10,000</td>
                    <td className="text-end">$500<small><sup>1</sup></small></td>
                  </tr>
                  <tr>
                    <th scope="row">Slack / Discord / Teams</th>
                    <td>$999</td>
                    <td className="text-end">$50</td>
                  </tr>
                  <tr>
                    <th scope="row">Sessions</th>
                    <td>$250</td>
                    <td className="text-end">$4</td>
                  </tr>
                  <tr>
                    <th scope="row">Innovate</th>
                    <td>$12,500</td>
                    <td className="text-end">$500<small><sup>1</sup></small></td>
                  </tr>
                  <tr>
                    <th scope="row">Grow</th>
                    <td>$3,750</td>
                    <td className="text-end">$100<small><sup>1</sup></small></td>
                  </tr>
                  <tr>
                    <th scope="row">Support</th>
                    <td>$1,250</td>
                    <td className="text-end">$50<small><sup>1</sup></small></td>
                  </tr>
                </tbody>
              </table>
              <small>
                <sup>1</sup> First time client
                <sup>2</sup> Each payday
              </small><br />
              <small>Share minimum $500 / between 30-60 days after revenue</small>
            </div>
          </div>
        </div>

        <div className="row my-5 py-5">
          <div className="col-12 text-center my-5 py-5">
            <small>Get Started with us today!</small>
            <div className="px-5">
              <img src="/images/329584141_1459576978114276_7798631343438351300_n.png" className="img-fluid rounded-3 mb-4" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </Page>
    </>
  );
}

export default Affiliates;



