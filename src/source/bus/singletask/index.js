
import React, { useState } from 'react';
import { Formik} from 'formik';
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
import { useGetTask } from './hooks/useGetTask';

import tags from './tags.json';

export const SingleTask = (props) => {
    
    const [isTouched, setIsTouched] = useState(false);
    const task = props.currentTask || initialValues;
    
    return ( ( props.isCardVisible ) ?
        <>
            <div className="task-card">
                <Formik
                    initialValues = { initialValues }
                    validationSchema = { validationSchema }
                    onSubmit = { (values) => {
                            setTimeout(() => {
                                console.log(values);
                                api.task.create(values)
                                .then( (response) => {
                                    return response.json();
                                })
                                
                                props.setNewTask(true);
                                props.closeCard();
                            }, 500);
                          }
                     } 
                >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => ( 
                    <form onSubmit={handleSubmit}>
                        <TaskHead 
                            name="completed" 
                            submitted = {isSubmitting} 
                            completed = { task.completed } 
                            hash = {task.hash}
                            closeCard = {props.closeCard}
                            />
                        <div className="content">
                            <TextInput 
                                className="title" 
                                type="text" 
                                placeholder="Task title" 
                                name="title" 
                                value = { task.title || values.title } 
                                onChange={ handleChange}
                                onBlur={ handleBlur } 
                            />
                            
                            <DeadLine name ="deadline" label = "Due to" value = { task.deadline || values.deadline } />
                                
                            <TextArea 
                                placeholder="Describe your event" 
                                name="description"
                                value = { task.description || values.description }
                            />
                            
                            <CheckList label = "Checklist" name = "checklist" />

                            <Tag 
                                tags = { tags } 
                                name = "tag"
                                value = { task.tag || values.tag } 
                                onChange={ handleChange }
                                onBlur={ handleBlur } 
                            />
                        
                            <div className="form-controls">
                                <button className="button-reset-task" disabled = {!isTouched} >Reset</button> 
                                <button className="button-save-task" type="submit">Save</button>
                            </div>
                            
                            <Errors />

                        </div>
                    </form>
                )}
                </Formik>
            </div>
        </>
        : ''
    )
}