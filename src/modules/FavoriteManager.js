import React from "react";

export const addFavorite = (newFavorite) => {
    return fetch("http://localhost:8088/userFavorites", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newFavorite)
    }).then(response => response.json())
}
