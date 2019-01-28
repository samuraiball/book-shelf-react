import React, {Component} from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import LoginPage from './LoginPage'

const App = () =>  (
    <BrowserRouter>
        <div>
            <Route exact pass='/login' component={LoginPage}/>
        </div>
    </BrowserRouter>
)

export default App;
