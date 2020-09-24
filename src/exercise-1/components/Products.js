import React from 'react';
import {NavLink} from "react-router-dom";

const Products = () => {
    return (
        <div>
            <p>All Products</p>
            <p><NavLink  to={'/products/1'} className="product_list" >Bicycle</NavLink></p>
            <p><NavLink  to={'/products/2'} className="product_list" >TV</NavLink></p>
            <p><NavLink  to={'/products/3'} className="product_list" >Pencil</NavLink></p>
        </div>
    );
};

export default Products;