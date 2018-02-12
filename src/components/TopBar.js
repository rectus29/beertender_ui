/**
 * Created by a.bernard on 25/01/2018.
 */
import React from 'react';

export default class TopBar extends React.Component {

    render() {
        return (
            <div id="topBar" className="jumbotron">
                <div className="container">
                    <div className="logo col-md-2">
                        <img src="/images/beer.png" alt="beer" className="img-fluid"/>
                    </div>
                    <div className="col-md-6">
                        <h1>BeerTender</h1>
                    </div>
                </div>
            </div>
        );
    }
}
