import React, { FC } from 'react';

interface Props {
    name: string;
    age: number,
    addUser: () => void
}

const User: FC<Props> = ({ name, age }) => {
    return (
        <div>
            <h2>Hello from {name} with experience of {age} years</h2>
        </div>
    );
};

export default User;