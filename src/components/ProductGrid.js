/**
 * Created by a.bernard on 25/01/2018.
 */
import React from 'react';
import Currency from 'react-currency-formatter';


export default class ProductGrid extends React.Component {


    constructor(props) {
        super(props);
        console.log(this.props.products);
    }
    
    render() {          
        return (
            <div id="productGrid" >
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.products.map((object, i) => this.renderBeerRow(object))}
                    </tbody>
                </table>                
            </div>
        );
    }
    
    renderBeerRow(product){
        return (
            <tr key={product.code} className="ProductRow">
                <td>{product.img}</td>
                <td>{product.name}</td>
                <td>
                    <Currency currency="EUR" quantity={product.price} />
                </td>
                <td>action</td>
            </tr>
        );
    }
}