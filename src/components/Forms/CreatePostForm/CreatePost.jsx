import { Box, Button, TextField, Typography } from '@mui/material'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { textFieldYupValidation } from '../../../utilities'

const CreatePost = (props) => {

    const formValues = {
        title: '',
        body: '',
    }

    const CreatePostValidationSchema = Yup.object().shape({
        title:textFieldYupValidation,
        body: textFieldYupValidation
    })

    const handleSubmit = async (values) => {
        console.log('values',values)
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
                        <Field
                            as={TextField}
                            margin='normal'
                            size='small'
                            fullWidth
                            id='title'
                            label='Title *'
                            name='Title'
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
                    </Form>
                )}
            </Formik>
        </Box>
    )
}

export default CreatePost