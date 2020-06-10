import React from 'react';
import stayHome from './images/stayHome.jpg';

function Stay(){
    return(
        <div className="main">
            <div className="heading">
                <h2>Stay Home Stay Safe</h2>
            </div>
            <div className="image">
                <img src={stayHome} className="stay-home-image" alt="stay home stay safe" />
            </div>
        </div>
    )
}
export default Stay;