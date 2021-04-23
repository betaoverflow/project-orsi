import React from 'react';
import { Grid } from '@material-ui/core';

import Card from '../components/card/card';

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
      <h1>TEAM</h1>
      <Grid lg={12} item container spacing={3} align='center'>
        {teamData.map(createCard)}
      </Grid>
    </div>
  );
}

export default members
