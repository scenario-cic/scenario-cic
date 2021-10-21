import React from "react";
import signinImg from "../../images/hacker.png";
import { Box, Container, Button, Image } from 'theme-ui';
import SectionHeading from '../../components/section-heading';
import { Fade } from "react-awesome-reveal";
import WhyUs from './about'
import Services from './Service'
import { Link } from "react-router-dom";
const styles = {
    section: {
        position: 'relative',
        pt: [105, null, null, 140, 15, null, 170],
        pb: [8, null, null, 0],
        zIndex: 0,
        ':before': {
            // backgroundColor: rgba('#FFF5ED', 0.5),
            content: ['none', null, null, `''`],
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: 72,
            zIndex: -1,
        },
    },
    contentWrapper: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    heading: {
        textAlign: 'center',
        mb: [30],
        maxWidth: [null, null, null, 500, 560, 730],
        h2: {
            fontSize: [8, null, null, 8, 9, 10, 11],
            lineHeight: [1.57],
        },
        p: {
            fontSize: [1, null, null, 3],
            lineHeight: [1.87, null, null, 2.33],
        },
    },
    illustration: {
        display: ['block', null, null, 'flex'],
        position: 'relative',
        img: {
            display: ['none', null, null, 'block'],
            maxWidth: ['90%'],
            m: ['0 auto'],
        },
    },
    buttonWrapper: {
        textAlign: ['center'],
        position: ['static', null, null, 'absolute'],
        left: '50%',
        top: 0,
        transform: ['unset', null, null, 'translateX(-50%)'],
    },
    image: {
        width: '50%',
    }
};

export default function Home() {
    return (
        <div>

            <Fade direction="right">
                <Box as="section" id="home" sx={styles.section}>
                    <Container>
                        <Box sx={styles.contentWrapper}>
                            <SectionHeading
                                sx={styles.heading}
                                title=" Welcome to Scenar.io"
                                description="Engaging training to help you take a safer first step in your new cyber journey."
                            />
                            <Box as="figure" sx={styles.illustration}>
                                <Box sx={styles.buttonWrapper}>
                                    <Link to={`/quizhome`}>
                                        <Button>Begin Journey</Button>
                                    </Link>
                                </Box>
                                <Image sx={styles.image} src={signinImg} alt="illustration" />
                            </Box>
                        </Box>
                    </Container>
                </Box>

            </Fade>
            <Fade direction="up">
                <WhyUs />
            </Fade>
            <Fade direction="left">
                <Services />
            </Fade>
        </div>
    );
}