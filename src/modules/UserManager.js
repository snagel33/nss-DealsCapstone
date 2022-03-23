import React, {createContext} from "react";

const remoteURL = "http://localhost:8088"
export const UserContext = createContext();

export const getUserById = (userId) => {
    return fetch(`${remoteURL}/users/${userId}`)
        .then(res => res.json())
}

export const getAllUsers = (sessionUserId) => {
    return fetch(`${remoteURL}/users/?id=${sessionUserId}`)
        .then(res => res.json())
}

export const updateUser = (editedUser) => {
    return fetch(`${remoteURL}/users/${editedUser.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedUser)
    }).then(data => data.json());
  }