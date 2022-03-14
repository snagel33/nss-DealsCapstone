const remoteURL = "http://localhost:8088"

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