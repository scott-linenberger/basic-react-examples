import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleComponent from './components/SimpleComponent';
import NameTag from './components/NameTag';
import NameBadge from './components/NameBadge';

function App() {

  const myOwnerObject = {
    name: 'Scott',
    address: 'Seattle',
    company: 'Oracle',
  }

  return (
    <div className="App">
      <NameBadge
        owner={myOwnerObject}
      />
    </div>
  );
}

export default App;
