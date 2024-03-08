import React, { Component } from 'react';

class PersonCard extends Component {
    render() {
        const { firstName, lastName, age, hairColor } = this.props;
        return (
            <div className="person-card">
                <h2>{firstName} {lastName}</h2>
                <p>Edad: {age}</p>
                <p>Color de cabello: {hairColor}</p>
            </div>
        );
    }
}

export default PersonCard;