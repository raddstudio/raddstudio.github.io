import Page from './Page';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Testimonials = () => {
  return <Carousel variant="dark" style={{maxHeight: '1000px'}} className="py-5 text-white bg-dark">
      <Carousel.Item>
        <Page>
          <Row className="align-items-center m-5">
            <Col sm={{span:8, offset:2}} className="p-5 my-5">
              <div className="testimonial text-center">
                <div className="testimonial-image">
                  <img src="images/jared.png" alt="Jared Wiener, President" title="Jared Wiener" className="rounded-circle img-thumbnail" style={{width: '130px', height: '130px'}}/>
                </div>
                <div className="mt-3 mb-5"><h3>We’ve gotten great feedback!</h3></div>
                <div className="testimonial-body">
                  <blockquote>
                    <p>...from our customers about the new QuickBOLT.com “facelift” and ease of use already. Thank you for helping Mike and I become better leaders, I consider the experience a crash course in Project Mgmt and learning how to speak the language of Devs 101.</p>
                  </blockquote>
                  <div className="testimonial-info-1"><strong>Jared Wiener</strong></div>
                  <div className="testimonial-info-2">President Quickscrews / QuickBOLT</div>
                </div>
              </div>
            </Col>
          </Row>
        </Page>
      </Carousel.Item>
      <Carousel.Item>
        <Page>
            <Row className="align-items-center m-5">
              <Col sm={{span:8, offset:2}} className="p-5 my-5">
                <div className="testimonial text-center">
                  <div className="testimonial-image">
                    <img src="images/jash.png" alt="Jash Tracey, Solopreneur" title="Jash Tracey" className="rounded-circle img-thumbnail" style={{width: '130px', height: '130px'}}/>
                  </div>

                  <div className="mt-3 mb-5"><h3>You can't put a price on its value!</h3></div>
                  <div className="testimonial-body">
                    <blockquote>
                      <p>With Nomad Camp I am able to treat myself like a client, having someone tracking week by week helps me set goals and keeps me on track. It has been absolutely invaluable!</p>
                    </blockquote>
                    <div className="testimonial-info-1"><strong>Jash Tracey</strong></div>
                    <div className="testimonial-info-2">Founder, GNT Branding</div>
                  </div>
                </div>
              </Col>
            </Row>
          </Page>
        </Carousel.Item>
    </Carousel>
}

export default Testimonials;

          // Remote
          // Vanlife
          // Digital Nomad
