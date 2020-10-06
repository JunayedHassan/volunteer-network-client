import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AllRegistrations from '../AllRegistrations/AllRegistrations';

const Admin = () => {

    const [userRegistry, setUserRegistry] = useState([])

    useEffect(() => {
        fetch('http://localhost:3100/event-registers')
            .then(res => res.json())
            .then(data => {
                setUserRegistry(data);
            })
    }, [])


    return (
        <div style={{ margin: "50px" }}>
            <nav>
                <Link to="/addevent"><p>Add Event</p></Link>
                <Link to="../home">Home</Link>
            </nav>
            <br />
            <div>
                {
                    userRegistry.map(allReg => <AllRegistrations
                        allregistered={allReg}
                        key={allReg._id}
                    ></AllRegistrations>)
                }
            </div>
        </div>
    );
};

export default Admin;