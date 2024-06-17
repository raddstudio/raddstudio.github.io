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

function Privacy() {
  useEffect(() => {
      document.title = 'Radd Studio Inc. // Privacy'
  })
  return (
    <Page section="privacy" className="py-5 my-5">
      <div className="container py-5 my-5">
        <main>
          <div class="row my-5 py-5 text-start section">
            <div class="col-12">
              <div class="margin-bottom margin-small">
                <h1 class="heading-style-h3">Privacy Policy</h1>
              </div>
              <div class="w-richtext">
                <p>At Radd Studio Ltd, we are committed to protecting the privacy of our users. This Privacy Policy explains how we collect, use, and disclose information that we gather about visitors to our website.</p>
                <p>‍</p>
                <h6>Information Collection and Use</h6>
                <p>We collect information that you provide to us voluntarily through our website, such as when you fill out a contact form, or sign up for our newsletter, or register for our free resources and online courses. This information may include your name, email address, and other contact information. We use this information to provide you with the services and resources that you request, and to keep you informed about other relevant services and resources that we offer.</p>
                <p>‍</p>
                <p>We also use cookies and other tracking technologies to collect information about your use of our website, such as the pages you visit and the links you click on. This information helps us to understand how visitors use our website and to improve our website's performance. We also use tracking codes like Facebook pixel and TikTok pixel, to help us understand how users interact with our website and to show you relevant ads on other websites.</p>
                <p>‍</p>
                <p>We may also include affiliate links on our website that redirect you to other websites. These websites have their own privacy policies and we are not responsible for their practices. We encourage you to review the privacy policies of these websites before providing any personal information.</p>
                <p>‍</p>
                <h6>Information Sharing and Disclosure</h6>
                <p>We do not sell or rent your personal information to third parties. We may share your information with third parties only in the following circumstances:</p>
                <ul role="list">
                  <li>We may share your information with third-party service providers that help us to operate our website or conduct our business, such as hosting companies or email service providers.</li>
                  <li>We may disclose your information if required to do so by law or in response to a subpoena, court order, or other legal process.</li>
                </ul>
                <h6>Security</h6>
                <p>We take reasonable measures to protect the security of the information that we collect, but please note that no website or internet transmission is ever completely secure or error-free.</p>
                <p>‍</p>
                <h6>Changes to this Policy</h6>
                <p>We may update this Privacy Policy from time to time to reflect changes to our information practices. We will post the updated policy on our website, and we encourage you to review the policy periodically to stay informed about our privacy practices.</p>
                <p>‍</p>
                <h6>Contact Us</h6>
                <p>If you have any questions or concerns about this Privacy Policy or our information practices, please contact us by email at:</p>
                <p>Email: 
                  <a href="mailto:privacy@raddstudio.com">info@raddstudio.com</a>
                </p>
                <p>Effective Date: 01/01/2023</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Page>
  );
}

export default Privacy;
