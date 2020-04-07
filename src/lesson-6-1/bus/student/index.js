import React from 'react';

import { useStudent } from './hooks/useStudent';

export const Profile = () => {
    const { user } = useStudent();
    const profileJSX = user && (
        <>
            <p>Name: { user.firstName }</p>
            <p>Last Name: { user.lastName }</p>
            <p>Age: { user.age } </p>
            <p>Email: { user.email }</p>
            <p>Gender: { user.sex }</p>
            <p>Speciality: { user.speciality }</p>
        </>
    );
  
    return (
        <section>
            <h1>Profile</h1>
            {profileJSX}
            
        </section>
    )
}

