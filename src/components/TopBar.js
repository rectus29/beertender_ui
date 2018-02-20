/**
 * Created by a.bernard on 25/01/2018.
 */
import React from 'react';

export default class TopBar extends React.Component {

    render() {
        return (
            <div id="topBar" className="jumbotron">
                <div className="container">
                    <div className="row">
                        <div className="logo col-md-2">
                            <img src="/images/beer.png" alt="beer" className="img-fluid"/>
                        </div>
                        <div className="col-md-6">
                            <h1>BeerTender</h1>
                        </div>
                        <div className="col-md-4">
                            <div id="userBlock">
                                <span className="badge badge-light">0</span>&nbsp;<i className="fas fa-shopping-cart"></i>&nbsp;|&nbsp;
                                <i className="fas fa-user"></i> User Login | <a href="#">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
