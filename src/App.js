import './App.css';
import React, { Component } from 'react';
import PersonCard from './PersonCard';

class App extends Component {
  render() {
    const personas = [
      {
        firstName: 'Jane',
        lastName: 'Doe',
        age: 45,
        hairColor: 'Black',
      },
      {
        firstName: 'John',
        lastName: 'Smith',
        age: 88,
        hairColor: 'Brown',
      },
      {
        firstName: 'Millard',
        lastName: 'Fillmore',
        age: 50,
        hairColor: 'Brown',
      },
      {
        firstName: 'Maria',
        lastName: 'Smith',
        age: 62,
        hairColor: 'Brown',
      },
    ];

    return (
      <div className="container">
        <h1>Hola Dojo</h1>
        {personas.map((persona) => (
          <PersonCard
            key={persona.firstName}
            firstName={persona.firstName}
            lastName={persona.lastName}
            age={persona.age}
            hairColor={persona.hairColor}
          />
        ))}
      </div>
    );
  }
}

export default App;
