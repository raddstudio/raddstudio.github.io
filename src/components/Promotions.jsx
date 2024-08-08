
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

//<FontAwesomeIcon icon={solid('user-secret')} />
//<FontAwesomeIcon icon={regular('coffee')} />
//<FontAwesomeIcon icon={icon({name: 'coffee', style: 'solid'})} />
//<FontAwesomeIcon icon={brands('twitter')} />


import Page from './Page';

const Promotions = () => {
  const images = [
    { image:'',  name: 'Founder Institute', url: '/fi.html', size: '350%'},
    { image:'',  name: 'Fill Out Our Survey', url: '/survey', size: '100%'},
    { image:'',  name: 'Founder Advisor Agreement [FAST]', url: '/agreements/fast.pdf', size: '100%'},
    // { image:'',  name: 'Watch Pitch Demo', url: '/pitch.html', size: '200%'},
    { image:'',  name: 'CTO Guide', url: '/cto-guide.html', size: '150%'},
    // { image:'photography/hk_43817778_621301638265431_6174468599253341892_n.jpg',  name: 'Careers', url: '/careers.html', size: '250%'},
    // { image:'photography/hk_43985423_1083860391781324_457564329516359483_n.jpeg',  name: 'Interns', url: '/interns.html', size: '100%'},
    // { image:'photography/hk_44734732_2544176648956518_7536033727510464667_n.jpeg',  name: 'Web', url: '/web.html', size: '100%'},
    // { image:'photography/hk_46748544_432284710641724_3422203142141264470_n.jpeg',  name: 'Software', url: '/software.html', size: '100%'},
    // { image:'photography/hk_47692223_1899799370068706_5030814803794038734_n.jpeg',  name: 'Ideas', url: '/ideas.html', size: '100%'}
    ];
  return <Page section="promotions">
    <div className="bg-dark text-secondary px-4 py-5 text-center">
      <div className="py-5">
        <h1 className="display-5 fw-bold text-white">Resources</h1>
        {/*<div className="col-lg-6 mx-auto">
          <p className="fs-5 mb-4">For your ease of access</p>
        </div>*/}
        <div className="row">
          { images.map((item,i) => 
              <div className="col grid" key={i}>
                <a href={item.url} className="grid-item card card-cover overflow-hidden rounded-5 shadow-lg mt-3" style={{background: `url('/images/${item.image}') center center no-repeat`, backgroundSize: item.size}} target="_blank">
                  <div className="d-flex flex-column h-100 p-5 pb-3">
                    <ul className="d-flex list-unstyled my-5">
                      <li className="d-flex align-items-center">
                        🔗
                        <h1>{item.name}</h1>
                      </li>
                    </ul>
                </div>
              </a>
            </div>
          )}
        </div>
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 m-4">If you are interested in your own custom pitch or surveys we can help,</p>
            <a href="/get-started.html" className="btn btn-outline-secondary btn-lg px-4" target="_blank">Get Started!</a>
          </div>
        </div>
      </div>
    </div>
    
  </Page>
}

export default Promotions;

          // Canada
          // Chile
          // Spain
          // Portugal
          // Morocco
          // Bulgaria
          // Serbia
          // Vietnam
          // Cambodia
          // Malaysia
          // Peru
          // Argentina
          // Switzerland
          // Austria
          // Thailand
          // Hong Kong
          // Romania
          // Greece
          // Turkey
          // Costa Rica
