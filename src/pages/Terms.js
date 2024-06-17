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

function Terms() {
  useEffect(() => {
      document.title = 'Radd Studio Inc. // Terms'
  })
  return (
    <Page section="privacy" className="py-5 my-5">
      <div className="container py-5 my-5">
        <main>
          <div class="row my-5 py-5 text-start section">
            <div class="col-12">
        			<div class="margin-bottom margin-small">
        				<h1 class="heading-style-h3">Terms of Service</h1>
        			</div>
        			<div class="w-richtext">
        				<p>Welcome to the CTO Guide (the "Website"). The Website is provided by Radd Studio Ltd & ClickStudio.email, and these terms of service (the "Terms") govern your access to and use of the Website. By accessing or using the Website, you agree to be bound by these Terms.</p>
        				<p>‍</p>
        				<h6>Use of the Website. </h6>
        				<p>You may use the Website only for lawful purposes and in accordance with these Terms. You agree not to use the Website:</p>
        				<ul role="list">
        					<li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
        					<li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content, asking for personally identifiable information, or otherwise.</li>
        					<li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.</li>
        					<li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity.</li>
        				</ul>
        				<h6>Content on the Website.</h6>
        				<p>The Website may contain content that is provided by Radd Studio Ltd. or by third-parties. Radd Studio Ltd does not control or endorse any third-party content, and makes no representations or warranties of any kind regarding such content. You are responsible for complying with any terms or conditions associated with such third-party content.</p>
        				<p>‍</p>
        				<h6>Affiliate Links</h6>
        				<p>Our website includes affiliate links, which means that we may earn a commission from any purchases made through those links. We only promote products or services that align with our website's mission and values, and that we believe will be of value to our users. Our inclusion of affiliate links does not imply an endorsement of the products or services being promoted.</p>
        				<p>Please note that we are not responsible for the content or actions of the websites to which affiliate links redirect users, and that users use those websites at their own risk. We regularly review the affiliate programs, products and services we promote to ensure they align with our values and mission.</p>
        				<p>‍</p>
        				<h6>Intellectual Property. </h6>
        				<p>The Website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof), are owned by the Company, its licensors, or other providers of such material, and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
        				<p>‍</p>
        				<h6>Changes to the Terms of Service.</h6>
        				<p>The Company reserves the right, at its sole discretion, to modify or replace any of these Terms, or change, suspend, or discontinue the Website (including without limitation, the availability of any feature, database, or content) at any time by posting a notice on the Website or by sending you notice through the Website or via email. It is your responsibility to check these Terms periodically for changes. Your continued use of the Website following notice of any changes to these Terms constitutes acceptance of those changes.</p>
        				<p>‍</p>
        				<h6>Disclaimer of Warranties. </h6>
        				<p>The Website is provided on an "AS IS" and "AS AVAILABLE" basis. The Company makes no representations or warranties of any kind, express or implied, as to the operation of the Website or the information, content, materials, or products included on the Website. You expressly agree that your use of the Website is at your sole risk.</p>
        				<p>‍</p>
        				<h6>Limitation of Liability. </h6>
        				<p>In no event shall the Company, its directors, officers, employees, agents, partners, or suppliers be liable for any indirect, incidental, special, punitive, or consequential damages, or any loss of profits, data, use, or other intangibles, or the cost of procurement of substitute goods or services</p>
        				<p>‍</p>
        			</div>
        		</div>
        	</div>
        </main>
      </div>
    </Page>
  );
}

export default Terms;
