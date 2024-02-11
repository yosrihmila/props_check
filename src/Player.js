import React from 'react';
import Card from 'react-bootstrap/Card';

const Player = ({ info }) => {
return (
    <Card style={{ width: '18rem', margin: '20px' }}>
    <Card.Img variant="top" src={info.Image} alt={info.Name} />
    <Card.Body>
        <Card.Title>{info.Name}</Card.Title>
        <Card.Text>
        Team: {info.Team}<br />
        Nationality: {info.Nationality}<br />
        Jersey Number: {info.JersyNumber}<br />
        Age: {info.Age}
        </Card.Text>
    </Card.Body>
    </Card>
);
};

Player.defaultProps = {
name: "",
team: "",
nationality: "Unknown",
jerseyNumber: "Unknown",
age: "Unknown",
imageUrl: "https://example.com/default-image.jpg",
};

export default Player;