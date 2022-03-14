const remoteURL = "http://localhost:8088"

export const getUserById = (userId) => {
    return fetch(`${remoteURL}/users/${userId}`)
        .then(res => res.json())
}

export const getAllUsers = () => {
    return fetch(`${remoteURL}/users`)
        .then(res => res.json())
}