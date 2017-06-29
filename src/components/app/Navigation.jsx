import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../../firebase';
import { Link } from 'react-router'

class Navigation extends Component {



    signOut() {
        firebaseApp.auth().signOut();
    }

    render() {
        return (
            <div  className="navigation-comp">
                <nav>
                    <ul>
                        <li id="nav-home"><Link to="/">Home</Link></li>
                        <li id="nav-all-hotels"><Link to="/allhotels">Our hotels</Link></li>
                        <li id="nav-add-hotel"><Link to="/addhotel">Add hotel</Link></li>
                        <li id="nav-about-us"><Link to="/about">About us</Link></li>
                    </ul>
                </nav>

                <button
                    className="btn btn-danger btn-sign-out"
                    onClick={() => this.signOut()}
                >
                    Sign Out
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    // console.log('state', state);
    return{}
}

export default connect(mapStateToProps, null)(Navigation);