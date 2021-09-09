import css from './productsList.css';
import Product from './product/product.js';
import { useState, useEffect } from 'react';
function ProductsList(props) {
    let [products, setproduct] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/products")
        .then((result)=>{
            return result.json();
        })
        .then(({data})=>{
            setproduct(data.data);
        })
        }, [])
    return (
        <div>
            <div className='productsContainer container container-fluid'>
                {products.map((e, i)=>{
                    return <Product productDetails={e} key={i}/>;
                })}
            </div>
        </div>
    );
}

export default ProductsList;