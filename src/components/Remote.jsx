
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

//<FontAwesomeIcon icon={solid('user-secret')} />
//<FontAwesomeIcon icon={regular('coffee')} />
//<FontAwesomeIcon icon={icon({name: 'coffee', style: 'solid'})} />
//<FontAwesomeIcon icon={brands('twitter')} />


import Page from './Page';

const Remote = () => {
  const images = [
    { image:'hk_43817778_621301638265431_6174468599253341892_n.jpeg',  city: 'Victoria Peak', country: 'Hong Kong', date: '', size: '250%'},
    { image:'vn_14488074_555400348002321_5049435785384689664_n.jpeg',  city: 'Ha Long Bay',    country: 'Vietnam',   date: '', size: '250%'},
    { image:'kl_15802145_1206140272803162_4826998174994399232_n.jpeg', city: 'Kuala Lumpur', country: 'Malaysia', date: '', size: '100%'},
    { image:'kp_50602410_145629479779363_4463461943149809527_n.jpeg',  city: 'Koh Phangan', country: 'Thailand', date: '', size: '100%'},
    { image:'pp_15624191_439760252814541_3906825672621817856_n.jpeg',  city: 'Phnom Phen', country: 'Cambodia', date: '', size: '250%'},
    { image:'peru_16124232_1876088272669643_441994259797639168_n.jpeg',city: 'Lima',      country: 'Peru',      date: '', size: '250%'},
    { image:'ba_17931958_518295675226004_3619255596152258560_n.jpeg',  city: 'Cordoba',   country: 'Argentina', date: '', size: '100%'},
    { image:'santiago_21827821_1828008477459679_5851093913674186752_n.jpeg', city: 'Santiago', country: 'Chile', date: '', size: '250%'},
    { image:'ch_28152337_222618591621438_7575052129400782848_n.jpeg',  city: 'Winterthur', country: 'Switzerland', date: '', size: '100%'},
    { image:'lisbon_13551783_1446296992066992_1944824712_n.jpeg',      city: 'Lisbon',    country: 'Portugal',  date: '', size: '100%'},
    { image:'ibiza_13381085_1619457415032756_1567779086_n.jpeg',       city: 'Ibiza',     country: 'Spain',     date: '', size: '100%'},
    { image:'cr_67283822_362094608052459_6668998306194036371_n.jpeg',  city: 'Split',    country: 'Croatia', date: '', size: '100%'},
    { image:'gr_202538996_879092642821508_668894196307310178_n.jpeg',  city: 'Thessaloniki', country: 'Greece', date: '', size: '250%'},
    { image:'rabat_13722229_901543386639806_127441628_n.jpeg',         city: 'Rabat',     country: 'Morocco',   date: '', size: '100%'},
    { image:'ro_14583419_1768060820115090_7550443397018812416_n.jpeg', city: 'Timousara', country: 'Romania',   date: '', size: '100%'},
    { image:'tr_240603044_537674014015416_3489013326339317227_n.jpeg', city: 'Istanbul',  country: 'Turkey',    date: '', size: '250%'},
    { image:'rs_14726330_1925395194354430_3742778834110382080_n.jpeg', city: 'Belgrade',  country: 'Serbia',    date: '', size: '100%'},
    { image:'bg_90235612_231214587933086_5184541834665256869_n.jpeg',  city: 'Sofia',     country: 'Bulgaria',  date: '', size: '200%'},
    ];
  return <Page section="photography">
    <div className="bg-dark text-secondary px-4 py-5 text-center">
      <div className="py-5">
        <h1 className="display-5 fw-bold text-white">Where have we been?</h1>
        <div className="col-lg-6 mx-auto">
          <p className="fs-5 mb-4">Since 2015 we have been expanding our nextwork world wide, preaching about the future-of-work: digital nomadism; vanlife; decentralization; remote; async; hybrid; and for most of you parents, work-from-home; THE FUTURE IS HERE. So are we, for you.</p>
        </div>
        <div className="row">
          { images.map((item,i) => <div className="col grid" key={i}>
              <div className="grid-item card card-cover overflow-hidden text-white bg-dark rounded-5 shadow-lg mt-3" style={{background: `url('/images/photography/${item.image}') center center no-repeat`, backgroundSize: item.size}}>
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{item.country}</h2>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="d-flex align-items-center me-3">
                      <FontAwesomeIcon icon={solid('location-pin')} size="2xl" className="m-5" />
                      <small>{item.city}</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="row">
          <div className="col-lg-6 mx-auto">
          <p className="fs-5 m-4">If you need someone through it all, try Nomad Camp! Stay on track with your goals nomad'er where you are. You're not alone!</p>
          <a href="/get-started.html" className="btn btn-outline-secondary btn-lg px-4" target="_blank">Get Started!</a>
        </div>
        
        </div>
      </div>
    </div>
    
  </Page>
}

export default Remote;

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
