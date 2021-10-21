import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

// Create cards based on the api data 
const Contacts = ({ contacts }) => { // fetch and map the data from the api 
    return (
        <div className="row" style={{ flexwrap: 'nowrap' }}>
            {contacts.map((contact) => (

                <Col xs lg="4" md="auto">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{contact.scenarioName}</Card.Title>
                            <Card.Text>
                                {contact.desc}
                            </Card.Text>
                            <Button variant="primary"> <a href={contact.link + contact.userName} rel="noreferrer" target="_blank">Start</a></Button>
                        </Card.Body>
                    </Card >
                </Col>

            ))}
        </div >
    )
};

export default Contacts
