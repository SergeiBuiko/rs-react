/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/destructuring-assignment */
// eslint-disable-next-line import/no-unresolved
import { IProduct } from 'type/types';
// eslint-disable-next-line import/no-unresolved
import { products } from 'constants/products';
import './product.css';

import React from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
type CarsProps = {};

class Product extends React.Component<CarsProps, IProduct> {
  constructor(props: CarsProps) {
    super(props);
    this.state = {
      product: products,
    };
  }

  render() {
    return (
      <main className="main-content">
        {this.state.product.map((el) => (
          <div key={el.id} className="product-card">
            <img src={el.images[0]} alt="asas" className="product__image" />
            <h3>{el.title}</h3>
            <p>
              <span className="section_title">Description: </span>
              {el.description}
            </p>
            <p>
              <span className="section_title">Price: </span>
              {el.price}$
            </p>
          </div>
        ))}
      </main>
    );
  }
}
export default Product;
