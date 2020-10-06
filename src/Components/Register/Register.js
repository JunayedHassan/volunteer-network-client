import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import './Register.css';

const Register = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { specificEvent: specificEventId } = useParams();
    const [events, setevents] = useState({})

    useEffect(() => {
        fetch('https://calm-refuge-89683.herokuapp.com/events')
            .then(res => res.json())
            .then(data => {
                setevents(data);
            })
    }, [])


    let getName = {};
    for (let i = 0; i < events.length; i++) {
        const { _id } = events[i];
        if (_id === specificEventId) {
            getName = events[i];
        }
    }

    let history = useHistory();
    const { Name: eventName } = getName;
    const handleRegistry = (e) => {
        const name = loggedInUser.name;
        const email = loggedInUser.email;
        const date = document.getElementById("date").value;
        const event = eventName;
        const description = document.getElementById("description").value;
        const registerArray = { name, email, date, event, description, specificEventId };

        fetch('https://calm-refuge-89683.herokuapp.com/addregisters', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(registerArray)
        })



        history.replace("/");
        e.preventDefault()
    }

    return (
        <div className="container">

            <Link className="nav-link active" to="../home">Home</Link>


            <form className="registerForm" onSubmit={handleRegistry}>
                <div className="form-group">
                    <input type="text" className="form-control" defaultValue={loggedInUser.name} disabled/>
                    <br />
                    <input type="text" className="form-control" defaultValue={loggedInUser.email} disabled/>
                    <br />
                    <input id="date" type="text" className="form-control" placeholder="Date" required />
                    <br />
                    <input id="description" type="text" className="form-control" placeholder="Description" required />
                    <br />
                    <input type="text" className="form-control" defaultValue={eventName} disabled/>
                </div>

                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    );
};

export default Register;