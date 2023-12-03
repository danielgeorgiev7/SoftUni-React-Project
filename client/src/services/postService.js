import * as request from '../lib/request';
const baseUrl = 'http://localhost:3030/data/posts';

// export const getAll = async (gameId) => {
//     const query = new URLSearchParams({
//         where: `gameId="${gameId}"`,
//         load: `owner=_ownerId:users`,
//     });
//     const result = await request.get(`${baseUrl}?${query}`);
//     return result;
// };

export const createPost = ({ ownerUsername, content, ownerImg, img }) => {
    const result = request.post(baseUrl, {
        ownerUsername,
        content,
        ownerImg,
        img,
    });
    return result;
};

export const deletePost = async (id) => {
    const result = await request.remove(`${baseUrl}/${id}`, request.buildOptions);
    return result;
};

export const getPosts = async () => {
    const result = await request.get(baseUrl);
    return result;
};

export const editPostContent = async (id, data) => {
    const result = await request.put(`${baseUrl}/${id}`, data);
    return result;
};