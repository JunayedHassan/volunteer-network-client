import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import SingleRegistry from '../SingleRegistry/SingleRegistry';

const Userinfo = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userRegistry, setUserRegistry] = useState([])

    useEffect(() => {
        fetch('https://calm-refuge-89683.herokuapp.com/event-registers')
            .then(res => res.json())
            .then(data => {
                setUserRegistry(data);
            })
    }, [])

 


    let getName = [];
    for (let i = 0; i < userRegistry.length; i++) {
        const { email } = userRegistry[i];
        if (email === loggedInUser.email) {
            const  getArray = userRegistry[i];
            getName.push(getArray);
        }
    }
    

    return (
        <div>
            <div>
                <div style={{ display: "inline" }}>
                    <Link style={{ marginLeft: "20px", color: "red" }} to="../admin">Admin</Link>
                    <Link style={{ marginLeft: "20px", color: "red" }} to="../home">Home</Link>
                </div>
                <div style={{ marginTop: "50px" }}>
                    {
                        getName.map(evrg => <SingleRegistry
                            key={evrg._id}
                            everyRegistry={evrg}
                        >
                        </SingleRegistry>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Userinfo;