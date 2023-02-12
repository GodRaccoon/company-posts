import { Box, Button, ButtonGroup, Card, CardMedia, Paper, Typography, useMediaQuery } from '@mui/material'
import { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { getRandomImage } from '../../services'


const PostCard = (props) => {
    
    const {objData = {}, userId = '', id = '', title = '', body = ''} = props
    
    const isActiveSm = useMediaQuery('(max-width: 600px');
    const buttons = [
        <Button key='update-button' onClick={()=>handleUpdatePost()}>Update</Button>,
        <Button key='delete-button' onClick={()=>handleDeletePost()}>Delete</Button>
    ];
    // const [image,setImage] = useState({})
    const history = useHistory();

    // useEffect(() => {
    //     generateRandomImage();
    // }, [])

    // const generateRandomImage = async () => {
    //     const response = await getRandomImage();
    //     setImage(response)
    // }

    const handleRedirect = () => {
        console.log('redirect')
        history.push(`/PostCard/${id}`)
    }

    const handleDeletePost = () => {
        console.log('delete post')   
    }

    const handleUpdatePost = () => {
        console.log('update post')   
    }

    return(
        <Box
            display='column'
            justifyContent='center'
            alignItems='center'
        >
            <Card
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    gap: 0,
                    padding: 1,
                    overflow: 'hidden',
                    width:'40rem',
                    height:'15rem',
                    maxWidth: isActiveSm ? '20rem':'40rem',
                    minHeight: '10rem',
                    minWidth: '5rem',
                    cursor:'pointer',
                }}
                // onClick={()=>{handleRedirect()}} 
            >
                <Box 
                    onClick={()=>{handleRedirect()}} 
                    sx={{height:'14rem'}}
                >
                    <Typography component='div' variant='h5'>{title}</Typography>
                    <Typography component='div' variant='h8' sx={{mt:2}}>{body}</Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                    }}
                >
                    <ButtonGroup
                        orientation='horizontal'
                        aria-label='vertical outlined button group'
                    >
                        {buttons}
                    </ButtonGroup>
                </Box>
            </Card>
        </Box>
    )
}

export default PostCard