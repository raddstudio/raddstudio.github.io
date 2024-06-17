import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, faEnvelope, faStack } from '@fortawesome/free-solid-svg-icons'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Page from './Page';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Heading = () => {
  library.add(fab, faCoffee, faEnvelope);
  return <Carousel variant="dark" style={{maxHeight: '1000px'}}>
      <Carousel.Item>
        <Page>
            <Row>
              <Col className="py-2 py-lg-5">
                <div className="col-md-10 offset-md-1 col-xxl-8 offset-xxl-2 px-4 py-2">
                  <div className="row align-items-center my-5 my-sm-0 py-2">
                    <div className="col-lg-7 text-center text-lg-start">
                      <h1 className="display-4 fw-bold lh-1 mb-3">Bridging the Gaps</h1>
                      <div className="col-lg-10 fs-4">Web .:. Software .:. Ideas <br />
                      <small>Welcome to Radd Studio Inc.</small></div>
                    </div>
                    <div className="col-md-10 mx-auto col-lg-5 text-center">
                      <Card className="text-start">
                        <Card.Img variant="top" src="/images/original_logo.png" />
                        <Card.Body>
                          <Card.Title>🎉 Celebrating 15 years</Card.Title>
                          <Card.Text><em>of chasing dreams, with you 🙏 </em></Card.Text>
                          <Card.Text><strong>Rapid Application Design and Development</strong></Card.Text>
                          <Card.Text><small>A Boutique Studio Specializing in Product and Tech</small></Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                          <ListGroup.Item>Fin-Tech</ListGroup.Item>
                          <ListGroup.Item>Healthcare Tech</ListGroup.Item>
                          <ListGroup.Item>Real Estate Tech</ListGroup.Item>
                          <ListGroup.Item>Travel Tech</ListGroup.Item>
                          <ListGroup.Item>Event Tech</ListGroup.Item>
                          <ListGroup.Item>Entertainment Tech</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                          <Card.Link href="#connect">Connect</Card.Link>
                          <Card.Link href="https://raddstudio.substack.com/its-a-celebration" target="_blank">Learn more</Card.Link>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          <Carousel.Caption>
          </Carousel.Caption>
        </Page>
      </Carousel.Item>
      <Carousel.Item>
        <Page>
          <Row className="py-2">
            <Col className="py-2">
              <div className="px-4 pt-5 my-5 text-center border-bottom">
                <h1 className="display-4 fw-bold">What is a Fractional CTO?</h1>
                <div className="col-lg-6 mx-auto">
                  <p className="lead mb-4">Not all startups need a Tech Founder, and you may not have to commit to one! Fractional CTO's bring decades of experience, and implement processes to run your business.</p>
                  <p>Because you have a business to run, work with us month by month, and get started today</p>
                  <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <Card.Link href="https://raddstudio.substack.com/p/what-is-a-fractional-cto" className="btn btn-primary btn-lg px-4 me-sm-3" target="_blank">Learn more</Card.Link>
                    <Card.Link href="cto-guide.html" className="btn btn-outline-secondary btn-lg px-4" target="_blank">CTO Guide</Card.Link>
                  </div>
                </div>
                <div className="overflow-hidden" style={{maxHeight: '30vh'}}>
                  <div className=" px-5">
                    <img src="/images/epic_win.jpeg" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Epic WIN Hire Radd Studio today" width="700" height="500" loading="lazy" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Page>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Page>
          <Row className="py-2 my-5">
            <Col className="my-5 my-sm-0 py-2">
              <div className="col-md-10 offset-md-1 col-xxl-8 offset-xxl-2 px-4 py-2">
                <div className="row flex-lg-row align-items-center g-5 py-2 py-lg-5 text-start">
                  <div className="col-12 col-lg-5 py-2 py-lg-5">
                    <Card>
                      <Card.Img variant="top" src="/images/twitter.png" />
                      <Card.Body>
                        <Card.Title>Twitter</Card.Title>
                        <Card.Text>
                          Weekly shares of Remote Work, Dev Memes, Self Development.
                        </Card.Text>
                        <Card.Link className="btn btn-primary">Follow</Card.Link>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-lg-7 col-xxl-5">
                    <h1 className="display-5 fw-bold lh-1 mb-3">Tweet. Tweet.</h1>
                    <p className="lead">Join us for interesting updates in the realms of Technology, Culture, and Industry</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                      <Card.Link href="https://twitter.com/raddstudio" className="btn btn-primary btn-lg px-4 me-md-2" target="_blank">Follow</Card.Link>
                      <Card.Link href="#connect" className="btn btn-outline-secondary btn-lg px-4">More</Card.Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Page>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Page>
          <Row className="py-2">
            <Col className="py-2">
              <div className="px-4 pt-5 my-5 text-center border-bottom">
                <h1 className="display-4 fw-bold">Are you an entrepreneur?</h1>
                <div className="col-lg-6 mx-auto">
                  <p className="lead mb-4">We want to hear from you, fill out our survey and help us get better!</p>
                  <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <Card.Link href="/survey" className="btn btn-outline-secondary btn-lg px-4" target="_blank">Lets do it!</Card.Link>
                  </div>
                </div>
                <div className="overflow-hidden" style={{maxHeight: '30vh'}}>
                  <div className=" px-5">
                    <img src="/images/survey.png" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Epic WIN Hire Radd Studio today" width="700" height="500" loading="lazy" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Page>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Page>
          <Row className="py-2 my-5">
            <Col className="my-5 my-sm-0 py-2">
              <div className="col-md-10 offset-md-1 col-xxl-8 offset-xxl-2 px-4 py-2">
                <div className="row flex-lg-row align-items-center g-5 py-2 py-lg-5 text-start">
                  <div className="col-12 col-lg-5 py-2 py-lg-5">
                    <Card>
                      <Card.Img variant="top" src="/images/linkedin.png" />
                      <Card.Body>
                        <Card.Title>LinkedIn</Card.Title>
                        <Card.Text>
                          Weekly shares of Remote Work, Dev Memes, Professional Guidance and Industry News.
                        </Card.Text>
                        <Card.Link href="https://linkedin.com/companies/raddstudio" className="btn btn-primary">Follow</Card.Link>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-lg-5 col-xl-7">
                    <h1 className="display-5 fw-bold lh-1 mb-3">Stay TunedIn</h1>
                    <p className="lead">Join us for interesting updates in the realms of Technology, Industry, Culture</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                      <Card.Link href="https://linkedin.com/companies/raddstudio" className="btn btn-primary btn-lg px-4 me-md-2" target="_blank">Follow</Card.Link>
                      <Card.Link href="#connect" variant="outline-secondary" className="btn btn-outline-secondary btn-lg px-4">More</Card.Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Page>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Page>
          <Row className="py-2">
            <Col className="py-2">
              <div className="px-4 pt-5 my-5 text-center border-bottom">
                <h1 className="display-4 fw-bold">Founder Institute</h1>
                <div className="col-lg-6 mx-auto">
                  <p className="lead">We Are In! If you are too, reach out to us!</p>
                  <p className="mb-4">Special opportunity available to you 🎉</p>
                  <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <Card.Link href="/fi.html" className="btn btn-primary btn-lg px-4 me-sm-3" target="_blank">Learn more</Card.Link>
                    <Card.Link href="/pitch.html" className="btn btn-outline-secondary btn-lg px-4" target="_blank">Latest pitch deck</Card.Link>
                    <Card.Link href="mailto:fi@raddstudio.com?subject=I am from the <YOUR COHORT> of fi.co and we should work together! Whats your offer?" className="btn btn-outline-primary btn-lg px-4">Send me my code!</Card.Link>
                  </div>
                </div>
                <div className="overflow-hidden" style={{maxHeight: '30vh'}}>
                  <div className=" px-5">
                    <img src="/images/fi.png" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Epic WIN Hire Radd Studio today" width="700" height="500" loading="lazy" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Page>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Page>
          <Row className="py-2">
            <Col className="py-2 py-lg-5 my-lg-5 col-md-10 offset-md-1 col-xxl-8 offset-xxl-2">
              <div className="my-5">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg text-start">
                  <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 className="display-4 fw-bold lh-1">Recent Grad?</h1>
                    <p className="lead">Special love for recent grads of codecamps</p>
                    <p>Have you graduated from a coding camp in the last 5 years? Codecore? Lighthouse Labs? Something similar? We are champions of the start!</p><p>You have mastered the app, now you need to turn it into a product, and a product company. Thats where we come in.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3 text-center">
                      <a href="https://raddstudio.substack.com/p/code-camp-grads" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold" target="_blank">Yes! Tell me more</a>
                      <a href="https://raddstudio.substack.com/p/eat-drink-and-be-merry-for-tomorrow" className="btn btn-outline-secondary btn-lg px-4" target="_blank">Deals</a>
                    </div>
                  </div>
                  <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                      <img className="rounded-lg-3" src="/images/slack.png" alt="" width="720" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Page>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Page>
          <Row className="py-2">
            <Col className="py-2">
              <div className="px-4 pt-5 my-5 text-center border-bottom">
                <h1 className="display-4 fw-bold">Nomad Camp</h1>
                <div className="col-lg-6 mx-auto">
                  <div className="lead">If you want to go fast, go solo. If you want to go far, get together!</div>
                  <p className="mb-4">We help solopreneurs and digital nomads stay accountable to themselves nomad'er where they are.</p>
                    
                  <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <a href="https://raddstudio.substack.com/p/get-shit-done" className="btn btn-primary btn-lg px-4 me-sm-3" target="_blank">Learn more</a>
                    <a href="get-started.html" className="btn btn-outline-secondary btn-lg px-4" target="_blank">Get Started!</a>
                  </div>
                </div>
                <div className="overflow-hidden" style={{maxHeight: '30vh'}}>
                  <div className="">
                    <img src="/images/creative_42174952_1928808910753753_8553996019739303303_n.jpeg" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Page>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Page>
          <Row className="py-2">
            <Col className="py-2 py-lg-5 my-lg-5 col-md-10 offset-md-1 col-xxl-8 offset-xxl-2">
              <div className=" my-5">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg text-start">
                  <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 className="display-4 fw-bold lh-1">Pre-seed Startup?</h1>
                    <p className="lead">Decades of experience, at your finger tips. Get slack access to us, M-F & 9-5 (GMT) for only €999/month</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                      <Card.Link href="https://buy.stripe.com/28oeYmfzg0lp3tucMM" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold" target="_blank">Subscribe</Card.Link>
                      <Card.Link href="https://raddstudio.substack.com/p/slack-access" className="btn btn-outline-secondary btn-lg px-4">Learn more</Card.Link>
                    </div>
                  </div>
                  <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                      <img className="rounded-lg-3" src="/images/slack.png" alt="" width="720" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Page>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
}

export default Heading;

// Welcome to RaddStudio!
// Connect with me on Linkedin 
// What is a Fractional CTO?
// Follow me on Twitter
// Pre-seed startup?
// Follow me on Instagram
// The Cobbler's' New Shoes
// Recent Grad?
// Follow me on Mixcloud
// Follow / Sign up on Gigix
