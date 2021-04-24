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
  imgStart: '',
  img: require('../assets/images/orsi-durgapur.jpeg').default,
  alt: 'postman api',
  start: ''
};

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



function members() {
   
  return (
    <div className='App'>
      <InfoSection {...durgapurChapter} />
      <h1>TEAM</h1>
      <Grid lg={12} item container spacing={3} align='center'>
        {teamData.map(createCard)}
      </Grid>

      <ThemeProvider theme={theme}>
        <Typography variant="h3">Membership Subscription</Typography>
      </ThemeProvider>
      <Table />

    </div>
   
  );
}

export default members
