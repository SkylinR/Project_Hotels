import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navigation from './app/Navigation';

import "../styles/main.css";

class App extends Component {

    render() {
        return (
            <div className="app-comp">
                <Navigation />
                <div> {this.props.children}</div>
            </div>
        )
    }
}

export default App;