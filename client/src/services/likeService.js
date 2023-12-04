import * as request from '../lib/request';
const baseUrl = 'http://localhost:3030/jsonstore/likes';

export const getLikes = async () => {
    const result = await request.get(`${baseUrl}`, false);
    return result;
};

export const postLikes = async (id) => {
    const data = {
        postId: id, likes: []
    }
    const result = await request.post(`${baseUrl}`, false, data);
    return result;
};

export const putLikes = async (id, data) => {
    const result = await request.put(`${baseUrl}/${id}`, false, data);
    return result;
};

export const deleteLikes = async (id) => {
    const result = await request.remove(`${baseUrl}/${id}`, false);
    return result;
};