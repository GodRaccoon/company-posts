import { Backdrop, Button, Fade, Modal, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import CreatePost from '../../Forms/CreatePostForm/CreatePost';

const CreatePostButton = (props) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'white',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        console.log('open modal')
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleCreatePost= () => {
        console.log('creating post')
    }

    return(
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
            }}
        >
            <Button
                onClick={()=>handleOpen()}
            >
                Create post
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <CreatePost/>
                    </Box>
                </Fade>
            </Modal>
        </Box>
    )
}

export default CreatePostButton