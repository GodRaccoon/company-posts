import { Box, Container, Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react'
import { fetchGetPostById } from '../../services'
import { MainTitle, SecondaryTitle } from '../../components';
import { useParams } from 'react-router-dom';

const PostInfo = () => {

    const { id } = useParams();
    const [postInfo, setPostInfo] = useState('') 

    useEffect(()=>{
        getPostById(id);
    },[id])

    const getPostById = async (id) => {
        const postsById = await fetchGetPostById(id);
        setPostInfo(postsById)
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
                <Box>
                    <Paper
                        elevation={1}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            gap: 0,
                            padding: 1,
                            overflow: 'hidden',
                            width:'100%',
                        }}
                    >
                        <Box>
                            <Typography component='div' variant='h5'>{postInfo.title}</Typography>
                        </Box>
                        <Box>
                            <Typography component='div' variant='h8' sx={{mt:2}}>{postInfo.body}</Typography>
                        </Box>
                    </Paper>
                </Box>
            </Box>
        </Container>
    )
}

export default PostInfo