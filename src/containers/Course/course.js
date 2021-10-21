import React, { Component } from 'react';
import { Image } from 'theme-ui';
import axios from 'axios'
import Contacts from './card';
import { Row } from 'antd';
import tabImage1 from '../../images/recommandation.png';
import { Fade } from "react-awesome-reveal";
import { GETURL } from '../../constant/api'
class Course extends Component {

    state = {
        contacts: [],
        user: '',
    }

    componentDidMount() {
        // Api function
        // Check for teh user email for signup and login 
        const user = localStorage.getItem('email')
        const signupEmail = localStorage.getItem('signupEmail')
        let useremail = ''
        if (user) {
            useremail = user
        } else {
            useremail = signupEmail
        }
        // post method to fetch the data from api and create the recommandation 
        axios.post(GETURL, {
            "userName": useremail,
            "status": "False"
        }, {
            'Content-Type': 'application/json',
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*"

        })

            .then(res => {
                let body = JSON.parse(res.data.body)
                this.setState({ contacts: body.details })
            })
            .catch(console.log)

    }

    //process and rendering the data from api
    render() {
        return (
            <div>

                <Fade direction="right">
                    <center><h1>Recommendation</h1></center>
                    <p>Below is a list of carefully curated scenarios based on the information you have provided at signup </p>

                    <Row xs={1} md={2} lg={1} className="justify-content-md-center">

                        <Contacts contacts={this.state.contacts} />

                    </Row>
                    <Image sx={styles.illustration} src={tabImage1} alt="illustration" />
                </Fade>
            </div>
        )
    }

}
export default Course
const styles = {
    illustration: {
        display: ['flex'],
        alignItems: 'center',
        justifyContent: 'center',
        height: '450px',
        marginLeft: '250px',
        textAlign: [null, null, null, null, null, 'center'],
        img: {
            maxWidth: ['65%', null, null, '100%', null, '90%', '100%'],
        },
    },

};