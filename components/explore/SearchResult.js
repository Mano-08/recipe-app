import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import classes from './SearchResult.module.scss';

function SearchResult(props) {
  const { info } = props;
  const calories = Math.round((info.recipe.calories + Number.EPSILON) * 100) / 100;
  const [display, setDisplay] = React.useState(false);
  const ingredients = info.recipe.ingredientLines;
  const handleEscape = () => {
    if (display === true) {
      setDisplay(false);
    }
  };

  return (
    <div className={classes.card}>
      <Dialog id="dialogBox" open={display} onKeyDown={(e) => { if (e.key === 'Escape') { handleEscape(); } }}>
        <DialogTitle />
        <DialogContent>{ingredients}</DialogContent>
        <button
          type="button"
          onClick={() => {
            display === true ? setDisplay(false) : setDisplay(true);
          }}
        >
          Close it!

        </button>
      </Dialog>
      <img alt="dish_image" src={info.recipe.image} />

      <div className={classes.dish_info}>
        <section className={classes.dish_name}>
          <p>{info.recipe.label}</p>
          <Link href="/explore/recipe" value={info.recipe.ingredients}><button type="button">View Recipe</button></Link>
        </section>
        <section className={classes.dish_numeric_info}>
          <p>{`Calories: ${calories}`}</p>
          <p>{ info.recipe.dietLabels.length !== 0 ? `Labels: ${info.recipe.dietLabels}` : ''}</p>
          <button type="button" onClick={() => (display === true ? setDisplay(false) : setDisplay(true))}>dialog BOX</button>
        </section>
      </div>
    </div>
  );
}

export default SearchResult;
