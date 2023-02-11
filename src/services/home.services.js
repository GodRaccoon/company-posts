import axios from 'axios';

const API_URL_1 = 'https://jsonplaceholder.typicode.com/posts/'
const API_URL_2 = 'https://jsonplaceholder.typicode.com/posts'

export const fetchAllPosts= async () => {
    try {
        const response = await axios.get(`${API_URL_2}`);
        console.log('response',response)
        return response.data;
    } catch (error) {
        console.log('error getting all posts',error);
    }
}

export const fetchGetPostById = async (id) => {
    try {
        const response = await axios.get(`${API_URL_1}${id}`);
        console.log('response',response)
        return response.data;
    } catch (error) {
        console.log('error getting post by id',error)
    }
}