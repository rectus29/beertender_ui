import React, {Component} from 'react';
import TopBar from './components/TopBar.js';
import Main from './components/Main.js';
import './App.css';
import dataTemplate from './data_template.json';
import {Route} from "react-router-dom";
import SignInForm from "./components/security/SignInForm";
import PrivateRoute from "./components/security/PrivateRoute";

const userAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            defaultData : dataTemplate,
            user:{
                isAuthenticated : false,
                name : null,
                firstname : null,
                mail : null,
                address : null,
            },
            cart:{}
        };
    }

    render() {
        return (
            <div className="App container">
                <PrivateRoute path='/' >
                    <TopBar />
                    <Main defaultData={this.state.defaultData}/>
                </PrivateRoute>
                <Route path='/login'  render={(props) => (
                    <SignInForm {...props}/>
                )}/>

            </div>
        );
    }
}

export default App;
