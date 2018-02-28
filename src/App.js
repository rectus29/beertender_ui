import React, {Component} from 'react';
import TopBar from './components/TopBar.js';
import Main from './components/Main.js';
import './App.css';
import dataTemplate from './data_template.json';
import {Route} from "react-router-dom";
import SignInForm from "./components/security/SignInForm";
import PrivateRoute from "./components/security/SignInForm";



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            defaultData : dataTemplate,
            user:{},
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
                    <SignInForm />
                )}/>

            </div>
        );
    }
}

export default App;
