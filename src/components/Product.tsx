import React from 'react';
import { useProducts } from 'hooks/Fetchproduct';

import './product.css';

const Product = () => {
  const { allPhoto } = useProducts();
  return (
    <main className="main-content">
      {allPhoto?.map((el) => (
        <div key={el.id} className="product-card">
          <img
            src="https://i.dummyjson.com/data/products/1/1.jpg"
            alt="product_image"
            className="product__image"
          />
          {/* <h3>{el.title}</h3>
          <p>
            <span className="section_title">Description: </span>
            {el.description}
          </p>
          <p>
            <span className="section_title">Price: </span>
            {el.price}$
          </p>
          <p>
            <span className="section_title">Rating: </span>
            {el.rating}$
          </p> */}
          <p>
            <span className="section_title">Rating: </span>
            {el.title}$
          </p>
        </div>
      ))}
    </main>
  );
};
export default Product;
