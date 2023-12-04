import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) => {
    const result = await request.post(`${baseUrl}/login`, false, {
        email,
        password,
    });

    return result;
};

export const register = (username, email, password, img) => request.post(`${baseUrl}/register`, false, {
    username: username.substring(1),
    email,
    password,
    img,
});

export const logout = () => request.get(`${baseUrl}/logout`, false);
