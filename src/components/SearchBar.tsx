import React, { Component } from 'react';
// eslint-disable-next-line import/no-unresolved
import { ISearchBar } from 'type/types';
import './SearchBar.css';

class SearchBar extends Component<object, ISearchBar> {
  constructor(props: object) {
    super(props);
    this.state = {
      inputValue: localStorage.getItem('searchValue') || '',
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { value: inputValue },
    } = event;
    this.setState({ inputValue });
    localStorage.setItem('searchValue', inputValue);
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div>
        <label htmlFor="input-field">
          Enter a product:
          <input
            className="search-field"
            type="text"
            id="input-field"
            value={inputValue}
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }
}

export default SearchBar;
