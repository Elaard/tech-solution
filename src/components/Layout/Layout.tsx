import React from 'react';
import { Outlet } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Layout = () => {
  return (
    <div className="layout">
      <nav className="navbar">
        <h1 className="navbar__h1">Tech solutions</h1>
        <Cart />
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
