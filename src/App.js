import React, {Component} from 'react';
import TopBar from './components/TopBar.js';
import Main from './components/Main.js';
import './App.css';
import dataTemplate from './data_template.json';



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
            <div className="App">
                <TopBar />
                <Main defaultData={this.state.defaultData}/>
            </div>
        );
    }
}

export default App;
