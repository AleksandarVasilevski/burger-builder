import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-ad0c0.firebaseio.com/'
});

export default instance;