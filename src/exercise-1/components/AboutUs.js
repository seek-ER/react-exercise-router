import React from 'react';
import {Link} from "react-router-dom";
const AboutUs = () => {
    return (
        <div>
            <p>This is a beautiful home page.</p>
            <p>And the url is '/'.</p>
            <br/>
            <p>For more info</p>
            <p>view our <Link to={'/'}> website</Link></p>
        </div>
    );
};

export default AboutUs;