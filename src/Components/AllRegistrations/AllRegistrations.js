import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const AllRegistrations = (props) => {
    const { date, email, event, name, _id } = props.allregistered;
    let history = useHistory();
    const deleteRegistry = (id) => {
        fetch(`http://localhost:3100/deleteRegistry/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
            })

        history.replace("/");

    }
    return (
        <div style={{ border: "2px solid steelblue", margin: "25px", padding: "10px", width: "500px" }}>

            <h3 style={{ color: 'orange' }}>{name}</h3>
            <p style={{ color: 'salmon', fontWeight: "600" }}>{email}</p>
            <p>date: {date}</p>
            <p>event: {event}</p>
            <button onClick={() => deleteRegistry(`${_id}`)}>delete</button>
        </div>
    );
};

export default AllRegistrations;