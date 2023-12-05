import * as request from '../lib/request';
const baseUrl = 'http://localhost:3030/users';

export const getUser = async () => {
    const result = await request.get(`${baseUrl}/me`, true);
    return result;
};

export const putUser = async (data, userId) => {
    const result = await fetch(`${baseUrl}/${userId}`, {
        headers: {
            'X-Admin': "true",
            "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(data)
    })
    return result;
};