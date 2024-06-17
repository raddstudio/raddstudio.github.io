import Page from './Page';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

const Technology = () => {
  return <Page section="technology">
    <Row>
      <Col>
        <div className="px-4 py-5 my-5 text-center">
          <h1 className="display-5 fw-bold">Technology</h1>
          <div className="col-lg-6 mx-auto my-5">
            <p className="lead mb-4">Since the 90s, we have been getting creative with web and software design and development. At first it was just for fun and out of curiosity, but we have carried that same energy forward an entire career later. Process, architecture, design, and development has been in the spotlight on the daily. We wouldnt have it anyother way.</p>
            <p className="mt-5">Some tools that we love:</p>
            <span><FontAwesomeIcon icon={['fab',"js"]} size="2xl" className="m-5" /></span>
            <span><FontAwesomeIcon icon={['fab',"node-js"]} size="2xl" className="m-5" /></span>
            <span><img id="rubyIcon" className="m-5 fa-2xl" src="/images/ruby.png"/></span>
            <span><img className="mx-3 my-5 fa-2xl" src="/images/rails.png" /></span>
            <span><FontAwesomeIcon icon={['fab',"react"]} size="2xl" className="m-5" /></span>
            <span><FontAwesomeIcon icon={['fab',"figma"]} size="2xl" className="m-5" /></span>
            <span><FontAwesomeIcon icon={['fab',"atlassian"]} size="2xl" className="m-5" /></span>
            <span><FontAwesomeIcon icon={['fab',"github"]} size="2xl" className="m-5" /></span>
            <span><FontAwesomeIcon icon={['fab',"digital-ocean"]} size="2xl" className="m-5" /></span>
            <span><FontAwesomeIcon icon={['fab',"cloudflare"]} size="2xl" className="m-5" /></span>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <a href="#connect" className="btn btn-primary btn-lg px-4 gap-3">Connect</a>
              <a target="substack" href="https://raddstudio.substack.com/" className="btn btn-outline-secondary btn-lg px-4">Learn more</a>
            </div>
          </div>
          <div className="overflow-hidden" style={{maxHeight: '30vh'}}>
            <div className="px-5">
              <img src="/images/evedo_desk.jpg" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy" />
            </div>
          </div>
        </div>
      </Col>
    </Row>
    <Row>
      <Col>
        <div className="text-center">
          <div className="col">
            <p>Some companies that we put our blood, sweat, and tears into over the years:</p>
          </div>
        </div>
      </Col>
    </Row>
    <div className="container">
      <Row className="text-start justify-content-center my-5 ms-1">
        <Col sm="6" lg="4" xxl="3">
          <Card className="my-2">
            <Card.Body>
              <Card.Title>TNS-Smart.net</Card.Title>
              <Card.Text>
                 A white label ATM switch connecting vendors to the major 6 Banks of Canada, and specializing on Casino services.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <Badge pill bg="light" className="text-black">Fin-Tech</Badge>
                <Badge pill bg="light" className="text-black">Javascript</Badge>
                <Badge pill bg="light" className="text-black">ASP.net</Badge>
                <Badge pill bg="light" className="text-black">C#.net</Badge>
                <Badge pill bg="light" className="text-black">C++</Badge>
                <Badge pill bg="light" className="text-black">MSSQL</Badge>
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="https://www.crunchbase.com/organization/tns-smart-network" target="_blank">Crunchbase</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="6" lg="4" xxl="3">
          <Card className="my-2">
            <Card.Body>
              <Card.Title>Threshold-FTI</Card.Title>
              <Card.Text>
                 An ATM switch service that provides services the major 6 Banks of Canada.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <Badge pill bg="light" className="text-black">Fin-Tech</Badge>
                <Badge pill bg="light" className="text-black">Javascript</Badge>
                <Badge pill bg="light" className="text-black">ASP.net</Badge>
                <Badge pill bg="light" className="text-black">C#.net</Badge>
                <Badge pill bg="light" className="text-black">MSSQL</Badge>
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="https://www.crunchbase.com/organization/threshold-financial-technologies-inc" target="_blank">Crunchbase</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="6" lg="4" xxl="3">
          <Card className="my-2">
            <Card.Body>
              <Card.Title>Patientway</Card.Title>
              <Card.Text>
                A self-service suite of products that helps build a better experience for your hospital visits.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <Badge pill bg="light" className="text-black">Healthcare Tech</Badge>
                <Badge pill bg="light" className="text-black">Javascript</Badge>
                <Badge pill bg="light" className="text-black">SVG</Badge>
                <Badge pill bg="light" className="text-black">Ruby on Rails</Badge>
                <Badge pill bg="light" className="text-black">MongoDB</Badge>
                <Badge pill bg="light" className="text-black">PostgreSQL</Badge>
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="https://www.crunchbase.com/organization/patientway" target="_blank">Crunchbase</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="6" lg="4" xxl="3">
          <Card className="my-2">
            <Card.Body>
              <Card.Title>One Move Technologies</Card.Title>
              <Card.Text>
                 An e-conveyance system to manage & assemble legal documents needed in the sale of real estate 
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <Badge pill bg="light" className="text-black">Real Estate Tech</Badge>
                <Badge pill bg="light" className="text-black">Javascript</Badge>
                <Badge pill bg="light" className="text-black">ASP.net</Badge>
                <Badge pill bg="light" className="text-black">C#.net</Badge>
                <Badge pill bg="light" className="text-black">Ruby on Rails</Badge>
                <Badge pill bg="light" className="text-black">PostgreSQL</Badge>
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="https://www.crunchbase.com/organization/onemove-technologies" target="_blank">Crunchbase</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="6" lg="4" xxl="3">
          <Card className="my-2">
            <Card.Body>
              <Card.Title>Nomo-Fomo</Card.Title>
              <Card.Text>
                A social travel platform that allows you to plan your trips with friends
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <Badge pill bg="light" className="text-black">Travel Tech</Badge>
                <Badge pill bg="light" className="text-black">Javascript</Badge>
                <Badge pill bg="light" className="text-black">Ruby on Rails</Badge>
                <Badge pill bg="light" className="text-black">PostgreSQL</Badge>
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="https://www.crunchbase.com/organization/nomo-fomo" target="_blank">Crunchbase</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="6" lg="4" xxl="3">
          <Card className="my-2">
            <Card.Body>
              <Card.Title>Plentix.co</Card.Title>
              <Card.Text>
                A the global event platform For social explorers. Connect with like-minded people by discovering, booking, and sharing events.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <Badge pill bg="light" className="text-black">Event Tech</Badge>
                <Badge pill bg="light" className="text-black">Javascript</Badge>
                <Badge pill bg="light" className="text-black">PHP</Badge>
                <Badge pill bg="light" className="text-black">Node.js</Badge>
                <Badge pill bg="light" className="text-black">Express.js</Badge>
                <Badge pill bg="light" className="text-black">React.js</Badge>
                <Badge pill bg="light" className="text-black">Ruby on Rails</Badge>
                <Badge pill bg="light" className="text-black">PostgreSQL</Badge>
                <Badge pill bg="light" className="text-black">MongoDB</Badge>
                <Badge pill bg="light" className="text-black">Web3</Badge>
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="https://plentix.co">Plentix.co</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="6" lg="4" xxl="3">
          <Card className="my-2">
            <Card.Body>
              <Card.Title>Gigix.app</Card.Title>
              <Card.Text>
                A place where entertainers can benefit of getting more gigs by being discoverable. Entertainers can be any type of performers - speakers, dj's, singers, dancers, etc.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <Badge pill bg="light" className="text-black">Event Tech</Badge>
                <Badge pill bg="light" className="text-black">Javascript</Badge>
                <Badge pill bg="light" className="text-black">React.js</Badge>
                <Badge pill bg="light" className="text-black">Ruby on Rails</Badge>
                <Badge pill bg="light" className="text-black">PostgreSQL</Badge>
                <Badge pill bg="light" className="text-black">Web3</Badge>
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="https://gigix.app">Gigix.app</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="6" lg="4" xxl="3">
          <Card className="my-2">
            <Card.Body>
              <Card.Title>Fragmint</Card.Title>
              <Card.Text>
                DAO Tools to drive your community through your NFT programs
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <Badge pill bg="light" className="text-black">Entertainment</Badge>
                <Badge pill bg="light" className="text-black">Javascript</Badge>
                <Badge pill bg="light" className="text-black">Node.js</Badge>
                <Badge pill bg="light" className="text-black">Express.js</Badge>
                <Badge pill bg="light" className="text-black">React.js</Badge>
                <Badge pill bg="light" className="text-black">MongoDB</Badge>
                <Badge pill bg="light" className="text-black">Web3</Badge>
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="https://fragmint.com">Fragmint.com</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="text-center">
            <div className="col mb-5">
              <p>..and many more contributed to, with love❣️</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </Page>
}

export default Technology;
