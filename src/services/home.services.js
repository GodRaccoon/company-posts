import axios from 'axios';

const API_URL_1 = 'https://jsonplaceholder.typicode.com/posts/'
const API_URL_2 = 'https://jsonplaceholder.typicode.com/posts'

export const fetchAllPosts= async () => {
    try {
        const response = await axios.get(`${API_URL_2}`);
        return response.data;
    } catch (error) {
        console.log('error getting all posts',error);
    }
}

export const fetchGetPostById = async (id) => {
    try {
        const response = await axios.get(`${API_URL_1}${id}`);
        return response.data;
    } catch (error) {
        console.log('error getting post by id',error)
    }
}

export const createPost = async ({title, body}) => {
    try {
        const response = await axios.post(`${API_URL_2}`,{title,body,userId:1});
        return response.data;
    } catch (error) {
        console.log('error creating post by id',error)
    }
}

export const updatePost = async ({id,title,body,userId}) => {
    try {
        const response = await axios.put(`${API_URL_1}${id}`,{id,title,body,userId});
        return response.data;
    } catch (error) {
        console.log('error updating post by id',error)
    }
}

export const deletePost = async (id) => {
    try {
        const response = await axios.delete(`${API_URL_1}${id}`);
        return response.data;
    } catch (error) {
        console.log('error deleting post by id',error)
    }
}