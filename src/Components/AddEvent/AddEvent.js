import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const AddEvent = () => {
    let history = useHistory();
    const handleAddEvent = (e) => {

        const Name = document.getElementById("eventName").value
        const pic = document.getElementById("eventPic").value
        const description = document.getElementById("eventDescription").value
        const eventStarts = document.getElementById("eventDate").value

        const eventArray = { Name, pic, description, eventStarts }

        fetch('http://localhost:3100/addevents', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventArray)
        })
        history.replace("/");

        e.preventDefault();
    }
    return (
        <div>
            <Link to="../home">Home</Link>
            <form className="registerForm" onSubmit={handleAddEvent} style={{ margin: "50px" }}>
                <div className="form-group">
                    <input id="eventName" type="text" className="form-control" placeholder="event name" required />
                    <br />
                    <input id="eventDate" type="text" className="form-control" placeholder="event date" required />
                    <br />
                    <input id="eventPic" type="text" className="form-control" placeholder="pic" />
                    <br />
                    <input id="eventDescription" type="text" className="form-control" placeholder="Description" required />
                </div>

                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    );
};

export default AddEvent;