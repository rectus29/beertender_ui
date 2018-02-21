/**
 * Created by a.bernard on 25/01/2018.
 */
import React from 'react';
import NavigationMenu from './NavigationMenu.js';
import ProductGrid from './ProductGrid.js';
import {Route, Switch} from "react-router-dom";

export default class Main extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <NavigationMenu/>
                    </div>
                    <div className="col-md-9">
                        <Switch>
                            <Route exact path='/' render={(props) => (
                                <div></div>
                            )}/>
                            <Route path='/75cl'  render={(props) => (
                                <ProductGrid products={this.props.defaultData["75cl"]}/>
                            )}/>
                            <Route path='/33cl'  render={(props) => (
                                <ProductGrid products={this.props.defaultData["33cl"]}/>
                            )}/>
                            <Route path='/fut'  render={(props) => (
                                <ProductGrid products={this.props.defaultData["fut"]}/>
                            )}/>
                        </Switch>



                    </div>
                </div>
            </div>
        );
    }
}
