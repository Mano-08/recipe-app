import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classes from './HomePage.module.scss';
import chef from '../../images/chef.png';

export default function HomePage() {
  return (
    <div className={classes.home}>
      <section className={classes.home_text}>
        <p className={classes.home_quote}>
          Finding recipes made
          {' '}
          <span style={{ fontSize: '1.2em', color: 'green', fontFamily: 'Aladin, cursive' }}>
            easy!
          </span>
        </p>

        <div className={classes.wrapper}>
          <span>
            Uncover your favourite recipe Now!
          </span>
          <Link href="/explore" className={classes.home_button}>
            <span type="button">
              Explore All
            </span>
          </Link>
        </div>
      </section>
      <div id={classes.imageWrapperHome}>
        <div id={classes.designerImageHome} />
        <Image className={classes.home_chefImg} src={chef} alt="A_Chef" priority />
      </div>

    </div>
  );
}
