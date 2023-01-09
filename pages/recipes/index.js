import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import classes from './recipes.module.scss';
import searchImage from '../../images/search.png';
import useDebounce from '../hooks/useDebounce';

function SearchResult({
  isLoading, data, length, search,
}) {
  return (
    <div className="flex flex-col px-4 py-2
        w-full bg-gray-500 divide-y divide-gray-300"
    >
      {search !== '' && length === 0 && <h1>Could not find relevent data :/</h1>}
      {isLoading && <div style={{ color: 'white' }} className="text-white">Loading...</div>}
      {data && data.map((item) => (
        <div key={item.id} style={{ backgroundColor: 'red', color: 'white' }} className="text-gray-100 py-2">
          {item.title}
        </div>
      ))}
    </div>
  );
}

function Recipes() {
  const [search, setSearch] = useState('');
  const debouncedSearchTerm = useDebounce(search, 200);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['search', debouncedSearchTerm],
    queryFn: () => {
      if (debouncedSearchTerm) {
        return fetch(`https://dummyjson.com/products/search?q=${debouncedSearchTerm}`)
          .then((res) => res.json());
      }
      return { products: [] };
    },
  });

  return (
    <>
      <div className={classes.searchBarBlock}>
        <input
          type="search"
          id="searchBar_Input"
          className={classes.searchInput}
          placeholder="Enter the dish name ..."
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setSearch(e.target.value);
            }
          }}
        />
        <button
          type="button"
          onClick={() => {
            setSearch(document.getElementById('searchBar_Input').value);
          }}
          className={classes.searchButton}
        >
          <Image src={searchImage} alt="search" />
        </button>
      </div>

      <SearchResult
        isLoading={isLoading}
        data={data?.products}
        isError={isError}
        length={data?.products.length}
        search={search}
      />
    </>

  );
}

export default Recipes;
