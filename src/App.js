import React, {Component} from 'react';
import TopBar from './components/TopBar.js';
import NavigationMenu from './components/NavigationMenu.js';
import ProductGrid from './components/ProductGrid.js';
import logo from './logo.svg';
import './App.css';


class App extends Component {

    defaultData = null;

    constructor(props) {
        super(props);
        this.defaultData = require('../../file.json');
    }

    render() {
        return (
            <div className="App">
                <TopBar />
                <div className="container">
                    <div className="col-md-2">
                        <NavigationMenu />
                    </div>
                    <div className="col-md-10">
                        <ProductGrid productList="{this.defaultData}"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
