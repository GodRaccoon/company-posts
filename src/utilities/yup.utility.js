import * as Yup from 'yup'

export const textFieldYupValidation1 = Yup.string()
    .strict(true)
    .matches(/^[aA-zZÀ-ÖÙ-Üà-öù-ü\s]+$/,'The field contanins invalid characters')
    .min(3,'It is required at least 3 characters')
    .required('The field is required')

    export const textFieldYupValidation2 = Yup.string()
    .strict(true)
    .matches(/^[aA-zZÀ-ÖÙ-Üà-öù-ü\s]+$/,'The field contanins invalid characters')
    .min(3,'It is required at least 3 characters')
    .required('The field is required')