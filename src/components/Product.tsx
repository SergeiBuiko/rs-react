import React from 'react';
import { useProducts } from 'hooks/Fetchproduct';

import './product.css';

const Product = () => {
  const { allProd } = useProducts();
  return (
    <main className="main-content">
      {allProd.map((el) => (
        <div key={el.id} className="product-card">
          <img src={el.images[0]} alt="product_image" className="product__image" />
          <h3>{el.title}</h3>
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
          </p>
        </div>
      ))}
    </main>
  );
};
export default Product;
