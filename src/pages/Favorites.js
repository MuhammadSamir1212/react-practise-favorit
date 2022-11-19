import React, { useContext } from "react";
import MeetupListt from "../components/meetups/MeetupListt";
import FavoritesContext from "../store/favorites-context";

const Favorites = () => {

  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if(favoritesCtx.totalFavorites === 0){
    content= <p>Try To Add Some Favorites</p>
  }else {
    content= <MeetupListt meetups={favoritesCtx.favorites}/>
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
};

export default Favorites;
