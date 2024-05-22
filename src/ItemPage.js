import classes from './App.module.scss';
import { useLoaderData } from 'react-router-dom';
import { TopBar } from './TopBar';

export function ItemPage() {
  const itemData = useLoaderData();

  return (
    <div className={classes.App}>
      <header className={classes["App-header"]}>
        <TopBar/>

        <img
          src={itemData.strMealThumb}
          alt={itemData.strMeal + ' photo'}
          width="200"

        />
        <h1>
          {itemData.strMeal}
          <small>({itemData.strCategory})</small>
        </h1>

        <div>
          {itemData.strInstructions}
        </div>

      </header>
    </div>
  );
}