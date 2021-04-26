import React from 'react'
import {
    Container,
    InfoSec,
} from '.././InfoSection/InfoSection.elements';
import HomeCard from './HomeCard';
import styled from 'styled-components';

export const AllCards = styled.div`
    justify-content: center;
    padding: 0em 3em 0em 3em;
    width: 100%;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
`

export default function HomeCards({
    lightBg,
}) {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <AllCards>
                        <HomeCard />
                    </AllCards>
                </Container>
            </InfoSec>
        </>
    )
}
