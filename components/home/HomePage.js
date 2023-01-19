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

        {/* <p>
          This recipe API has the data of over a hundred thousand dishes
        </p> */}

        <div className={classes.wrapper}>
          <p>
            Uncover your favourite recipe Now!
          </p>
          <Link href="/explore" className={classes.home_button}>
            <div type="button">
              Explore All
            </div>
          </Link>
        </div>
      </section>

      <Image className={classes.home_chefImg} src={chef} alt="A Chef" />

    </div>
  );
}
