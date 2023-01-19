import React from 'react';
import Link from 'next/link';
import classes from './Navbar.module.scss';

function Navbar() {
  return (
    <navbar className={classes.navbar}>
      <Link href="/"><p className={classes.logo}>Recipe-App</p></Link>
      <ul className={classes.navlinks}>
        <li>
          <Link href="/explore" className={classes.link}>
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
