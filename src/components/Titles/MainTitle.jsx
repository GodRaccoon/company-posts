import { Typography } from '@mui/material'

const MainTitle = (props) => {

    const { title } = props;

    return(
        <Typography align='center' variant='h2' component='h2'>
            {title}
        </Typography>
    )
}

export default MainTitle