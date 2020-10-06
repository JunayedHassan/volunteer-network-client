import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Notfound from './Components/Notfound/Notfound';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AddEvent from './Components/AddEvent/AddEvent';
import Admin from './Components/Admin/Admin';
import AllRegistrations from './Components/AllRegistrations/AllRegistrations';
import Userinfo from './Components/Userinfo/Userinfo';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <Router>
        <Switch>

          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/addevent">
            <AddEvent></AddEvent>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="/userinfo">
            <Userinfo></Userinfo>
          </Route>
          <Route path="/allregistrations">
            <AllRegistrations></AllRegistrations>
          </Route>
          <PrivateRoute path="/register/:specificEvent">
            <Register></Register>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
