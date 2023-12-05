import * as request from '../lib/request';
const baseUrl = 'http://localhost:3030/data/postcomments';

export const getComments = async () => {
    const result = await request.get(`${baseUrl}`, true);
    return result;
};

export const postComments = async (postId, comment, ownerUsername, ownerImg) => {
    const data = {
        postId, comment, ownerUsername, ownerImg, edited: false,
    }
    const result = await request.post(`${baseUrl}`, true, data);
    return result;
};

export const putComments = async (data, customPhoto) => {
    const result = await request.put(`${baseUrl}/${data._id}`, true, {
        ...data, img: customPhoto,
    });
    return result;
};

export const deleteComments = async (id) => {
    const result = await request.remove(`${baseUrl}/${id}`, true);
    return result;
};