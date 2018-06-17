import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { firebaseApp } from './firebase';
import { logUser } from './actions';
import reducer from './reducers';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import App from './components/App';
import AllHotels from './components/app/AllHotels';
import AddHotel from './components/app/AddHotel';
import About from './components/app/About';
import Home from './components/app/Home';

const store = createStore(reducer);


firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
        let currentPathname = browserHistory.getCurrentLocation().pathname;
        if( currentPathname === "/" || currentPathname === "/signin"){
          browserHistory.push('/');
        }
        const { email } = user;
        store.dispatch(logUser(email));
    }
    else {
        browserHistory.replace('/signin');
    }
})

ReactDOM.render(

    <Provider store={store}>
        <Router path="/" history={browserHistory}>
            <Route path="/home" component={App}>
                <Route path="/" component={Home}/>
                <Route path="/allhotels" component={AllHotels}/>
                <Route path="/addhotel" component={AddHotel} />
                <Route path="/about" component={About} />
            </Route>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
        </Router>
    </Provider>, document.getElementById('root')
)
