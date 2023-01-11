import React from 'react';
import { LineWave } from 'react-loader-spinner';
import classes from './Loader.module.scss';

function Loader() {
  return (
    <div className={classes.loader}>
      <LineWave
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="line-wave"
        wrapperStyle={{}}
        wrapperClass=""
        visible
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />
    </div>
  );
}

export default Loader;
