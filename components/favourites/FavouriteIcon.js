import { useState, useEffect } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import dynamic from 'next/dynamic';
import { toast } from 'react-toastify';

function FavoriteIconComponent({ info }) {
  function getStorageList() {
    const list = localStorage.getItem('myFavMeals');
    if (list) {
      return JSON.parse(list);
    }
    return [];
  }
  const [items, setItems] = useState(getStorageList());

  useEffect(() => {
    localStorage.setItem('myFavMeals', JSON.stringify(items));
  }, [items]);

  let Favorites = false;
  for (let i = 0; i < items.length; i += 1) {
    if (items[i].name === info.name && items[i].calories === info.calories) {
      Favorites = true;
    }
  }

  const handleToggleFavourite = () => {
    if (Favorites) {
      toast.error('Removed from favourites', {
        position: 'bottom-right',
        autoClose: 1650,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: 'light',
      });
      const currentList = getStorageList();
      const removeItemName = info.name;
      const removeItemCalories = info.calories;
      for (let i = 0; i < currentList.length; i += 1) {
        if (currentList[i].name === removeItemName
            && currentList[i].calories === removeItemCalories) {
          currentList.splice(i, 1);
        }
        setItems(currentList);
      }
    } else {
      toast.success('Added to favourites', {
        position: 'bottom-right',
        autoClose: 1650,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: 'light',
      }); const currentList = getStorageList();
      const newList = [...currentList, info];
      setItems(newList);
    }
  };

  return (
    <>
      {Favorites === true
        ? (
          <FavoriteIcon
            style={
              { fill: 'red', transform: 'scale(1.05)', transition: '0.5s ease-in-out' }
              }
            onClick={handleToggleFavourite}
          />
        )
        : <FavoriteBorderIcon onClick={handleToggleFavourite} />}
      <div style={{ display: 'none' }} />
    </>
  );
}

const FavoriteIconPage = dynamic(() => Promise.resolve(FavoriteIconComponent), { ssr: false });
export default FavoriteIconPage;
