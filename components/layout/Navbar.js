import React from 'react';
import Link from 'next/link';
import classes from './Navbar.module.scss';

function Navbar() {
  return (
    <navbar className={classes.navbar}>
      <p className={classes.logo}>Recipe-App</p>
      <ul className={classes.navlinks}>
        <li>
          <Link href="/recipes" className={classes.link}>
            Explore
          </Link>
        </li>
        <li>
          <Link href="/favourites" className={classes.link}>
            Favourites
          </Link>
        </li>
      </ul>
    </navbar>
  );
}

export default Navbar;
