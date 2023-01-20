import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import classes from './favourites.module.scss';
import noFavourites from '../../images/noFavourites.png';
import FavoriteIconPage from '../../components/favourites/FavouriteIcon';
import cardClasses from '../../components/explore/SearchResult.module.scss';

function Favourites() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const dataFromDB = localStorage.getItem('myFavMeals');
    if (dataFromDB) {
      setData(JSON.parse(dataFromDB));
    }
  }, []);

  const [display, setDisplay] = useState(false);

  const handleEscape = (e) => {
    if (e.key === 'Escape' && display === true) {
      setDisplay(false);
    }
  };
  const handleClose = () => {
    display === true ? setDisplay(false) : setDisplay(true);
  };

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
          <div key={ele.name + ele.calories} className={cardClasses.card}>
            <Dialog open={display} onKeyDown={handleEscape}>
              <DialogTitle><h1>Ingredients</h1></DialogTitle>
              <DialogContent>
                <ul>
                  {ele.ingredients.map((element) => <li key={element}>{element}</li>)}
                </ul>
              </DialogContent>
              <button
                type="button"
                onClick={handleClose}
              >
                Close it

              </button>
            </Dialog>
            <Image loader={() => ele.imageURL} height={300} width={300} alt="dish_image" src={ele.imageURL} />

            <div className={cardClasses.dish_info}>
              <section className={cardClasses.dish_name}>
                <p>{ele.name}</p>
                <FavoriteIconPage
                  info={{
                    name: ele.name,
                    imageURL: ele.imageURL,
                    calories: ele.calories,
                    ingredients: ele.ingredients,
                    recipeURL: ele.recipeURL,
                  }}
                />
              </section>
              <section className={cardClasses.dish_numeric_info}>
                <p>{`Calories: ${ele.calories}`}</p>
              </section>
              <section className={cardClasses.recipe_buttons}>
                <button type="button" onClick={handleClose}>Ingredients</button>
                <Link href={ele.recipeURL} target="_blank"><button type="button">Recipe</button></Link>
              </section>
            </div>
          </div>
        ))}
      </div>
    </>

  );
}

export default Favourites;
