import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>MyNovelList</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Novels List
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Novel
        </NavLink>
      </div>
    </header>
  );
};

export default Header;