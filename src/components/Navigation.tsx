import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';

export function Navigation() {
  return (
    <nav className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NavLink className="App-link" to="/">
          Home
        </NavLink>
        <NavLink className="App-link" to="/about">
          About US
        </NavLink>
        <NavLink className="App-link" to="/form">
          Form
        </NavLink>
      </header>
    </nav>
  );
}
