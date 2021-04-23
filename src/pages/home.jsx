import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
    background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
    direction:'flex';
    flex-direction:'row';
    overflow:hidden;
    
`;

export const Image = styled.img`
    height:450px;
    margin-top: 200px;
    margin-left:800px;
    position:absolute;
    top:0;
`;

export const BackgroundImage = styled.img`
    height:650px;
    width:1935px;
    margin-left:-150px;
    margin-bottom:-20px;
`;

export const Heading = styled.div`
    font-size:50px;
    position:absolute;
    top:230px;
    left:70px;
    font-weight:600;
    align-item: 'justify';
    text-align:left;
`;


export const Content = styled.h5`
    font-size:25px;
    position:absolute;
    color: grey;
    align-item: 'justify';
    text-align:left;
    font-weight: 100;
`;

const Button = styled.button`
  border: 0;
  position: absolute;
  left:0;
  margin-left:70px;
  margin-top: -120px;
  padding: 10px 1em;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  background-color: royalblue;
  border: 2px solid royalblue;
  transition: all 240ms ease-in-out;
  cursor: pointer;
  box-shadow: 2px 2px 25px #6797e7;
  &:hover {
    color: #fff;
    background-color: royalblue;
  }

`;




function home() {
    return (
        <Container>
            <Image src={require('../assets/images/robot.png').default} />
            <BackgroundImage src={require('../assets/images/home-bg.png').default} />
            <Heading>Operational Research <br />Society Of India, Durgapur
            <Content>A forum for Operational Research scientists as well as an avenue to  widen their horizon by exchange of knowledge and application of techniques</Content>
            </Heading>
            <Button>Download Brochure</Button>
        </Container>
    )
}

export default home
