import React from 'react';
import './Admin.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AddBook from '../AddBook/AddBook';
import Manage from '../Manage/Manage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBorderAll, faPenNib, faPlus } from '@fortawesome/free-solid-svg-icons';

const Admin = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/manageBook"><FontAwesomeIcon icon={faBorderAll} />Manage Book</Link>
                    </li>
                    <li>
                        <Link to="/addBook"><FontAwesomeIcon icon={faPlus} />Add Book</Link>
                    </li>
                    <li>
                        <Link to="/editBook"><FontAwesomeIcon icon={faPenNib} />Edit Book</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/manageBook">
                        <Manage />
                    </Route>
                    <Route path="/addBook">
                        <AddBook />
                    </Route>
                    <Route path="/editBook">
                    </Route>
                </Switch>
            </div >
        </Router>
    );
};

export default Admin;