import React from 'react'
import styles from "./About.module.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

export default function About() {
  return (
    <>


        <div class="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
            <div className=''>
                <div className={styles.greenrect} >

                </div>
            </div>
            
            <div className=''>
                    <h2>
                        About US
                    </h2>
                    <p>
                        Wakanda CRM Solution is a venture of African Founders Ltd. We are a leading African early stage holding company committed to helping businesses succeed. 
                    </p>
                    <p>
                            At Wakanda, our purpose is to ensure that every business succeeds through our simple and easy-to-use Customer 
                            Relationship Management Solutions tools and by providing a technology platform to connect, build trust, and exchange value. 
                            As a technology company, we innovate for our users with one core belief: Life can be better. 
                            As a result, we have created Wakanda CRM solutions: one 
                            tailored “super-app solutions” with an African way of building trust and success at its heart. 
                            A CRM solution created to help you effectively manage your clients while building a more structured business devoid of stress. 
                            We have got you covered today.
                    </p>

                        <Button className={styles.button} >
                            Learn More{'>'}
                        </Button>
            </div>
            </div>
        

 


        

    
    </>
  )
}


           {/* <div className={styles.container}>
            <Row>
                <Col lg={7} className={styles.fbox1} >
                    <div className={styles.greenrect} >

                    </div>

                </Col>
                <Col lg={5}  className={styles.fbox2}>
                <h2>
                    About US
                </h2>
                <p>
                        Wakanda CRM Solution is a venture of African Founders Ltd. We are a leading African early stage holding company committed to helping businesses succeed. 
                    </p>
                    <p>
                        At Wakanda, our purpose is to ensure that every business succeeds through our simple and easy-to-use Customer 
                        Relationship Management Solutions tools and by providing a technology platform to connect, build trust, and exchange value. 
                        As a technology company, we innovate for our users with one core belief: Life can be better. 
                        As a result, we have created Wakanda CRM solutions: one 
                        tailored “super-app solutions” with an African way of building trust and success at its heart. 
                        A CRM solution created to help you effectively manage your clients while building a more structured business devoid of stress. 
                        We have got you covered today.
                    </p>

                    <Button className={styles.button} >
                        Learn More{'>'}
                    </Button>


                </Col>


            </Row>
            </div> */}