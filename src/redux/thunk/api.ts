import axios from 'axios'

export const instance = axios.create({
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '91276776-a919-4d16-9f54-22659fce0a08'
    }

});