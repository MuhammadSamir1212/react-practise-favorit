import React, { useContext } from "react";
import { Link } from "react-router-dom";
import stayles from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";

const MainNavigation = () => {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <header className={stayles.header}>
      <div className={stayles.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites <span className={stayles.badge}>{favoritesCtx.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
