import React, {Component} from 'react';
import TopBar from './components/TopBar.js';
import NavigationMenu from './components/NavigationMenu.js';
import ProductGrid from './components/ProductGrid.js';
import logo from './logo.svg';
import './App.css';
import dataTemplate from './data_template.json';



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            defaultData : dataTemplate
        };
    }

    render() {
        return (
            <div className="App">
                <TopBar/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <NavigationMenu/>
                        </div>
                        <div className="col-md-9">
                            <ProductGrid products={this.state.defaultData}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
