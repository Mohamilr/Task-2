import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required()
});

export const signupSchema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    first_name: yup.string().required('first name is a required field'),
    last_name: yup.string().required('last name is a required field'),
    gender: yup.string().required(),
    phone: yup.string().required('phone must be a number'),
    birth_date: yup.string().required('birth date is a required field'),
    city: yup.string().required(),
    state: yup.string().required(),
    country: yup.string().required(),
    timezone: yup.string().required(),
    ref_methods: yup.string().required()
});