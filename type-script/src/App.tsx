import React from 'react';
import './App.css';
// # components
import Test from './components/test';
import Users from './components/users';
import Test1 from './components/testjs';

function App() {
  return (
    <div className="App">
        <Test name='amir' age={27} />
        <Users />
        <Test1 />
    </div>
  );
}

export default App;
