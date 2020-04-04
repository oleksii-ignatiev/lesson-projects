export const validate = (values) => {
    const errors = {};
  
    if ( !values.lastName ) {
        errors.lastName = 'Required';
    } else if ( typeof values.lastName !== 'string' ) {
        errors.lastName = 'Invalid type';
    }

    if ( !values.firstName ) {
        errors.firstName = 'Required';
    }  else if ( typeof values.firstName !== 'string' ) {
        errors.firstName = 'Invalid type';
    }

    if ( values.age && (+values.age <= 6 || +values.age >= 60) ) {
        errors.age = 'Age should be grater than 6 and less than 60 years'
    }
    
    if (!values.email ) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.speciality ) {
        errors.speciality = 'Required';
    }
    return errors;
};