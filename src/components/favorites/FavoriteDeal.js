import React, { createContext } from "react";

const remoteURL = "http://localhost:8088";
export const FavoriteDealContext = createContext();

export const FavoriteProvider = (props) => {
    const [favoriteDeals, setFavoriteDeals] = useState([]);
    const [userFavorites, setUserFavorites] = useState([]);
    const currentUserId = parseInt(localStorage.getItem("deal_user"));
    
    const getFavoriteDeals = () => {
        return fetch(`${remoteURL}/favoriteDeals?_expand=user&expand=deal`)
        .then(res => res.json())
        .then(setFavoriteDeals);
    };

    const getFavoritesByUserId = (userId) => {
        return fetch(`${remoteURL}/favoriteDeals?_expand=user&expand=deal`)
        .then(res => res.json())
        .then(favoritesArray => {
            return favoritesArray.filter(favorite => favorite.userId === userId)
        })
        .then(setUserFavorites);
    };
    
    const addFavoriteDeal = (newFavoriteDeal) => {
        return fetch(`${remoteURL}/favoriteDeals`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newFavoriteDeal)
        }).then(getFavoriteDeals);
    };
    
    const deleteFavoriteDeal = (favoriteDealId) => {
        return fetch(`${remoteURL}/favoriteDeals/${favoriteDealId}`, {
        method: "DELETE"
        }).then(getFavoriteDeals);
    };
    
    return (
        <FavoriteDealContext.Provider
        value={{
            favoriteDeals,
            addFavoriteDeal,
            deleteFavoriteDeal,
            getFavoriteDeals,
            getFavoritesByUserId,
            userFavorites,
            currentUserId
        }}
        >
        {props.children}
        </FavoriteDealContext.Provider>
    );
    }

