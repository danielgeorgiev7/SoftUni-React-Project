import * as request from '../lib/request';
const baseUrl = 'http://localhost:3030/users';

export const getUser = async () => {
    const result = await request.get(`${baseUrl}/me`, true);
    return result;
};

export const putUser = async (data, customPhoto, accessToken) => {
    const result = await fetch(`${baseUrl}/me`, {
        headers: {
            'X-Admin': "true",
            'X-Authorization': accessToken,
            "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({ ...data, img: customPhoto })
    })
    const resultData = await result.json();
    return resultData;
};