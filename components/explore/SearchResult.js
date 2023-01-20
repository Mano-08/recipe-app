import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import {
  React, useState,
} from 'react';
import FavoriteIconPage from '../favourites/FavouriteIcon';
import classes from './SearchResult.module.scss';

function SearchResult(props) {
  const { info } = props;
  const calories = Math.round((info.recipe.calories + Number.EPSILON) * 100) / 100;
  const ingredients = info.recipe.ingredientLines;
  const name = info.recipe.label;
  const recipeURL = info.recipe.url;
  const imageURL = info.recipe.image;

  const [display, setDisplay] = useState(false);

  const handleEscape = (e) => {
    if (e.key === 'Escape' && display === true) {
      setDisplay(false);
    }
  };
  const handleClose = () => {
    display === true ? setDisplay(false) : setDisplay(true);
  };

  return (
    <div className={classes.card}>
      <Dialog open={display} onKeyDown={handleEscape}>
        <DialogTitle><h1 className={classes.dialogTitle}>Ingredients</h1></DialogTitle>
        <DialogContent>
          <ul className={classes.dialogIngredientsList}>
            {ingredients.map((element) => <li key={element}>{element}</li>)}
          </ul>
        </DialogContent>
        <button
          className={classes.dialogCloseButton}
          type="button"
          onClick={handleClose}
        >
          Close it

        </button>
      </Dialog>
      <Image loader={() => imageURL} src={imageURL} alt="dishImage" width={500} height={500} />

      <div className={classes.dish_info}>
        <section className={classes.dish_name}>
          <p>{name}</p>
          <FavoriteIconPage info={{
            name, imageURL, calories, ingredients, recipeURL,
          }}
          />
        </section>
        <section className={classes.dish_numeric_info}>
          <p>{`Calories: ${calories}`}</p>
        </section>
        <section className={classes.recipe_buttons}>
          <button type="button" onClick={handleClose}>Ingredients</button>
          <Link href={recipeURL} target="_blank"><button type="button">Recipe</button></Link>
        </section>
      </div>
    </div>
  );
}

export default SearchResult;
