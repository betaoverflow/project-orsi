import React from 'react'
import styled from 'styled-components';
import Icon from "./Icon";

export const MyCard = styled.div`
    font-size: 18px;
    height: 11rem;
    width: 20rem;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
    transition: 0.3s;
    margin: 1.3em;
    &:hover {
        box-shadow: 0 8px 15px 0 rgb(0 0 0 / 20%);
    };
    padding: 1.5em;
    border-radius: 10px;
`

export const CardIconBg = styled.div`
    background: #e1ecff;
    height: 2.5em;
    width: 2.5em;
    padding-top: 10px;
    border-radius: 50%;
`

export const CardDesc = styled.h4`
    line-height: 1.2;
    font-weight: 600;
    color: #535353;
    width: 100%;
    text-align: left;
    margin-top: 1em;
`;

const homeCardData = [
    {
        "desc": "Training Program For Industrial Personnel",
        "icon": "Clock",
    },
    {
        "desc": "Organizing Seminars, Conferences, Workshops And Webinars",
        "icon": "People",
    },
    {
        "desc": "Collaboration With Industry",
        "icon": "Handshake",
    },
    {
        "desc": "Organizing FDP For Nearby Institutes",
        "icon": "Share",
    },
    {
        "desc": "Student Training Program",
        "icon": "Graduation",
    },
]

function createCard({ desc, icon }) {
    return (
        <MyCard>
            <CardIconBg>
                <Icon name={icon} />
            </CardIconBg>
            <CardDesc>{desc}</CardDesc>
        </MyCard>
    );
}

export default function HomeCard(props) {
    return (
        <>
            {homeCardData.map(createCard)}
        </>
    )
}
