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
    margin-left:-200px;
    margin-bottom:-20px;
`;

export const Heading = styled.h1`
    font-size:50px;
    position:absolute;
    top:230px;
    left:70px;
`;

export const SubHeading = styled.h1`
    font-size:50px;
    position:absolute;
    top:470px;
    left:70px;
`;



function home() {
    return (
        <Container>
            <Image src={require('../assets/images/robot.png').default} />
            <BackgroundImage src={require('../assets/images/home-bg.png').default} />
            <Heading>Operational Research </Heading>
            <Heading style={{ top: '310px' }}>Society Of India</Heading>
            <SubHeading>Durgapur Chapter</SubHeading>

        </Container>
    )
}

export default home
