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

function Clients() {
  useEffect(() => {
      document.title = 'Radd Studio Inc. // Clients'
  })
  return (
    <Page section="clients" className="py-5 my-5">
      <div className="container py-5 my-5">
      	
      </div>
    </Page>
  );
}

export default Clients;
