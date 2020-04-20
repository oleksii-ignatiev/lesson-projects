
import React from 'react';
import { Formik, Form, useFormik } from 'formik';
import { api } from '../../api';

import  { initialValues } from './initialValues';
import  { TaskHead } from './formFields/taskHead';
import  { TextInput } from './formFields/textInput';
import  { DeadLine } from './formFields/deadLine';
import  { TextArea } from './formFields/textArea';
import  { CheckList } from './formFields/checkList';
import  { Tag } from './formFields/tag';
import  { Errors } from './formFields/errors';

import { validationSchema } from './formValidation';

import tags from './tags.json';


export const SingleTask = () => {
    const print = (data) =>  { 
        api.post.create(data)
            .then( (response) => {
                return response.json();
            })
        //     .then( (data) => { 
                //console.log(data); 
            // }); 
         };
         const get = () => { 
            api.post.get()
                .then( (response) => {
                    return response.json();
                })
                .then( (data) => { 
                    console.log(data); 
                }); 
             };
    return (
        <>
            <div className="task-card">
                <Formik
                    initialValues = { initialValues }
                    validationSchema = { validationSchema }
                    onSubmit = { print }
                >
                    <Form>
                        <TaskHead name="completed"/>
                
                        <div className="content">
                
                            <TextInput className="title" type="text" placeholder="Task title" name="title" />
                            
                            <DeadLine name ="deadline" label = "Due to" />
                                
                            <TextArea placeholder="Describe your event" name="description" />
                            
                            <CheckList label = "Checklist" name = "checklist" itemsList />

                            <Tag tags = { tags } name = "tag" />
                        
                            <div className="form-controls">
                                <button className="button-reset-task" onClick = {get}>Reset</button>
                                <button className="button-save-task" type="submit">Save</button>
                            </div>
                            
                            <Errors />

                        </div>
                    </Form>
                </Formik>
            </div>
        </>
    )
}