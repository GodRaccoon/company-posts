import { Box, Typography } from '@mui/material'

const SecondaryTitle = (props) => {

    const { title } = props;

    return(
        <Box>
            <Typography align='center' variant='h2' component='h2'>
                {title}
            </Typography>
        </Box>
        
    )
}

export default SecondaryTitle