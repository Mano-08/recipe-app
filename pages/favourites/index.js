import React, { useEffect, useState } from 'react';
import classes from './favourites.module.scss';

function Favourites() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const dataFromDB = localStorage.getItem('myFavMeals');
    if (dataFromDB) {
      setData(JSON.parse(dataFromDB));
    }
  }, []);

  if (data.length === 0) {
    return <h1>NO data :/</h1>;
  }

  return (
    <div className={classes.favourites_container}>
      {data.map((ele) => <h1>{ele.name}</h1>)}
    </div>

  );
}

export default Favourites;
