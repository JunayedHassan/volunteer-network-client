import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

const SingleRegistry = (props) => {
    const { event, description, date, specificEventId, _id } = props.everyRegistry;
    // to get events 
    const [events, setEvents] = useState([])
    useEffect(() => {
        fetch('https://calm-refuge-89683.herokuapp.com/events')
            .then(res => res.json())
            .then(data => {
                setEvents(data)
            })

    }, [])

    let getName = {};
    for (let i = 0; i < events.length; i++) {
        const { _id } = events[i];
        if (_id === specificEventId) {
            getName = events[i];
        }
    }
    const { pic } = getName;




    // to filter
    const [userRegistry, setUserRegistry] = useState([])

    useEffect(() => {
        fetch('https://calm-refuge-89683.herokuapp.com/event-registers')
            .then(res => res.json())
            .then(data => {
                setUserRegistry(data);
            })
    }, [])


    //delete registry
    let history = useHistory();
    const deleteEventRegistry = (id) => {
        fetch(`https://calm-refuge-89683.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
        .then( res => res.json())
        .then(result => {
        })

        
        history.replace("/");
    }

    return (
        <div>

            <div style={{ marginBottom: "35px", marginLeft: "20px" }}>
                <img style={{ width: "150px" }} src={pic} alt="" />
                <h2>{event}</h2>
                <p> {description}</p>
                <p>{date}</p>
                <button onClick={() => deleteEventRegistry(`${_id}`)}>cancel</button>
            </div>
        </div >
    );
};

export default SingleRegistry;