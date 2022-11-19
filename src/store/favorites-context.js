import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorites: (favoriteMeetup) => {},
  removeFavorites: (meetupId) => {},
  isFavorites: (meetupId) => {}
});

export const FavoritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoritesHandler = (favoriteMeetup) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  };
  const removeFavoritesHandler = (meetupId) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
    });
  };
  const isFavoritesHandler = (meetupId) => {
    return userFavorites.some(meetup => meetup.id === meetupId);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorites: addFavoritesHandler,
    removeFavorites: removeFavoritesHandler,
    isFavorites: isFavoritesHandler
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
