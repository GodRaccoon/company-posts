import { Box, Button, TextField, Typography } from '@mui/material'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { textFieldYupValidation1, textFieldYupValidation2 } from '../../../utilities'
import { createPost } from '../../../services'

const CreatePost = (props) => {

    const { handleClose } = props

    const formValues = {
        title: '',
        body: '',
    }

    const CreatePostValidationSchema = Yup.object().shape({
        title:textFieldYupValidation1,
        body: textFieldYupValidation2
    })

    const handleSubmit = async (values) => {
        await createPost(values)
        handleClose()
    }

    return(
        <Box>
            <Box>
                <Typography variant='h8' component='h2'>
                    Please fill the next questions
                </Typography>
            </Box>
            <Formik initialValues={formValues} validationSchema={CreatePostValidationSchema} onSubmit={handleSubmit}>
                {({errors, touched})=>(
                    <Form>
                        <Box>
                            <Field
                                as={TextField}
                                margin='normal'
                                size='small'
                                fullWidth
                                id='title'
                                label='Title *'
                                name='title'
                                error={!!errors.title && touched.title}
                                helperText={<ErrorMessage name='title'/>}
                            />
                            <Field
                                as={TextField}
                                margin='normal'
                                size='small'
                                fullWidth
                                id='body'
                                label='Body *'
                                name='body'
                                error={!!errors.body && touched.body}
                                helperText={<ErrorMessage name='body'/>}
                            />
                            <Button
                                type='submit'
                                fullWidth
                                variant='contained'
                                color='error'
                                sx={{mt:3, mb:2}}
                            >
                                Submit
                            </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    )
}

export default CreatePost