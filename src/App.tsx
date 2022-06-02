import React from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './Components/Users';
import Counter from './Components/Counter';

// variable
const age: number = 44
const students: (string | number)[] = ["jhon", "joe", "wright", 55]

const person: { name: string; age: number; job: string; } = {
  name: "Kalla",
  age: 44,
  job: "jobless"
}

interface Myself {
  name: string;
  age: number;
  job: string;
  location: { lat: number; long: number }
}
const mySelf: Myself = {
  name: "Shahil",
  age: 21,
  job: "student",
  location: { lat: 44, long: 35 }
}

// function parameter
const handleAddUser = (firstName: string): number => {
  const total: number = 55
  return total
}



function App() {
  return (
    <div className="App">
      <Users></Users>
      <Counter></Counter>
    </div>
  );
}

export default App;
