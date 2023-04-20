import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import CartButtonContainer from '../CartButton/CartButtonContainer';
import { Routes } from '../../Routes';

const Layout = () => {
  return (
    <div className="layout">
      <nav className="navbar">
        <h1 className="navbar__h1">
          <Link to={Routes.Home}>Tech solutions</Link>
        </h1>
        <CartButtonContainer />
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
