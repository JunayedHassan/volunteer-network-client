import React from 'react';
import { Link } from 'react-router-dom';
import './EvenetCard.css'

const EventCard = (props) => {
    const { Name, pic, _id } = props.event;
    const specificEvent = _id;
    return (
        <Link to={"/register/" + specificEvent} className="col-2 eventCard d-flex align-items-end" style={{ backgroundImage: `url(${pic})` }}>
            <div className="eventNamebg">
                <h3>{Name}</h3>
            </div>
        </Link>
    );
};

export default EventCard;