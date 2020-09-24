import React from 'react';
import {Link} from "react-router-dom";
const AboutUs = () => {
    return (
        <div>
            <p>Company kldj ldjs l </p>
            <p>afid sjalkfa lk;jsalkf</p>
            <br/>
            <p>For more info</p>
            <p>view our <Link to={'/'}> website</Link></p>
        </div>
    );
};

export default AboutUs;