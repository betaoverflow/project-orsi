import React from 'react';
import Info from "../components/InfoSection/InfoSection";
import { ObjOne, ObjTwo} from "../components/InfoSection/data";

function publications() {
    return (
        <div>
            
      <Info {...ObjOne} />
      <Info {...ObjTwo} />
        </div>
    )
}

export default publications
