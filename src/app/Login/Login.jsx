import React from "react";
import './login.css';
import { Link } from "react-router-dom";
 
export default function Login() {
    return <div className="d-flex align-items-center text-center form-container">
        <form className="form-signin">
            <img className="mb-4" src="./Images/logo-small2.png" alt="" />
            <h1 className="h3 mb-3 fw-normal">login</h1>

            <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
                <label htmlFor="floatingInput">E-mail</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Senha" />
                <label htmlFor="floatingPassword">Senha</label>
            </div>

            <button className="btn btn-primary w-100 py-2" type="submit">Acessar</button>

            <div className="login-links mt-5">
                <Link to="/app/resetsenha" className="mx-3">Esqueci minha senha</Link>
                <Link to="/app/novaconta" className="mx-3">Criar uma conta</Link>
            </div>


            <p className="mt-5 mb-3 text-body-secondary">© Desenvolvido por 99 Coders</p>
        </form>
    </div>
}