import React from 'react';
import { Link, IndexLink } from 'react-router';

const AppLayout = ({ children }) =>
  <div>
    <ul className="nav">
      <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
      <li><Link to="/counter" activeClassName="active">Counter</Link></li>
      <li><Link to="/gallery" activeClassName="active">Gallery</Link></li>
      <li><Link to="/dragon" activeClassName="active">Dragon Game</Link></li>
      <li><Link to="/weather/Atlanta" activeClassName="active">Weather ATLANTA</Link></li>
    </ul>
    <div>
    {children}
    </div>
  </div>;

export default AppLayout;
