import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { isLogin } from '../../utils/common';
import { logout } from '../../redux/actions/auth';

import classes from './Navbar.module.css';

const AuthButton = () => {
  return (
    <a href='/auth' className={classes.authButton}>
      Login / Register
    </a>
  );
};

const Dropdown = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const links = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/attempted', label: 'Attempted' },
    { href: '/all', label: 'All quizzes' },
    { href: '/created', label: 'Created' },
    { href: '/create-quiz', label: 'Create quiz' },
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
          <button
            className={classes.dropdownButton}
            onClick={dispatch(logout(history))}
          >
            Logout
          </button>
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
