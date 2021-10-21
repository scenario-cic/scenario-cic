/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Heading, Text, Image } from 'theme-ui';
import Tabs, { TabPane } from 'rc-tabs';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { rgba } from 'polished';
import tabImage1 from '../../images/security.png';
import problem from '../../images/problem.png';
import WorkFlow from '../../images/solution.png';
import './aboutStyle.css'

// Content for the about 
const data = [
    {
        id: 1,
        tabTitle: 'Whats the problem?',
        title: `How might we increase the capability of ANZ SMBs to better respond to cyber-attacks?`,
        description: `For the most Small to Medium Businesses currently dont have the capability to respond to cyber attacks leaving their bottom line vulnerable. This is for a number of reasons.`,
        moreLink: '',
        image: problem,
        list: [
            'Lack of funds',
            'Lack of time',
            'Flaws in normal training',

            'New threats emerging every day',
        ],
    },
    {
        id: 2,
        tabTitle: 'What’s our solution?',
        title: `Scenar.io. The new era of cyber security readiness training`,
        description: `We built a learning platform made up of engaging simulations that gives those without a cyber security background the means to thrive in their transition to an online business.`,
        moreLink: '',
        image: WorkFlow,
        list: [
            'Free to use',
            'Modular',
            'Engaging',
            'Realistic',
        ],
    },
    {
        id: 3,
        tabTitle: 'How does it work?',
        title: `Scenar.io makes use of a type of cyber range to get the User feeling as if they're experiencing the attack firsthand.`,
        description: `This is done mainly using Amazon's Sumerian to replicate a real office space along with numerous other technologies to keep the user experience engaging.`,
        moreLink: '',
        image: tabImage1,
        list: [
            'Recommender System',
            'Powered by AWS',
            'Built using React',
            'Responsive design',
        ],
    },
];
// Rendering of the about part
const WhyUs = () => {
    return (
        <Box as="section" id="why-us" sx={styles.section}>
            <Container>
                <Tabs sx={styles.tabs} animated={{ tabPane: true }}>
                    {data?.map((item) => (
                        <TabPane
                            key={item.id}
                            tab={<Heading as="h4">{item.tabTitle}</Heading>}
                        >
                            <Box>
                                <Heading>{item.title}</Heading>
                                <Text as="p" sx={styles.description}>
                                    {item.description}
                                </Text>
                                <Box sx={styles.list}>
                                    {item.list.map((item, i) => (
                                        <Box key={i} className="list-item">
                                            <RiCheckboxCircleFill
                                                color="#3FDBB1"
                                                size="20px"
                                                sx={{ mr: 2 }}
                                            />
                                            <span>{item}</span>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                            <Box sx={styles.illustration}>
                                <Image src={item.image} alt="illustration" />
                            </Box>
                        </TabPane>
                    ))}
                </Tabs>
            </Container>
        </Box>
    );
};

export default WhyUs;

const styles = {
    section: {
        pt: [11, null, null, 12],
        pb: [8, null, null, 9, null, 11],
    },
    tabs: {
        border: 0,
        '.rc-tabs-nav': {
            mb: [8, null, null, 9, 10, 9, 12],
        },
        '.rc-tabs-nav-wrap': {
            borderBottom: `1px solid ${rgba('#01070D', 0.1)}`,
            justifyContent: 'center',
        },
        '.rc-tabs-nav-list': {
            flexGrow: 1,
            justifyContent: 'space-evenly',
            pb: [3, null, null, 5, null, 6],
            display: 'flex',
            position: 'relative',
            transition: 'transform 0.3s'

        },
        '.rc-tabs-tab-btn': {
            outline: 0,
            alignItems: 'center',
            img: {
                outline: 0,
            },
        },
        '.rc-tabs-tab': {
            backgroundColor: 'transparent',
            // m: ['0 45px'],
            h4: {
                fontFamily: 'body',
                fontSize: [0, null, null, 17, null, null, 4],
                fontWeight: 700,
                lineHeight: 1.5,
                textAlign: ['center', null, null, null, 'left'],
                whiteSpace: ['break-spaces', null, null, null, 'unset'],
            },
        },
        '.rc-tabs-tabpane': {
            display: ['flex', null, null, 'grid'],
            flexDirection: ['column-reverse', null, null, 'unset'],
            alignItems: 'center',
            justifyContent: 'center',
            gridTemplateColumns: [null, null, null, '0.9fr 1.1fr'],
            outline: 0,
            gap: [5, null, null, 11],
            h2: {
                color: 'heading',
                fontSize: [24, null, null, 6, 26, 8, 40],
                fontWeight: 700,
                lineHeight: [1.45, null, null, 1.5],
                letterSpacing: [null, null, null, '0.5px', null, '-1px'],
                textAlign: ['center', null, null, 'left'],
            },
            p: {
                color: 'textSecondary',
                fontSize: [1, null, null, 2, 17],
                lineHeight: [1.87, null, null, 2, 2.48],
                textAlign: ['center', null, null, 'left'],
                mt: [4],
            },
            '.list-item': {
                fontSize: [0, null, null, 1, 2],
                fontWeight: 500,
                lineHeight: [2.8],
                display: 'flex',
                alignItems: 'center',
            },
        },
    },
    list: {
        mt: [5],
        display: 'grid',
        justifyContent: ['center', null, null, 'unset'],
        gridTemplateColumns: ['repeat(2, 164px)', null, null, 'repeat(2, 180px)'],
    },
    learnMore: {
        mt: [4],
        textAlign: ['center', null, null, 'left'],
        a: {
            fontSize: [null, null, null, 1, 2],
        },
    },
    illustration: {
        display: ['flex'],
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: [null, null, null, null, null, 'center'],
        img: {
            maxWidth: ['65%', null, null, '100%', null, '90%', '100%'],
        },
    },
};
