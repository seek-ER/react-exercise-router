import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, NavLink, Redirect, Route, Switch} from "react-router-dom";
import Home from "./Home";
import Profiles from "./Profile";
import AboutUs from "./AboutUs";
import Products from "./Products";
import Products_1 from "./Products_1";
import Products_2 from "./Products_2";
import Products_3 from "./Products_3";

class All extends Component {
    render() {
        return (
            <Router>
                <div className={'all'}>
                    <div className={'bar'}>
                        <NavLink  exact to={'/'} className="link" activeClassName="selected">Home</NavLink>
                        <NavLink  exact to={'/products'} className="link" activeClassName="selected">Products</NavLink>
                        <NavLink  to={'/my-profile'} className="link" activeClassName="selected">My Profiles</NavLink>
                        <NavLink  to={'/about-us'} className="link" activeClassName="selected">About US</NavLink>
                    </div>
                    <div className={'content'}>
                        <Switch>
                            <Route exact path={'/'} component={Home}/>
                            <Route exact path={'/products'} component={Products}/>
                            <Route path={'/products/1'} component={Products_1}/>
                            <Route path={'/products/2'} component={Products_2}/>
                            <Route path={'/products/3'} component={Products_3}/>
                            <Route path={'/my-profile'} component={Profiles}/>
                            <Route path={'/about-us'} component={AboutUs}/>
                            <Redirect from={'/goods'} to={'/products'}/>
                            <Redirect from={'/*'} to={'/'}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default All;