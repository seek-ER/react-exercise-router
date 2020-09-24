import React from 'react';
import {NavLink} from "react-router-dom";

/*
class Products extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            id:0
        }
    }
    render() {

    }
}
*/

const Products = () => {
    return (
        <div>
            <p>All Products</p>
            <p><NavLink  to={'/products/:1'} className="product_list" >Bicycle</NavLink></p>
            <p><NavLink  to={'/products/:2'} className="product_list" >TV</NavLink></p>
            <p><NavLink  to={'/products/:3'} className="product_list" >Pencil</NavLink></p>
        </div>
    );
};

export default Products;