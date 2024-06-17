import Page from './Page';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const Travel = () => {
  const places = [
    { image:'ba_17931958_518295675226004_3619255596152258560_n.jpeg',  city: 'Cordoba',   country: 'Argentina', date: '', size: '100%'},
    { image:'rs_14726330_1925395194354430_3742778834110382080_n.jpeg', city: 'Belgrade',  country: 'Serbia',    date: '', size: '100%'},
    { image:'bg_90235612_231214587933086_5184541834665256869_n.jpeg',  city: 'Sofia',     country: 'Bulgaria',  date: '', size: '200%'},
    { image:'ch_28152337_222618591621438_7575052129400782848_n.jpeg',  city: 'Winterthur', country: 'Switzerland', date: '', size: '100%'},
    { image:'cr_67283822_362094608052459_6668998306194036371_n.jpeg',  city: 'Split',    country: 'Croatia', date: '', size: '100%'},
    { image:'gr_202538996_879092642821508_668894196307310178_n.jpeg',  city: 'Thessaloniki', country: 'Greece', date: '', size: '250%'},
    { image:'hk_43817778_621301638265431_6174468599253341892_n.jpeg',  city: 'Victoria Peak', country: 'Hong Kong', date: '', size: '250%'},
    { image:'ibiza_13381085_1619457415032756_1567779086_n.jpeg',       city: 'Ibiza',     country: 'Spain',     date: '', size: '100%'},
    { image:'kl_15802145_1206140272803162_4826998174994399232_n.jpeg', city: 'Kuala Lumpur', country: 'Malaysia', date: '', size: '100%'},
    { image:'kp_50602410_145629479779363_4463461943149809527_n.jpeg',  city: 'Koh Phangan', country: 'Thailand', date: '', size: '100%'},
    { image:'lisbon_13551783_1446296992066992_1944824712_n.jpeg',      city: 'Lisbon',    country: 'Portugal',  date: '', size: '100%'},
    { image:'peru_16124232_1876088272669643_441994259797639168_n.jpeg',city: 'Lima',      country: 'Peru',      date: '', size: '250%'},
    { image:'pp_15624191_439760252814541_3906825672621817856_n.jpeg',  city: 'Phnom Phen', country: 'Cambodia', date: '', size: '250%'},
    { image:'rabat_13722229_901543386639806_127441628_n.jpeg',         city: 'Rabat',     country: 'Morocco',   date: '', size: '100%'},
    { image:'ro_14583419_1768060820115090_7550443397018812416_n.jpeg', city: 'Timousara', country: 'Romania',   date: '', size: '100%'},
    { image:'santiago_21827821_1828008477459679_5851093913674186752_n.jpeg', city: 'Santiago', country: 'Chile', date: '', size: '250%'},
    { image:'tr_240603044_537674014015416_3489013326339317227_n.jpeg', city: 'Istanbul',  country: 'Turkey',    date: '', size: '250%'},
    { image:'vn_14488074_555400348002321_5049435785384689664_n.jpeg',  city: 'Hoi An',    country: 'Vietnam',   date: '', size: '250%'},
  ];
  const countries = [
    "es", "pt", "ma", "bg", "rs", "vn", "kh", "my", "pe", "ar", "cl", "at", "ch", "hr", "hk", "th", "ro", "gr"
  ]
  return <Page section="travel">
    <div className="px-4 pt-5 mt-5 text-center">
      <h1 className="display-4 fw-bold">..and, we've been around</h1>
      <div className="col-lg-6 mx-auto my-5">
        <p className="lead mb-4">RaddStudio is driven by passion, so it doesnt belong anywhere. Founded in Toronto, Canada. Ottawa, then Vancounver, and the world. Work is an activity, not a place. We live upto that.</p>
        <p>Some places we have worked remotely from:</p>
        <Row className="my-5">
          { countries.map((c,i) => 
            <Col xs="3" sm="2"  key={i}>
              <div className="rounded-circle border m-2 p-3 bg-light text-center" style={{height:"56px", width:"56px"}} key={i}>
                <span className={`fi fi-${c}`}></span> 
              </div>
            </Col>
          )
        }
          
        </Row>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <a target="instagram" href="https://instagram.com/raddrick" className="btn btn-primary btn-lg px-4 me-sm-3">Follow @raddrick</a>
          <a href="#connect" className="btn btn-outline-secondary btn-lg px-4">Connect</a>
        </div>
      </div>
      <div className="overflow-hidden" style={{maxHeight: '30vh'}}>
        <div className="container px-5">
          <img src="/images/creative_27892418_607224879619789_7528873439898107904_n.jpeg" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy" />
        </div>
      </div>
    </div>
  </Page>
}

export default Travel;

          // Remote
          // Vanlife
          // Digital Nomad