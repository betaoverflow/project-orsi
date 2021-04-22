import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
    background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
    direction:'flex';
    flex-direction:'row';
    overflow:hidden;
    
`;

export const Image = styled.img`
    height:570px;
    margin-top: 100px;
    margin-left:650px;
    position:absolute;
    top:0;
`;

export const BackgroundImage = styled.img`
    height:670px;
    width:1935px;
    margin-left:-200px;
    margin-bottom:-20px;
    

`;

function home() {
    return (
        <Container>
            <Image src={require('../assets/images/robot.png').default} />
            <BackgroundImage src={require('../assets/images/home-bg.png').default} />
        </Container>
    )
}

export default home
