import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

import '../styles/components/sign_in.css'

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    }

    signIn() {
        // console.log('this.state ', this.state);
        const { email, password } = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email,password)
            .catch(error => {
                console.log('error', error);
                this.setState({error});
            })
    }

    render() {
        return (
            <div className="sign-in-comp form-inline">
                <h2>Sign In</h2>

                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="email"
                        onChange={event => this.setState({email: event.target.value})}
                    />
                    <input
                        className="form-control"
                        type="password"
                        placeholder="password"
                        onChange={event => this.setState({password: event.target.value})}
                    />
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={() => this.signIn()}
                    >
                        Sign In
                    </button>
                </div>
                <div>{this.state.error.message}</div>
                <div><Link to={'/signup'}>Sign Up</Link></div>

            </div>
        )
    }
}

export default SignIn;