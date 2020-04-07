import * as Yup from 'yup';

export const validate = Yup.object().shape({

    firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Should be not empty'),

    lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Should be not empty'),

    age: Yup.number()
        .min(7, 'Age should be grater than 6')
        .max(59, 'Age should be less than 60'),

    email: Yup.string()
        .email('Should be valid email')
        .required('Should be not empty'),

    speciality: Yup.string()
        .required('Should be not empty')
        .oneOf(['designer', 'development', 'writer'], 'You should put correct speciality'),
});
