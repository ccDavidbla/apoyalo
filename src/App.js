import React, { Component } from 'react';

class CardPerson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {
          age: 45,
          hairColor: "black",
          firstName: "Jane Doe"
        },
        {
          age: 88,
          hairColor: "Brown",
          firstName: "Smith Jhon"
        }
      ]
    };
  }

  changeAge = (index) => {
    const updatePersons = [...this.state.persons];
    updatePersons[index].age++;
    this.setState({ persons: updatePersons });
  }

  render() {
    const { persons } = this.state;

    return (
      <div>
        {persons.map((person, index) => (
          <div key={index}>
            <h1>
              {person.firstName}
            </h1>
            <p>Age: {person.age}</p>
            <p>Hair color: {person.hairColor}</p>
            <button onClick={() => this.changeAge(index)}>
              Birthday Button for {person.firstName}
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default CardPerson;