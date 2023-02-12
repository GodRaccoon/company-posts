import { Box, Button, ButtonGroup, Paper, Typography, useMediaQuery } from '@mui/material'

const PostCard = (props) => {
    
    const {objData = {}, userId = '', id = '', title = '', body = ''} = props
    
    const isActiveSm = useMediaQuery('(max-width: 600px');
    const buttons = [
        <Button key='update-button'>Update</Button>,
        <Button key='delete-button'>Delete</Button>
    ];

    return(
        <Box
            display='column'
            justifyContent='center'
            alignItems='center'
        >
            <Paper
                elevation={1}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    gap: 0,
                    padding: 1,
                    overflow: 'hidden',
                    width:'40rem',
                    maxWidth: isActiveSm ? '20rem':'40rem',
                    minHeight: '10rem',
                    minWidth: '5rem',
                    cursor:'pointer'
                }}
            >
                <Box>
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
            </Paper>
        </Box>
    )
}

export default PostCard