import React, { useEffect } from 'react';
import '../App.scss';
import "/node_modules/flag-icons/css/flag-icons.min.css"
import "/node_modules/masonry-layout/masonry"
import Profile from '../components/Profile';
import Tweets from '../components/Tweets';

import Heading from '../components/Heading';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

import Remote from '../components/Remote';
import Promotions from '../components/Promotions';
import Technology from '../components/Technology';
import Testimonials from '../components/Testimonials';
import Mentorship from '../components/Mentorship';
import Media from '../components/Media';
import Connect from '../components/Connect';

function Home() {
  useEffect(() => {
      document.title = 'Radd Studio Inc. // web .:. software .:. ideas'
  })
  return (
    <main className="Home">
      <Heading />
      <Technology />
      <Mentorship />
      <Pricing />
      <Promotions /> 
      <Media />
      <Remote />
      <Testimonials />
      <Connect />
      <Footer />
    </main>
  );
}

export default Home;



