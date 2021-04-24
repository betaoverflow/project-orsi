import React from 'react'
import Hero from '../components/hero/hero';
import InfoSection from '../components/InfoSection/InfoSection2';


const aboutOrsi = {
    primary: true,
    lightBg: true,
    lightTopLine: true,
    lightText: false,
    lightTextDesc: false,
    headline: 'About ORSI',
    description:
      'The Operational Research Society of India (ORSI) was founded in 1957 to provide a forum for the Operational Research Scientists to widen their horizon by exchange of knowledge and application of techniques.The Society is affiliated to the International Federation of Operational Research Societies (IFORS) and Asia Pacific Operational Research Societies (APORS). ORSI is the representative of IFORS and APORS in India',
    imgStart: '',
    img: require('../assets/images/logo.png').default,
    alt: 'postman api',
    start: ''
};
  
export const objectiveOrsi = {
    primary: true,
    lightBg: true,
    lightTopLine: true,
    lightText: false,
    lightTextDesc: false,
    headline: 'Objective of ORSI ',
    description:
      'The Society is devoted to promotion and propagation of knowledge in Operational Research. ORSI publishes a Quarterly Journal OPSEARCH, which brings out high quality and state of the art papers in Operational Research. Since 1973 it also conducts an examination on Graduate Diploma In Operational Research to provide opportunities to professionals and students to equip themselves with knowledge of Operational Research.ORSI is a non-profit making educational institution. ',
    imgStart: 'start',
    img: require('../assets/images/home.gif').default,
    alt: 'Vault',
    start: 'true'
};

function contact() {
    return (
        <div>
            <Hero />
            <InfoSection {...aboutOrsi} />
            <InfoSection {...objectiveOrsi} />
        </div>
    )
}

export default contact
