import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import image from "../../images/wire.png"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//data for the curriculum
const Curriculum = () => {
    const cardData = [
        {
            name: 'Viruses'
        },
        {
            name: 'Ransomware'
        },
        {
            name: 'Spyware'
        },
        {
            name: 'Worm'
        },];
    const secondData = [
        {
            name: 'Email phishing'
        },
        {
            name: 'Smishing'
        },
        {
            name: 'Whaling'
        },
        {
            name: 'HTTPS phishing'
        },
    ];
    // rendering of teh curriculum page
    return (
        <div>
            <center><h1>Curriculum</h1></center>
            <h3>Malware 101 </h3>
            <p>Malware 101 is an introductory curriculum into the most common forms of malware you will encounter online. This course contains 4 short scenarios that will prepare you for the future.  </p>
            <div class="row" style={{ flexwrap: 'nowrap' }}>


                {cardData.map((data) => ( // map the data from the above josn part and render it 

                    <Row xs={1} md={2} lg={1} className="justify-content-md-center">
                        <Col xs lg="4" md="auto">
                            <Card style={{ width: '17rem' }}>
                                <Card.Body>
                                    <Card.Title>{data.name}</Card.Title>
                                    <Card.Img variant="top" src={image} />
                                    <Button variant="primary">Start</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                ))}
            </div>
            <div style={{ padding: "100px 0 0 0" }}>


                <h3>Phishing 101</h3>
                <p>Phishing 101 is an introductory curriculum into the most common forms of phishing attacks you will encounter online. This course contains 4 short scenarios that will prepare you for the future. </p>
                <div class="row" style={{ flexwrap: 'nowrap' }}>
                    {secondData.map((second) => (
                        <Row xs={1} md={2} lg={1} className="justify-content-md-center">
                            <Col xs lg="4" md="auto">
                                <Card style={{ width: '17rem' }}>
                                    <Card.Body>
                                        <Card.Title>{second.name}</Card.Title>
                                        <Card.Img variant="top" src={image} />
                                        <Button variant="primary">Start</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    ))}
                </div>
            </div>
        </div >

    )
};

export default Curriculum
