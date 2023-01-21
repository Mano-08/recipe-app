import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import classes from './favourites.module.scss';
import noFavourites from '../../images/noFavourites.png';
import SearchResult from '../../components/explore/SearchResult';

function Favourites() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const dataFromDB = localStorage.getItem('myFavMeals');
    if (dataFromDB) {
      setData(JSON.parse(dataFromDB));
    }
  }, []);

  if (data.length === 0) {
    return (
      <div className={classes.noFavourites_conatiner}>
        <h1>Favourites list is empty</h1>
        <Image alt="noFavourites" src={noFavourites} />
      </div>
    );
  }

  return (
    <>
      <h1 className={classes.myFavourits_heading}>My Favourites ... </h1>
      <div className={classes.favourites_container}>
        {data.map((ele) => (
          <SearchResult
            key={ele.name + ele.calories}
            info={{
              recipe: {
                calories: ele.calories,
                ingredientLines: ele.ingredients,
                label: ele.name,
                url: ele.recipeURL,
                image: ele.imageURL,
              },
            }}
          />
        ))}
      </div>
    </>

  );
}

export default Favourites;
