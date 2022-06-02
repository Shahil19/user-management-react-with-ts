import React from 'react';
import User from './User';

const Users = () => {
    const addUser = (): void => {

    }
    return (
        <div>
            <h2>Users</h2>
            <User
                name='shahil'
                age={21}
                addUser={addUser}
            ></User>
        </div>
    );
};

export default Users;