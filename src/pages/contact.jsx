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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117057.25839218969!2d87.23013350301412!3d23.531087979490394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7710b47a89171%3A0x429e1bdb57e009dd!2sDurgapur%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1619251923405!5m2!1sen!2sin"  style={{width:'100%',height:'500px', boxShadow:'2px 2px 15px #6C63FF'}} allowfullscreen="" loading="lazy"></iframe>
        </div>
    )
}

export default contact
