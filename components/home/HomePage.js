import React from 'react';
import Image from 'next/image';
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

        <p>
          This recipe API has the data of thousands of food,
          including international dishes.
        </p>

        <div className={classes.wrapper}>
          <p>
            Uncover your favourite recipe Now!
          </p>
          <button type="button" className={classes.home_button}>Explore All</button>
        </div>
      </section>

      <Image className={classes.home_chefImg} src={chef} alt="A Chef" />

    </div>
  );
}
