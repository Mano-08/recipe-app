import React from 'react';
import classes from './Footer.module.scss';

function Footer() {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <footer className={classes.footer}>
      <p className={classes.footerText}>
        Bring
        {' '}
        <span className={classes.designText}>soul </span>
        to your
        {' '}
        favourite Recipe!

      </p>
      <p className={classes.copyright}>
        ©
        {' '}
        {year}
        {' '}
        at Recipe-App
      </p>
    </footer>
  );
}

export default Footer;
