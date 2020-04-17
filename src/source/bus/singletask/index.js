
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { api } from '../../api';

import  { initialValues } from './initialValues';
import  { TaskHead } from './taskHead';
import  { TextInput } from './formFields/textInput';
import  { DeadLine } from './formFields/deadLine';
import  { TextArea } from './formFields/textArea';
import  { CheckList } from './formFields/checkList';
import  { Tag } from './formFields/tag';

import tags from './tags.json';


export const SingleTask = () => {
    const print = (data) =>  { 
        api.post.create()
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
                <TaskHead />
                
                <div className="content">
                    <Formik
                        initialValues={initialValues}
                        // validationSchema={validationSchema}
                        onSubmit={ print }
                    >
                        <Form>
                            <TextInput className="title" type="text" placeholder="Task title" name="title" />
                            
                            <DeadLine name ="deadline" label = "Due to" />
                                
                            <TextArea placeholder="Describe your event" name="description"/>
                            
                            <div className="checklist">
                                <span className="label">Checklist</span>
                                <div className="sub-tasks">
                                    <CheckList placeholder="Add more" name="subtask"/>
                                </div>
                            </div>

                            <Tag tags = { tags }/>
                           
                            <div className="form-controls">
                                <button className="button-reset-task">Reset</button>
                                <button className="button-save-task" type="submit">Save</button>
                            </div>
                            <div className="errors"></div>
                        </Form>
                    </Formik>

                </div>
            </div>
        </>
    )
}