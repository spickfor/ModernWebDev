import {useEffect, useState } from "react";
import React from 'react';
import './Main.css'; // import our css
import logo from '../images/logo.jpg';
import { Link } from 'react-router-dom'; // for linking pages


const Main = () => {

    return (
        <div>
            <nav>
                <Link to='/'>
                    <img src = {logo} className="logo"/>
                </Link>
                <Link to='/'>Home</Link>
                {/* <a href = '/'>Home</a> */}
                <Link to="/Workouts">Workouts</Link>
                <Link to="/Recipes">Recipes</Link>
                <Link to="/customer-support">Customer Support</Link>
                {/* <a href='../CustomerSupport/customerSupport.js'>Customer Support</a> */}
            </nav>
            <h1 className="protest-guerrilla-regular">Web-Dev Feature 3 Site</h1>
            <p className="cutive-regular">
                This is the home page on my site it doesn't do much right now, but will in the future.
            </p>
        </div>
    );




};

export default Main;