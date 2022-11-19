import React, {useContext} from "react";
import stayles from "./MeetupItem.module.css";
import Card from "../ui/Card";
import FavoritesContext from "../../store/favorites-context";

const MeetupItem = (props) => {

  const favoritesCtx = useContext(FavoritesContext)

  const isFavorites = favoritesCtx.isFavorites(props.id)

  const toggleFavoritesStatsHandler = () => {
    if(isFavorites){
      favoritesCtx.removeFavorites(props.id)
    }else{
      favoritesCtx.addFavorites({
        id: props.id,
        title:props.title,
        image: props.image,
        address:props.address,
        description:props.description
      })
    }
  }
  return (
    <li className={stayles.item}>
      <Card>
        <div className={stayles.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={stayles.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={stayles.actions}>
          <button onClick={toggleFavoritesStatsHandler}>{isFavorites ? 'Remove From Favorites' : 'Add To Favorites'}</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
