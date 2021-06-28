import React from 'react';

import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <a href='/' className={classes.brandName}>
        Qriosity
      </a>
      <a href='/auth' className={classes.authButton}>
        Login / Register
      </a>
    </div>
  );
};

export default Navbar;
