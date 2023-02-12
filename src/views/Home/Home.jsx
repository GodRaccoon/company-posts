import { Box, Container } from '@mui/material';
import { useEffect, useState } from 'react'
import { fetchAllPosts } from '../../services'
import { MainTitle, SecondaryTitle, PostCard } from '../../components';
import CardLayoutContainer from '../../layouts/PostCardLayoutContainer/CardLayoutContainer'

const Home = () => {
    const [allPosts, setAllPosts] = useState([]);

    useEffect(()=>{
        getAllPosts();
    },[])

    const getAllPosts = async () => {
        const allPostsArray = await fetchAllPosts();
        setAllPosts(allPostsArray.slice(0, 10))
        console.log(allPostsArray.slice(0, 10))
    }

    const cardLayoutProps = {
        cardLayoutState: allPosts,
    }

    return(
        <Container maxWidth={false}>
            <Box
                display='column'
                justifyContent='center'
                alignItems='center'
                minHeight='100vh'
            >
                <SecondaryTitle title={'[Making your Life Easier]'}/>
                <MainTitle title={'Discovering the world'}/>
                <CardLayoutContainer
                    cardLayoutProps = {cardLayoutProps}
                    renderComponent = { PostCard }
                />
            </Box>
        </Container>
    )
}

export default Home