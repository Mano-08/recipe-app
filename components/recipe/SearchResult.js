import classes from './SearchResult.module.scss';

function SearchResult(props) {
  const { info } = props;
  const calories = Math.round((info.recipe.calories + Number.EPSILON) * 100) / 100;

  return (
    <div className={classes.card}>
      <img alt="dish_image" src={info.recipe.image} />

      <div className={classes.dish_info}>
        <section className={classes.dish_name}>
          <p>{info.recipe.label}</p>
          <aside><button type="button" href="www.amazon.com">View Recipe</button></aside>
        </section>
        <section className={classes.dish_numeric_info}>
          <p>{calories}</p>
          <p>{info.recipe.dietLabels}</p>
        </section>
      </div>
    </div>
  );
}

export default SearchResult;
