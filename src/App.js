import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Order from './components/Order/Order';
import Admin from './components/Admin/Admin';
import Login from './components/Login/Login';
import CheckOut from './components/CheckOut/CheckOut';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Header from './components/Header/Header';

export const UserContext = createContext();
function App() {
  const [logInUser, setLogInUser] = useState([])
  return (
    <UserContext.Provider value={[logInUser, setLogInUser]}>
      <h1>{logInUser.UserName}</h1>
      <Router>
        <div>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute path="/order">
              <Order />
            </PrivateRoute>
            <PrivateRoute path="/book/:name">
              <CheckOut />
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
