import React, {createContext} from "react"

const remoteURL = "http://localhost:8088"
export const DealContext = createContext()

export const getDealById = (dealId) => {
    return fetch(`${remoteURL}/deals/${dealId}?_expand=user&_expand=category`)
        .then(result => result.json())
}

export const getAllDeals = () => {
    return fetch(`${remoteURL}/deals?_expand=user`)
        .then(result => result.json())
}

export const deleteDeal = (id) => {
    return fetch(`${remoteURL}/deals/${id}`, {
        method: "DELETE"
    })
        .then(result => result.json())
}

export const addDeal = (newDeal) => {
    return fetch(`${remoteURL}/deals`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newDeal)
    }).then(response => response.json())
}

export const getFavoriteDeals = () => {
    return fetch(`${remoteURL}/userFavorites?_expand=user&expand=deal`)
    .then(res => res.json())
};

export const getFavoritesByUserId = (userId) => {
    return fetch(`${remoteURL}/userFavorites?_expand=user&expand=deal`)
    .then(res => res.json())
    .then(favoritesArray => {
        return favoritesArray.filter(favorite => favorite.userId === userId)
    })
};

export const addFavoriteDeal = (newFavoriteDeal) => {
    return fetch(`${remoteURL}/userFavorites`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newFavoriteDeal)
    }).then(response => response.json())
};



//fetch deal by categories 