import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({

    completed: Yup.bool(),
        
    title: Yup.string()
        .required('Task title field is required'),

    deadline: Yup.string()
        .required('Date is required'),

    description: Yup.string(),
        
    tag: Yup.string()
        .required('Task tag field is required'),
    
    checklist: Yup.array().of(Yup.object().shape({
        title: Yup.string()
            .required('Sub-task title is required')
            .min(3, 'Sub-task title is too short'),
        completed: Yup.bool(),
    }))//.required()
});