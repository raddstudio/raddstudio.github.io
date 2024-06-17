import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, faEnvelope, faStack } from '@fortawesome/free-solid-svg-icons'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Profile = () => {
	let names = ['teamster','rouge','transit','burningman','revy','kickinghorse','lol'];
	let photos = ['3D8A527E','3D8A5279','3D8A5277','3D8A5286','3D8A5288','3D8A528F','E4FDEC17'];
	let images = {'3D8A527E':'teamster','3D8A5279':'rouge','3D8A5277':'transit','3D8A5286':'burningman','3D8A5288':'revy','3D8A528F':'kickinghorse','E4FDEC17':'lol'};
	let socials = [
		{lib: 'fab', icon: 'linkedin', url: 'http://ca.linkedin.com/in/raddrick/', alt: 'connect via linkedin'},
		{lib: 'fab', icon: 'angellist', url: 'https://wellfound.com/u/radd_rick', alt: 'connect via angellist'},
		{lib: 'fab', icon: 'github', url: 'http://github.com/raddrick', alt: 'see what im watching on github'},
		{lib: 'fab', icon: 'stack-overflow', url: 'https://stackoverflow.com/users/1103617/raddrick', alt: 'checkout my stackoverflow Q/A'},
		{lib: 'fab', icon: 'stack-exchange', url: 'https://substack.com/profile/104632053-rick-graham', alt: 'subscribe to my substacks'},
		{lib: 'fab', icon: 'instagram', url: 'http://instagram.com/raddrick', alt: 'follow on instagram'},
		{lib: 'fab', icon: 'facebook', url: 'http://facebook.com/raddstudio', alt: 'follow us on facebook'},
		{lib: 'fas', icon: 'envelope', url: 'mailto:rick@raddstudio.com', alt: 'connect via email'},
	];
	const shuffle = (array) => {
	  let currentIndex = array.length,  randomIndex;

	  // While there remain elements to shuffle.
	  while (currentIndex != 0) {

	    // Pick a remaining element.
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex--;

	    // And swap it with the current element.
	    [array[currentIndex], array[randomIndex]] = [
	      array[randomIndex], array[currentIndex]];
	  }

	  return array;
	}


	return  <div style={{position:'absolute'}} className="container-fluid text-white">
		<div className="col-12 pt-5 mt-sm-5 mt-md-2 mt-lg-1 connect">
			<Row className="justify-content-center">
			 	<div className="col-4 col-sm-3 col-md-2 col-xxl-1">
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			           width="100%" height="100%" viewBox="0 0 221 221" style={{enableBackground:'new 0 0 221 221'}} xmlSpace="preserve">
			           <g style={{clipPath:`circle(110,110,111)`}}>
			           { shuffle(Object.keys(images)).map((k,i) => 
				            <g className={`avy ${images[k]}`} key={i}>
				                <image style={{display:'inline',overflow:'visible'}} width="219" height="221" xlinkHref={`\\images\\${k}.png`} key={i}>
									<animate id={`ani1${i}`}
						               attributeName="opacity"
						               from="1" to="0" dur="1s"
						               begin={`${(Object.keys(images).length-i)*10}s`} />
					               <animate id={`ani2${i}`}
						               attributeName="opacity"
						               from="0" to="0" dur={`${Object.keys(images).length*8}s`}
						               begin={`ani1${i}.end`} />
	   								<animate id={`ani3${i}`}
						               attributeName="opacity"
						               from="0" to="1" dur="1s"
						               begin={`ani2${i}.end`} />
				                </image>
				            </g>
			            )}
			          </g>
			        </svg>
		          &nbsp;
		        </div>
	        </Row>
	        <Row className="justify-content-center text-center">
	              <h1 className="name">Rick Graham</h1>
	        </Row>
	        <Row className="justify-content-center text-center mb-sm-5">
	            <p className="detail">Startups | R&D | Process  <br />Building dreams.</p>
	        	<div className="col-12 mb-sm-2">
	        		Seeking Mentorship? Check out <a href="https://marketplace.mentorly.co/en/mentors/raddrick" target="_blank" alt="Find a Mentor">Mentorly</a>
	          	</div>
	        </Row>
	        <div className="row mt-5 justify-content-center text-center">
		        <div className="col-lg-8 col-xl-6 mt-5">
			        <Row className="justify-content-center mt-5">
			        	<div className="col-10 mt-5">
			        		<Row className="justify-content-center mt-sm-5">
					        { socials.map((s,i) => 
					            <div className="col-3 col-lg-1 mt-2" key={i}>
					            	<a href={s.url} target="_blank" alt={s.alt}>
					                    <FontAwesomeIcon icon={[s.lib,s.icon]} size="2xl" className="mr-5 mt-5" />
					                </a>
					            </div>
					        )}
					        </Row>
				        </div>
			        </Row>
			        <Row className="justify-content-center mt-1">
			        	<div className="col-10 mt-5">
			        		<p>Connect with us through your choice social or email (icons/links above) 🚀</p>
			        	</div>
			        </Row>
		        </div>
	        </div>
        </div>
      </div>
}
export default Profile;
