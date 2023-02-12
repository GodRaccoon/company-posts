import * as Yup from 'yup'

export const textFieldYupValidation = Yup.string()
    .strict(true)
    .matches(/^[aA-zZÀ-ÖÙ-Üà-öù-ü\s]+$/,'The field contanins invalid characters')
    .min(3,'It is required at least 3 characters')
    .required('The field is required')