import React, { FormEventHandler, useState } from 'react';

interface User {
    name: string;
    age: number;
}
const Counter = () => {

    const [number, setNumber] = useState<number>(0)
    const [user, setUser] = useState<null | User>(null)

    const increaseNum = (): void => {
        setNumber(number + 1)
    }

    const handleUserSubmit = () => {

        const user = {
            name: "Khan",
            age: 33
        }
        setUser(user)
    }

    return (
        <div>
            <h2>This is counter</h2>
            <h1>{number}</h1>
            <button onClick={increaseNum}>Increase</button>
            <br />
            <button>Decrease</button>
        </div>
    );
};

export default Counter;