
import React from 'react';

import  { TaskHead } from './components/taskhead';

export const SingleTask = () => {
    return (
        <>
            <div className="task-card">
                <TaskHead />
                
                <div className="content">
                    <input type="text" placeholder="Task title" className="title"/>
                    <div className="deadline">
                        <span className="label">Due to</span>
                        <span className="date">14 AUG 2020</span>
                    </div>
                    <div className="description">
                        <span className="label">Description</span>
                        <textarea className="text" placeholder="Describe your event">
                            There is no denying the fact that the success of an advertisement
                            lies mostly in the headline. The headline should attract the reader.
                        </textarea>
                    </div>
                    <div className="checklist">
                        <span className="label">Checklist</span>
                        <div className="sub-tasks">
                            <div className="sub-task completed">
                                <input type="text" value="Design new home page"/>
                            </div>
                            <div className="sub-task incompleted">
                                <input type="text" value="Send design samples to the customer"/>
                            </div>
                            <div className="sub-task">
                                <input type="text" placeholder="Add more"/>
                            </div>
                        </div>
                    </div>
                    <div className="tags">
                        <span className="tag first">Sketch</span>
                        <span className="tag second">Spotify</span>
                        <span className="tag third">Dribble</span>
                        <span className="tag fourth">Behance</span>
                        <span className="tag fifth">UX</span>
                    </div>
                    <div className="form-controls">
                        <button className="button-reset-task">Reset</button>
                        <button className="button-save-task">Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}