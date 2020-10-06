import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" to="/login">Login</Link>
                        <Link className="nav-link active" to="/register">Register</Link>
                        <Link className="nav-link active" to="/admin">Admin</Link>
                    </div>
                </div>
            </nav>
            <h1>Sorry, 404 error.</h1>
        </div>
    );
};

export default Notfound;