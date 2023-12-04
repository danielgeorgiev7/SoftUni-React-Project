import * as request from '../lib/request';
const baseUrl = 'http://localhost:3030/data/comments';

export const getComments = async () => {
    const result = await request.get(`${baseUrl}`, true);
    return result;
};

export const postComments = async (id) => {
    const data = {
        postId: id, Comments: []
    }
    const result = await request.post(`${baseUrl}`, true, data);
    return result;
};

export const putComments = async (id, data) => {
    const result = await request.put(`${baseUrl}/${id}`, true, data);
    return result;
};

export const deleteComments = async (id) => {
    const result = await request.remove(`${baseUrl}/${id}`, true);
    return result;
};