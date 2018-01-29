/**
 * Created by a.bernard on 25/01/2018.
 */
import React, { Component } from 'react';
import ProductLine from './ProductLine';


export default class ProductGrid extends React.Component {




    _renderProductLines(props){
        var productList = props.productList;
        if(productList.length < 1){

        }
    }


    render() {
        var datas = [];
        datas[0] =  {id:0, data : "data 0"};
        datas[1] =  {id:1, data : "data 1"};
        datas[2] =  {id:2, data : "data 2"};

        const listItems = datas.map((data) =>
            <li>{data.data}</li>
        );

        return (
            <div id="productGrid" >
                <_renderProductLines />
            </div>
        );
    }
}