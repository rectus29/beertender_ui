/**
 * Created by a.bernard on 25/01/2018.
 */
import React, { Component } from 'react';

export default class ProductLine extends React.Component {
    
    /* @var props Product*/
    constructor(props) {
        super(props);
    }
    
    
    render() {
        return (
            <div class="ProductRow">
                <div>{this.props.img}</div>
                <div>{this.props.name}</div>
                <div>{this.props.price}</div>
                <div>action</div>
            </div>
        );
    }
}