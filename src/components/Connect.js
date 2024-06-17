import Page from './Page';
import Profile from './Profile';
import Nyan from './nyan.js';

const Connect = () => {
  return <Page section="connect">
  			<Profile />
	        <Nyan />
        </Page>
  
}

export default Connect;