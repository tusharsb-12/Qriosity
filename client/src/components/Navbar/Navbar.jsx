import React from 'react';
import { isLogin } from '../../utils/common';

import classes from './Navbar.module.css';

const AuthButton = () => {
  return (
    <a href='/auth' className={classes.authButton}>
      Login / Register
    </a>
  );
};

const Dropdown = () => {
  const links = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/create-quiz', label: 'Create quiz' },
    { href: '/take-quiz', label: 'Take quiz' },
    { href: '/account', label: 'Account' },
    { href: '/logout', label: 'Logout' },
  ];
  return (
    <div className={classes.dropdown}>
      <button className={classes.dropdownButton}>
        <span>Options</span>
        <div className={classes.dropdownContent}>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </div>
      </button>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <a href='/' className={classes.brandName}>
        Qriosity
      </a>
      {!isLogin() ? <AuthButton /> : <Dropdown />}
    </div>
  );
};

export default Navbar;
