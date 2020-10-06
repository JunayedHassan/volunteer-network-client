import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import './Login.css';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebse.config';
import { UserContext } from '../../App';


firebase.initializeApp(firebaseConfig)

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, email } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                }
                setLoggedInUser(signedInUser);
                history.replace(from);
            }).catch(function (error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = error.credential;
            });
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" to="./home">Home</Link>
                    </div>
                </div>
            </nav>

            <h2>please login to proceed</h2>
            {loggedInUser.isSignedIn && <h3>name: {loggedInUser.name}</h3>}
            <button className="googleSignIn" onClick={handleSignIn}>Google Sign In</button>
        </div>
    );
};

export default Login;