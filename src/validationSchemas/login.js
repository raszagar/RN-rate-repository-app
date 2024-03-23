import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email()
        .required('Email is required'),

    password: yup
        .string()
        .min(5, 'Password must be at least 5 characters')
        .max(50, 'Password must be at most 50 characters')
        .required('Password is required')
});
