// eslint-disable-next-line import/no-unresolved
import Product from 'components/Product';
// eslint-disable-next-line import/no-unresolved
import SearchBar from 'components/SearchBar';
import React from 'react';

export function MainPage() {
  return (
    <div>
      {/* <input type="text" className="search-field" /> */}
      <SearchBar />
      <h1>Current product list</h1>
      <Product />
    </div>
  );
}
// export { Homepage };
