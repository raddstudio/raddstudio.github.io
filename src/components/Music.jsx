import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Page from './Page';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Music = () => {
  return <Page className="bg-dark" section="music">
    <div className="text-secondary px-4 py-5 mx-auto text-start" style={{background: "src('/images/IMG_3702.jpg') 50% 50% no-repeat"}}>
      <div className="container py-5 my-5">
        <Row>
          <div className="col-12 col-xl-3">
            <h1 className="display-4 fw-bold lh-1">We we're there! </h1>
            <div className="lead">Remember, its a marathon, not a sprint. Check my gigix profile for a special opportunity</div>
            <div>We've also been at this one for a while, from field parties to the club, we love to vibe on good music.</div><div>Multicultural flavours from around the block, Toronto leaves a good impression on those who know, what is what.</div>
            <div className="d-grid gap-2 d-sm-flex justify-content-md-start mb-4 mb-lg-3 mt-xxl-5 pt-xxl-4">
              <button type="button" className="btn btn-primary btn-lg col-12 col-sm-6 col-xl-12 fw-bold">Learn more</button>
              <a type="link" href="https://calendly.com/djrgb" className="btn btn-outline-secondary btn-lg col-12 col-sm-6 col-xl-12 px-4">Book</a>
            </div>
          </div>
          
          <Col xs="12" sm="6" md="4" xl="3" xxl="3" className="mb-2">
            <Card>
              <Card.Img variant="top" src="/images/mixcloud.png" />
              <Card.Body>
                <Card.Title>Mixcloud</Card.Title>
                <Card.Text>
                  Check out some of my mixes here
                </Card.Text>
                <a target="music" href="https://mixcloud.com/djrgb" className="btn btn-primary"><FontAwesomeIcon icon={['fab',"mixcloud"]} /> Follow</a>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4" xl="3" xxl="3" className="mb-2">
            <Card>
              <Card.Img variant="top" src="/images/gigix.png" />
              <Card.Body>
                <Card.Title>Checkout Gigix</Card.Title>
                <Card.Text>
                  SaaS Marketplace for Event Organizers, Venue Owners, and Entertainers
                </Card.Text>
                <a target="music" href="https://app.evedo.co/p/djrgb" className="btn btn-primary">Follow</a>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4" xl="3" xxl="3" className="mb-2">
            <Card>
              <Card.Img variant="top" src="/images/soundcloud.png" />
              <Card.Body>
                <Card.Title>Soundcloud</Card.Title>
                <Card.Text>
                  See who I'm following, and what I'm listening to on Soundcloud.
                </Card.Text>
                <a target="music" href="https://soundcloud.com/djrgb-ca" className="btn btn-primary"><FontAwesomeIcon icon={['fab',"soundcloud"]} /> Follow</a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  </Page>
}

export default Music;

          // DJing
          // Festivals
