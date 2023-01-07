import React from 'react';
import Link from 'next/link';
import classes from './Navbar.module.scss';

function Navbar() {
  return (
    <navbar className={classes.navbar}>
      <p className={classes.logo}>Recipe-App</p>
      <ul className={classes.navlinks}>
        <li>
          <Link href="/books" className={classes.link}>
            Meals
          </Link>
        </li>
        <li>
          <Link href="/savedList" className={classes.link}>
            Favourites
          </Link>
        </li>
      </ul>
    </navbar>
  );
}

export default Navbar;
