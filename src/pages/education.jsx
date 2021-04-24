import React from 'react';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components";


const theme = createMuiTheme({
  typography: {
    h3 :{
      fontSize: '48px',
      fontWeight:600,
      lineHeight:1.1,
      color: 'royalblue',
      padding:'2%',
      marginTop:'5%',
    },
    h5: {
      fontSize: '1.5rem',
      lineHeight: 1.4,
      padding: '5%',
      marginTop:'-3%',
      textAlign: 'center',
      '@media (max-width:1200px)': {
        fontSize: '1.2rem',
        padding:'5%',
      }, 
    }
  },
});

const Button = styled.button`
	border: 0;
	left: 0;
	padding: 15px 2em;
	color: #fff;
	font-size: 15px;
  margin:10px;
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

const Container = styled.div`
display:flex;
flex-direction:row;
padding: 0 30%;
@media screen and (max-width: 720px){
  flex-direction:column; 
 }
 @media screen and (min-width: 720px) and (max-width:1200px){
  padding: 0 15%;
 }
 

`;
export default function ResponsiveFontSizes() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="h3">The Concept Of Operational Research</Typography>
        <Typography variant="h5">The application of Operational Research Technique of complex problems
        of an organization involves taking into account the total system
        which influences the decision making process. The Operational Research not only considers all the
        factors in the environment and their interrelationships, but tries to present these in a quantified form
        so that the implications of the change in any of the factors can be easily assessed Operational Research is an
        integral part of the multidisciplinary area of Management Philosophy. Keeping in view the need of Operational Research,
        the Operational Research Society of India started an Examination System in 1973.
        </Typography>
        <Container>
        <a href="http://www.orsihq.in/assets/assets-custom/forms/Prospectus-Revised.pdf" target="_blank">
        <Button>Prospectus</Button></a>
        <a href="http://www.orsihq.in/assets/assets-custom/forms/Registration%20Form.pdf" target="_blank">
        <Button>Registration Form</Button></a>
        <a href="http://www.orsihq.in/assets/assets-custom/forms/Examination-Form.pdf" target="_blank">
        <Button>Examination Form</Button></a>
        </Container>
        
      </ThemeProvider>
    </div>
  );
}