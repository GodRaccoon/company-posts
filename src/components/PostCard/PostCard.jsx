import { Box, Typography } from '@mui/material'

const PostCard = (props) => {
    
    const {objData = {}, userId = '', id = '', title = '', body = ''} = props
    
    return(
        <Box
            display='column'
            justifyContent='center'
            alignItems='center'
        >
            <Typography variant="h4" component="h2">
                {'Some day I will be a post card'}
            </Typography>
        </Box>
    )
}

export default PostCard