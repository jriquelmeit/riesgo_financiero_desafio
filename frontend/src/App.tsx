import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PrivateRoute from "./components/auth/PrivateRoute"

import * as AuthService from "./services/auth.service";
import  { IUser, IToken } from './types/user.type';

import Login from "./components/auth/Login";
import Profile from "./components/auth/Profile";
import Score from "./components/score/Score";


const App: React.FC = () => {
    const [showModeratorBoard, setShowModeratorBoard] = useState<boolean>(false);
    const [showAdminBoard, setShowAdminBoard] = useState<boolean>(false);
    const [currentUser, setCurrentUser] = useState<IToken | undefined>(undefined);

    useEffect(() => {
        const token = AuthService.getCurrentUser();

        if (token) {
            setCurrentUser(token);
        }

    }, []);

    const logOut = () => {
        AuthService.logout();
        setShowModeratorBoard(false);
        setShowAdminBoard(false);
        setCurrentUser(undefined);
    };

    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <Link to={"/"} className="navbar-brand">
                    bezKoder
                </Link>
                {currentUser && (
                    <>
                    <div className="navbar-nav mr-auto" >
                        <li className="nav-item">
                            <a href="/login" className="nav-link" onClick={logOut}>
                                LogOut
                            </a>
                        </li>
                    </div>
                    <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={"/score"} className="nav-link">
                                Score
                            </Link>
                        </li>
                    </div>
                    </>
                )}
                {!currentUser && (
                    <>
                    <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to={"/login"} className="nav-link">
                            Login
                        </Link>
                    </li>
                </div>
                </>
                )}
            </nav>

            <div className="container mt-3">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
                    <Route path="/score" element={<PrivateRoute><Score /></PrivateRoute>} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
