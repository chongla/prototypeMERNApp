import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to="/">Homeeee</Link>

    <nav>
      <Link to="/helloworld">Hello World</Link>
    </nav>

    <hr />
  </header>
);

export default Header;
