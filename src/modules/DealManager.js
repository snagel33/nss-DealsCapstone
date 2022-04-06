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

export const getAllFavorites = () => {
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

export const addFavorite = (newFavorite) => {
    return fetch(`${remoteURL}/userFavorites`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newFavorite)
    }).then(response => response.json())
};

export const removeFavorite = (id) => {
    return fetch(`${remoteURL}/userFavorites/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
};

export const updateDeal = (editedDeal) => {
    return fetch(`${remoteURL}/deals/${editedDeal.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedDeal)
    }).then(data => data.json());
};



//fetch deal by categories 