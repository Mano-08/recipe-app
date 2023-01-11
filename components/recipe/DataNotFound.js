import React from 'react';
import Image from 'next/image';
import error404 from '../../images/orange.png';
import classes from './DataNotFound.module.scss';

function DataNotFound() {
  return (
    <div className={classes.error404_page}>
      <section className={classes.error404_message}>
        <h1>Ooops..</h1>
        <p>Sorry, data not found :/</p>
      </section>
      <Image className={classes.error404_image} src={error404} />
    </div>
  );
}

export default DataNotFound;
