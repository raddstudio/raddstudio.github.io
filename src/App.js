import './App.scss';
import "/node_modules/flag-icons/css/flag-icons.min.css"
import "/node_modules/masonry-layout/masonry"
import Profile from './Profile';
import Tweets from './Tweets';

import Heading from './Heading';
import Pricing from './Pricing';
import Footer from './Footer';

import Technology from './Technology';
import Travel from './Travel';
import Mentorship from './Mentorship';
import Music from './Music';
import Photography from './Photography';
import Rewilding from './Rewilding';
import Media from './Media';
import Connect from './Connect';

function App() {
  return (
    <main className="App">
      <Heading />
      <Technology />
      <Mentorship />
      <Pricing />
      <Media />
      <Connect />
      <Footer />
    </main>
  );
}

export default App;



