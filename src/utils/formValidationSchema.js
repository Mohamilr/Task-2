import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required()
});

export const signupSchema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    gender: yup.string().required(),
    phone: yup.number().required(),
    birth_date: yup.date().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    country: yup.string().required(),
    timezone: yup.string().required(),
    ref_methods: yup.string().required()
});