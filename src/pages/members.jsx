import React from 'react';
import { Grid } from '@material-ui/core';
import styled from "styled-components";
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

import Card from '../components/card/card';
import InfoSection from '../components/InfoSection/InfoSection';
import Table from '../components/table/table';


const theme = createMuiTheme({
  typography: {
    h3 :{
      fontSize: '30px',
      fontWeight:'bold',
      padding:'2%',
      '@media (max-width:800px)': {
        fontSize: '2rem',
      },
    }
  },
});

const teamData = [
    {
            "name":"Prof. Goutam Bandopadhya",
            "image":require('../assets/images/goutam.png').default,
            "tagline":"President",
    },
    {
        "name":"Dr. Anita Pal",
        "image":require('../assets/images/anita.jpeg').default,
        "tagline":"Honorary Secretary",
    },
    {
        "name":"Prof. Krishna Roy",
        "image":require('../assets/images/krishna.jpg').default,
        "tagline":"Vice President",
    },
    {
        "name":"Prof. Chittotosh Bhattacharaya",
        "image":require('../assets/images/chittotosh.jpeg').default,
        "tagline":"Vice President",
},
    
]

const durgapurChapter = {
  primary: true,
  lightBg: true,
  lightTopLine: true,
  lightText: false,
  lightTextDesc: false,
  headline: 'About Durgapur Chapter',
  description:
    'ORSI Durgapur is a very active chapter. There are more than 55 members in this chapter. Over the year many seminars, conferences, workshops are being organized. Mr. Salil Kumar Dutta & Dr. Kajla Basu served as president & vice president of the chapter for long time.There are many more active members of the society who are actively taking part to organize various program jointly with other organizations.',
  buttonLabel: 'Membership Form',
  linkTo:'http://orsihq.in/application_form.html',
  imgStart: '',
  img: require('../assets/images/orsi-durgapur.jpeg').default,
  alt: 'postman api',
  start: ''
};

const Heading = styled.h1`
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #000;
`;

const Subtitle = styled.p`
  margin-bottom: 35px;
  font-size: 17px;
  line-height: 1.8;
  color: #1c2237;
  padding:5px;
  margin-left:4%;
  margin-right:4%;
  text-align:left !important;
`;
const SmallText = styled.p`
  font-size: 14px;
  text-align:left !important;
  color: grey;
  margin-left: 4%;
`;

function createCard(teamData)
{
  return (
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <Card
        key={teamData.id}
        image={teamData.image}
        name={teamData.name}
        tagline={teamData.tagline}
      />
    </Grid>
  );
}

const Button = styled.button`
	border: 0;
	left: 0;
	padding: 10px 1em;
	color: #fff;
	font-size: 18px;
	font-weight: 600;
	border-radius: 5px;
	background-color: royalblue;
	border: 2px solid royalblue;
	transition: all 240ms ease-in-out;
	cursor: pointer;
    box-shadow: 2px 2px 17px #6797e7;
	&:hover {
    color: #fff;
    background-color: royalblue;
	}
    @media screen and (max-width: 580px){
        font-size: 15px;
    }
`;


function members() {
   
  return (
    <div className='App'>
      <InfoSection {...durgapurChapter} />
      <Heading>Team</Heading>
      <Grid lg={12} item container spacing={3} align='center'>
        {teamData.map(createCard)}
      </Grid>
      <a href="http://" target="_blank">
      <Button>List of Members</Button></a>
      <ThemeProvider theme={theme}>
        <Heading>Membership Subscription</Heading>
      </ThemeProvider>
      <Table />
      <SmallText>* Life member, willing to have laminated Identity Card, is to pay further INR 200/- along with the application.</SmallText>
      <Subtitle>OPSEARCH, the quarterly journal of the Society, is free for members, other than student members. Issues already published in a year prior to the date of payment of subscription is not guaranteed.</Subtitle>
      <a href="http://" target="_blank">
      <Button>Download Membership Form</Button></a>
    </div>
   
  );
}

export default members
