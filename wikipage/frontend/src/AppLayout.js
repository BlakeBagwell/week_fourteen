import React from 'react';
import { Link, IndexLink } from 'react-router';


const AppLayout = ({children}) =>
  <div>
    <ul className="nav">
      <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
      <li><Link to="/wiki" activeClassName="active">WikiPage</Link></li>
    </ul>
    <div>
      {children}
    </div>
  </div>

export default AppLayout;
