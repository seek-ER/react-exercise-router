import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, NavLink, Route} from "react-router-dom";
import Home from "./Home";
import Profiles from "./Profile";
import AboutUs from "./AboutUs";

class All extends Component {
    render() {
        return (
            <Router>
                <div className={'all'}>
                    <div className={'bar'}>
                        <NavLink  exact to={'/'} className="link" activeClassName="selected">Home</NavLink>
                        <NavLink  to={'/my-profile'} className="link" activeClassName="selected">My Profiles</NavLink>
                        <NavLink  to={'/about-us'} className="link" activeClassName="selected">About US</NavLink>
                    </div>
                    <div className={'content'}>
                        <Route exact path={'/'} component={Home}/>
                        <Route path={'/my-profile'} component={Profiles}/>
                        <Route path={'/about-us'} component={AboutUs}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default All;