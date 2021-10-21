/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from '../../components/section-heading';
import Service from './serviceCard';
import icon2 from '../../images/download.png';
import icon1 from '../../images/1608003075147.jpeg';
const data = [
    {
        id: 1,
        icon: icon1,
        title: 'RMIT Cloud Innovation Centre',
        description: `RMIT CIC is one of the many cloud innovation centres scattered around the world. It is a partnership with AWS that provides a platform for students and industry to work together and build cyber cyber security solutions.`,
    },
    {
        id: 4,
        icon: icon2,
        title: 'Amazon Web Services',
        description: `AWS is a subsidiary company of Amazon. It provides on-demand cloud computing and application programming interfaces. Because of the various advantages that AWS provides such as reliability, flexibility, scalability, time-efficiency etc.,  millions of small businesses are powered by AWS`,
    },

];

const Services = () => {
    return (
        <div>
            <Box as="section" id="services" sx={styles.section}>
                <Container>
                    <SectionHeading
                        sx={styles.heading}
                        title="Our Sponsors"
                        description="We couldn't have done it without them go check out our amazing sponsors below."
                    />
                    <Box sx={styles.contentWrapper}>
                        {data?.map((item) => (
                            <Service key={item.id} item={item} />
                        ))}
                    </Box>
                </Container>
            </Box>
        </div>

    );
};

export default Services;

const styles = {
    section: {
        pt: [11, 11, 11, 12, 12, 12, 14],
        pb: [7, 7, 7, 9, 9, 10, 11],
    },
    heading: {
        maxWidth: [null, null, null, 455, 660],
        mb: [6, null, null, 8, null, 9, 13],
    },
    contentWrapper: {
        gap: 70,
        display: 'flex',
        justifyContent: ['center', null, null, 'unset'],
        gridTemplateColumns: [
            'repeat(1, 285px)',
            'repeat(1, 325px)',
            'repeat(1, 285px)',
            'repeat(3, 1fr)',
        ],
    },
};
