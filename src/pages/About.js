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

function About() {
  useEffect(() => {
      document.title = 'Radd Studio Inc. // About'
  })
  return (
    <>
      <Page section="About" style={{background: "url(/images/photography/me_45430644_2240744512835237_4030593313194292404_n.jpeg) no-repeat 30% 100% fixed"}}>
        <div className="container col-xxl-8 offset-xxl-2 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5 my-5">
            <div className="col-lg-6 offset-lg-6">
              <div className="overflow-hidden" style={{minHeight: '3vh'}}>
              </div>

              <div className="text-start bg-light border rounded-3 p-5">
                <h1 className="fw-bold lh-1 mb-1">Who Loves You?</h1>
                <h4 className="lh-1 mb-3">...and who do you love?</h4>
                <p className="lead">It's Us! You just may not know it yet.</p>
                <p>Since the 90's, we have been building cool things out of the web.</p>
                <p>We still carry that love of building; like a kid playing with LEGO; the only difference is that now; we build the blocks, and design the sets, too!</p>
                <p>What should we build next? Thats up to you!</p>
                <div className="d-grid gap-2">
                  <a href="#owners" className="btn btn-primary btn-lg col-12 px-4 me-md-2">I'm Product Owner with a growing team!</a>
                  <a href="#nomads" className="btn btn-outline-secondary btn-lg col-12 px-4">I need accountability in my life!</a>
                  <a href="#leaders" className="btn btn-outline-secondary btn-lg col-12 px-4">I'm a Leader, and I need a clone!</a>
                </div>
              </div>

              <div className="overflow-hidden" style={{minHeight: '80vh'}}>
              </div>

            </div>
          </div>
        </div>
      </Page>
      <Page section="owners" className="py-5 my-5">
        <div className="container">
          <div className="row mb-3 text-center">
            <div className="col-12">
              <div className="overflow-hidden" style={{minHeight: '20vh'}}></div>
              
              <h2 className="display-6 mb-4 mt-5 pt-5">Product Owners</h2>
              <p>As product owners, we know that its important to have a solid vision of where you are, where you are going, and where you want to be.</p><p>From Concept, to Road-Map, we are there for you. </p>
              
            </div>
          </div>
        </div>
      </Page>
      <Page section="nomads" className="py-5 my-5">
        <div className="container">
          <div className="row mb-3 text-center">
            <div className="col-12">
              <div className="overflow-hidden" style={{minHeight: '20vh'}}></div>
              <h2 className="display-6 mb-4 mt-5 pt-5">Nomads</h2>
              <p>Nomadism may be a new concept to some, but to others, its a way of life.</p><p>If you're trying to figure out how to become location independent, or have been at it for a decade and know how isolating building a buisiness is whilst on the move, we can help.</p>              
            </div>
          </div>
        </div>
      </Page>
      <Page section="leaders" className="py-5 my-5">
        <div className="container">
          <div className="row mb-3 text-center">
            <div className="col-12">
              <div className="overflow-hidden" style={{minHeight: '20vh'}}></div>
              
              <h2 className="display-6 mb-4 mt-5 pt-5">Leaders</h2>
              <p>Maintaining a vision, running a company, building a team, and driving process is a lot of work. </p><p>If it's your first time, you should know that you dont have to do it alone, and if its your twelvth time, you know you just can not do it alone.</p>
            </div>
          </div>
        </div>
      </Page>
      <Page section="" className="py-5 my-5">
        <div className="container">
          <div className="row my-5 py-5">
            <div className="col-12 text-center my-5 py-5">
              <div className="overflow-hidden" style={{minHeight: '20vh'}}></div>
              <small>This is what we do. <a href="/get-started.html" target="_blank">Get Started</a> with us today!</small>
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

export default About;



