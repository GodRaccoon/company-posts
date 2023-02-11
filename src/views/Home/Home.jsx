import { useEffect } from 'react'
import { fetchAllPosts } from '../../services'

const Home = () => {
    useEffect(()=>{
        getAllPosts();
    },[])

    const getAllPosts = async () => {
        const allPosts = await fetchAllPosts();
        console.log(allPosts)
    }

    return(
        <h1> Discovering the World </h1>
    )
}

export default Home