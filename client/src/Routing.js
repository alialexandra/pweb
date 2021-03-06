import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LandingPage from "./pages/landingPage/LandingPage";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";


const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<HomePage/>}/>
                <Route exact path="/signup" element={<Signup/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/" element={<LandingPage/>}/>
            </Routes>
        </Router>
    );
};

export default Routing;