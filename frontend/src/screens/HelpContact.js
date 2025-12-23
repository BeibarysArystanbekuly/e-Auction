import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function HelpContact() {

    const skillIcon = "text-bg-dark bg-gradient rounded-3 shadow py-1"
    return (
        <>
            <Container className="px-4 py-5">
                <h1 className="display-5 fw-bold text-center">ABOUT ME</h1>
                <span className="d-flex flex-wrap justify-content-center mb-1"><hr style={{width: "50%"}} /></span>
                <h5 className="text-center">Here you will find more information about me and what I do.</h5>
                <span className="d-flex flex-wrap justify-content-center mb-1"><hr style={{width: "75%"}} /></span>
            
                <Row className="flex-column flex-lg-row py-5 justify-content-center gap-5">
                    <Col className="col-md-12 col-lg-4 text-center gap-2">
                        <h3 className="fw-bold text-center">Who am I?</h3>
                        <Col className="text-muted my-4">I am a <strong>KBTU Student</strong> building Backend of Websites and Web Applications. I want to be <br /> Full Stack developer and always eager to adapt and take on new challenges! <br /> <br /> You can check out some of my work in my <a href='https://github.com/nidea1' className='link-dark text-decoration-none'><strong>GitHub.</strong></a></Col>
                        <Col className="text-muted">I am open to <strong>job</strong> opportunities where I can contribute, learn and improve myself. If there is a job that you think is suitable for me, do not hesitate to <strong>contact me.</strong></Col>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HelpContact
