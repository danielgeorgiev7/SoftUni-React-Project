export const buildOptions = (authenticationBool, data) => {
    const options = {};

    if (data) {
        options.body = JSON.stringify(data);
        options.headers = {
            'Content-Type': 'application/json'
        };
    }

    const token = localStorage.getItem('accessToken');

    if (authenticationBool) {

        options.headers = {
            ...options.headers,
            'X-Authorization': token
        };
    }

    return options;
};

const request = async (method, url, authenticationBool, data) => {
    const response = await fetch(url, {
        ...buildOptions(authenticationBool, data),
        method,
    });

    if (response.status === 204) {
        return {};
    }

    const result = await response.json();

    if (!response.ok) {
        return result;
    }

    return result;
};

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const remove = request.bind(null, 'DELETE');
export const patch = request.bind(null, 'PATCH');


