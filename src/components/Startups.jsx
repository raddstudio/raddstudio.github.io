import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Startups = () => {
  return <Page>
    <h2>For Startups + Small Businesses</h2>
    <small>Fractional CTO</small>
    <ol>
      <li>pre-raise Startup Support</li>
      <ul>
        <li>
          - slack access to me 9-5 every business day
          - your devs, stakeholders, PMs can contact me.
          - no question is too big or too small
          - systems design, tech selection, tech questions, problem solving, hiring, recruitment, strategy…
          - avoid costly and stupid mistakes that many others have made before you
          - tap into 20+ years of experience.

          $1000/month
        </li>
      </ul>
      <li>
        <Row>
          <Col>
            Product Development
            <ul>
              <li>
                <h3>Business Blueprint</h3>
                <small>$10,000 - $20,000</small>
                <ul>
                  <li>
                    <h4>Detailed MVP</h4>
                    <ul>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </li>
              <li>
                <h3>Technical Blueprint</h3>
              </li>
              <li>
                <h3>CTO Leadership</h3>
              </li>
            </ul>
          </Col>
          <Col>
            Process Optimization/Automation
            <ul>
              <li>
                <h3>Process Deficiencies Audit</h3>
              </li>
              <li>
                <h3>Process Optimization</h3>
              </li>
              <li>
                <h3>Process Automation</h3>
              </li>
            </ul>
          </Col>
        </Row>
      </li>
    </ol>
  </Page>
}

export default Startups;