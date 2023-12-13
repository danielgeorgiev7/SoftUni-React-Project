import * as request from '../lib/request';

export const getUser = async () => {
    const result = await request.get('http://localhost:3030/users/me', true);
    return result;
};

export const postUserImg = async (photo, accessToken) => {
    const result = await fetch('http://localhost:3030/data/userphotos', {
        headers: {
            'X-Authorization': accessToken,
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ photo })
    })
    const resultData = await result.json();
    return resultData;
};

export const putUserImg = async (id, photo, accessToken) => {
    const result = await fetch(`http://localhost:3030/data/userphotos/${id}`, {
        headers: {
            'X-Authorization': accessToken,
            "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({ photo })
    })
    const resultData = await result.json();
    return resultData;
};


export const getUserImg = async (accessToken) => {
    const result = await fetch(`http://localhost:3030/data/userphotos`, {
        headers: {
            'X-Authorization': accessToken,
            "Content-Type": "application/json",
        },
        method: "GET",
    })
    const resultData = await result.json();
    return resultData;
};