import React from 'react';
import { Formik, Form } from 'formik';
import { Styles } from './style.scss';


import { InputField } from './formFields/inputField';
import { SelectField } from './formFields/selectField';

import { initialValues } from './initialValues';
import { validate } from './formValidation';


export const StudentRegistration = () => {
    const print = (data) => {
        console.log(data);
    };

    return (
        <section>
            <h1>Please fill in the form!</h1>
            <Formik
                initialValues = { initialValues }
                onSubmit = { print }
                validationSchema = { validate }
            >
                <Form>
                    <InputField
                        label='First Name'
                        name='firstName'
                        type='text'
                        placeholder='Put your name here'
                    />
                    <InputField
                        label='Last Name'
                        name='lastName'
                        type='text'
                        placeholder='Put your last name here'
                    />
                    <InputField
                        label='Age'
                        name='age'
                        type='number'
                        placeholder='Put your age here'
                    />
                    <InputField
                        label='Email Address'
                        name='email'
                        type='email'
                        placeholder='Put your email here'
                    />
                    <InputField
                        label='Male'
                        name='sex'
                        type='radio'
                        value='male'
                    />
                    <InputField
                        label='Female'
                        name="sex"
                        type='radio'
                        value='female'
                        
                    />
                    <SelectField
                        label="Speciality"
                        name="speciality"
                    >
                        <option value="" hidden>Select your speciality</option>
                        <option value="designer">Designer</option>
                        <option value="development">Developer</option>
                        <option value="writer">Writer</option>
                    </SelectField>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </section>
    )
};