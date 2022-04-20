import React from 'react';
import ContentStyles  from "../lpage/Hero.module.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'



export default function Content() {

  return (
    <>

    <section>
      <div className= {`${ContentStyles.jumbotron} ${ContentStyles.jumbotronfluid} ${ContentStyles.banner}`} id={ContentStyles.banner} >
          <div className={`${ContentStyles.container}  ${ContentStyles.herocontentdiv} ${ContentStyles.textcenter}`}>

              <div className={ContentStyles.herocontentdivh2}>
                   {/* <span>Manage Your Business without</span> */}
                   <p className={ContentStyles.Herotext} >
                      Manage your Business 
                   </p>
                   <p className={ContentStyles.Herotext2} >
                        Without Stress with Our
                   </p>
                  {/* <br/>
                   <span>stress with our</span> */}
                   
                  
                  <span className={ContentStyles.CustomHerotext}>CRM Solution</span>
              </div>
              {/* <a href="#" data-aos="fade" data-aos-easing="linear" data-aos-duration="1000" 
              data-aos-once="true"  class="btn button-block " id={ContentStyles['btnn']}>Get Started Now</a> */}
              <Button id={ContentStyles['btnn']}>
                  Get Started Now
              </Button>
          </div>
          
      </div>

    </section>


    {/*----------------------------- Buttom section---------------------------------- */}

    <section>
      <div className={ContentStyles.bottom}>
          <Row className={ContentStyles.Row}>
            <Col className={ContentStyles.bottomcol}>
                <div className={ContentStyles.text1}>
                    <span className={ContentStyles.bottomspan}>Build deeper connections</span>
                    <p className={ContentStyles.bottomP}>with your cutsomers with ease</p>
                </div>
            </Col>
            <Col className={ContentStyles.bottomcol}>
              <div className={ContentStyles.bottomtext2}>
                  <span className={ContentStyles.bottomspan}>Empower your customers</span>

                  <p className={ContentStyles.bottomP}>to succeed with Wakanda Market App</p>
              </div>
            </Col>
            <Col className={ContentStyles.bottomcollast}>
              <div className={ContentStyles.bottomtext3}>
                  <span className={`${ContentStyles.bottomspan3} ${ContentStyles.bottomspan} `} >Manage your staff and business</span>
                  <p className={ContentStyles.bottomP}>processes without sweat</p>
              </div>
            </Col>
          </Row>
      </div>

    </section>



        

    </>
    
  )
}
