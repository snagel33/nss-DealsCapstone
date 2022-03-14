const remoteURL = "http://localhost:8088"

export const getCategoryById = (categoryId) => {
    return fetch(`${remoteURL}/categories/${categoryId}`)
        .then(res => res.json())
}

export const getAllCategories = () => {
    return fetch(`${remoteURL}/categories`)
        .then(res => res.json())
}