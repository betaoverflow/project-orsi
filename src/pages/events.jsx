import React from 'react'
import Table from '../components/table/table_events';
import Info from "../components/InfoSection/InfoSection2";
import { ObjThree } from '../components/InfoSection/data';

const Events = () => {
    return (
        <div>
            <Info {...ObjThree} />
            <h1 style={{marginTop:"-50px"}}>Events</h1>
            <Table/>
        </div>
    )
}

export default Events
