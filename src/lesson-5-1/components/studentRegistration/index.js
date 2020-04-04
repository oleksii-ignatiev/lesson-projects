import React from 'react';
import { Formik, Form } from 'formik';

import { InputField } from './formFields/inputField';
import { SelectField } from './formFields/selectField';

import { initialValues } from './initialValues';

export const StudentRegistration = () => {
    const print = (data) => {
        console.log(data);
    };

  return (
    <section>
        <h1>Please fill in the form!</h1>
        <Formik
            initialValues={ initialValues }
            onSubmit={ print }
            
        >
            <Form>
                <InputField
                    label='First Name'
                    name='firstName'
                    type='text'
                    placeholder='Put your name here'
                /><br/>
                <InputField
                    label='Last Name'
                    name='lastName'
                    type='text'
                    placeholder='Put your last name here'
                /><br/>
                <InputField
                    label='Age'
                    name='age'
                    type='number'
                    placeholder='Put your age here'
                /><br/>
                <InputField
                    label='Email Address'
                    name='email'
                    type='email'
                    placeholder='Put your email here'
                /><br/>
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
                    
                /><br/>
                <SelectField
                    label="Speciality"
                    name="speciality"
                >
                    <option value="" hidden>Select your speciality</option>
                    <option value="designer">Designer</option>
                    <option value="development">Developer</option>
                    <option value="writer">Writer</option>
                </SelectField><br/>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    </section>
  )
};