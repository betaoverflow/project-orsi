import React from 'react';
import InfoSection from "../components/InfoSection/InfoSection2";


const contactUs = {
    primary: true,
    lightBg: true,
    lightTopLine: true,
    lightText: false,
    lightTextDesc: false,
    headline: 'Got a query?',
    description:
      'At ORSI Durgapur we strive to make whatever you are looking for easy to find and use. This is a core part of our mission. Here you’ll find answers to your questions, or directions to speak with a person who can help.',
    imgStart: '',
    img: require('../assets/images/contactUs.svg').default,
    alt: 'postman api',
    start: ''
  };


function contact() {
    return (
        <div>
        <InfoSection {...contactUs} />
        </div>
    )
}

export default contact
