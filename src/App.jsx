import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Páginas */
import Login from "./app/Login/Login.jsx";
import Site from "./site/Site.jsx";
import NovaConta from "./app/NovaConta/NovaConta.jsx";
import ResetSenha from "./app/ResetSenha/ResetSenha.jsx";
import Home from "./app/Home/Home.jsx";
import NovoCliente from "./app/Components/NovoCliente/NovoCliente.jsx";


export default function App() {

    return <BrowserRouter>
        <Routes>
            <Route exact path="/" Component={Site} />
            <Route exact path="/app" Component={Login} />
            <Route exact path="/app/novaconta" Component={NovaConta} />
            <Route exact path="/app/resetsenha" Component={ResetSenha} />
            <Route exact path="/app/home" Component={Home} />
            <Route exact path="/app/novocliente" Component={NovoCliente} />
        </Routes>
    </BrowserRouter>
}