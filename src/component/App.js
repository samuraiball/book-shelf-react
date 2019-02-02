import React, {Component} from 'react'
import LoginPage from './LoginPage'
import BookCard from "./BookCard";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

const App = () => (
            <Router>
                <div>
                    <ul>
                        <li><Link to='/'>home page</Link></li>
                        <li><Link to='/login'>login</Link></li>
                        <li><Link to='/card'>card</Link></li>
                    </ul>
                    <Switch>
                        <Route pass='/card' component={BookCard}/>
                        <Route exact pass='/' component={HomePage}/>
                        <Route pass='/login'  component={LoginPage}/>
                        <Route component={HomePage}/>
                    </Switch>
                </div>
            </Router>
);


class HomePage extends Component {
    render() {
        return (
            <div>
                Home Page
            </div>
        )
    }
}

export default App;
