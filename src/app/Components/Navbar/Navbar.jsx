import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";

export default function Navbar() {
    return <nav className="navbar fixed-top navbar-expand-md navbar-dark">

        <div className="container-fluid">
            <a className="navbar-brand" href="/">
                <img src="/images/logo.png" alt="Bootstrap" height="28" />
            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/app/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/app/novocliente">Novo Cliente</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/app">Sair</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}