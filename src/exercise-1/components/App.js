import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import All from "./All";

class App extends Component {
    render() {
        return (
            <div className="app">
                <Router >
                    <All/>
                </Router>
            </div>
        );
    }
}

export default App;
