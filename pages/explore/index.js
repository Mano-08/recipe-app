import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Loader from '../../components/explore/Loader';
import classes from './recipes.module.scss';
import searchImage from '../../images/search.png';
// import useDebounce from '../hooks/useDebounce';
import SearchResult from '../../components/explore/SearchResult';
import DataNotFound from '../../components/explore/DataNotFound';
import Error from '../../components/explore/Error';
import preloadedData from './preloadedData.json';

function Recipes() {
  const [search, setSearch] = useState('');

  const { data, isLoading, isError } = useQuery({
    queryKey: ['search', search],
    queryFn: () => {
      if (search) {
        return fetch(`https://api.edamam.com/search?q=${search}&to=18&app_id=${process.env.API_ID}&app_key=${process.env.API_KEY}`)
          .then((res) => res.json());
      }
      return { hits: [] };
    },
  });

  function handleFetch() {
    let i = 0;
    if (!isError && !isLoading && search === '') {
      return (
        <div className={classes.searchResults}>
          {preloadedData.recipes.map((element) => {
            i += 1;
            return (<SearchResult key={i} info={element} />);
          })}
        </div>
      );
    }
    if (isLoading) {
      return <Loader />;
    } if (isError) {
      return <Error />;
    } if (search !== '' && data?.count === 0) {
      return <DataNotFound />;
    }

    return (
      <div className={classes.searchResults}>
        {data?.hits.map((element) => {
          i += 1;
          return (<SearchResult key={i} info={element} />);
        })}
      </div>

    );
  }

  return (
    <>
      <div className={classes.searchBarBlock}>
        <input
          type="search"
          id="searchBar_Input"
          className={classes.searchInput}
          placeholder="Enter the dish name ..."
          onChange={(e) => (e.target.value === '' ? setSearch('') : null)}
          autoComplete="off"
          onKeyDown={(e) => (e.key === 'Enter' ? setSearch(e.target.value) : null)}
        />
        <button
          type="button"
          onClick={() => { setSearch(document.getElementById('searchBar_Input').value); }}
          className={classes.searchButton}
        >
          <Image src={searchImage} alt="search" />
        </button>
      </div>

      <section className={classes.results}>
        {handleFetch()}
      </section>
    </>
  );
}

export default Recipes;
