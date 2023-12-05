import * as request from '../lib/request';
const baseUrl = 'http://localhost:3030/data/posts';

export const createPost = ({ ownerUsername, content, ownerImg, img, likes }) => {
    const result = request.post(baseUrl, true, {
        ownerUsername,
        ownerImg,
        content,
        img,
        likes,
    });
    return result;
};

export const deletePost = async (id) => {
    const result = await request.remove(`${baseUrl}/${id}`, true);
    return result;
};

export const getPosts = async () => {
    const result = await request.get(baseUrl, true);
    return result.reverse();
};

export const editPost = async (id, data) => {
    const result = await request.put(`${baseUrl}/${id}`, true, data);
    return result;
};