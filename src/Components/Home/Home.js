import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EventCard from '../EventCard/EventCard';
import './Home.css'

const Home = () => {
    const [events, setEvents] = useState([])
    useEffect(() => {
        fetch('http://localhost:3100/events')
            .then(res => res.json())
            .then(data => setEvents(data))
            
    }, [])

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" to="/login">Login</Link>
                        <Link className="nav-link active" to="/admin">Admin</Link>
                        <Link className="nav-link active" to="/userInfo">userInfo</Link>
                    </div>
                </div>
            </nav>
            <h1>home is working</h1>
            <div className="row HomeContainer">
                {
                    events.map(ev => <EventCard
                        key={ev._id}
                        event={ev}
                    >
                    </EventCard>)
                }
            </div>
        </div>
    );
};

export default Home;