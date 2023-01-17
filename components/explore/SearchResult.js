import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import classes from './SearchResult.module.scss';

function SearchResult(props) {
  const { info } = props;
  const calories = Math.round((info.recipe.calories + Number.EPSILON) * 100) / 100;
  const [display, setDisplay] = React.useState(false);
  const ingredients = info.recipe.ingredientLines;
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
      <Dialog disableTypography PaperProps={{ id: 'dialogBox' }} open={display} onKeyDown={handleEscape}>
        <DialogTitle disableTypography PaperProps={{ style: { color: 'red' } }}><h1>Ingredients</h1></DialogTitle>
        <DialogContent>
          <ul>
            {ingredients.map((element) => <li>{element}</li>)}
          </ul>
        </DialogContent>
        <button
          type="button"
          onClick={handleClose}
        >
          Close it!

        </button>
      </Dialog>
      <img alt="dish_image" src={info.recipe.image} />

      <div className={classes.dish_info}>
        <section className={classes.dish_name}>
          <p>{info.recipe.label}</p>
        </section>
        <section className={classes.dish_numeric_info}>
          <p>{`Calories: ${calories}`}</p>
        </section>
        <section className={classes.recipe_buttons}>
          <button type="button" onClick={handleClose}>Ingredients</button>
          <Link href={info.recipe.url} target="_blank"><button type="button">Recipe</button></Link>
        </section>
      </div>
    </div>
  );
}

export default SearchResult;
