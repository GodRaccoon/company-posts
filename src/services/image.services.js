import axios from 'axios';

const API_URL = 'https://source.unsplash.com/random'

export const getRandomImage= async () => {
    try {
        const response = await axios.get(`${API_URL}`);
        return response.data;
    } catch (error) {
        console.log('error getting all posts',error);
    }
}