import axios from 'axios';

export default axios.create({
    baseURL: 'https://contacts-app-full-stack.vercel.app'
});