import React from "react";
import Menu from "./Components/Menu.jsx";
import Banner from "./Components/Banner.jsx";
import Features from "./Components/Features.jsx";
import Testemunho from "./Components/Testemunho.jsx";
import Precos from "./Components/Precos.jsx";
import Footer from "./Components/Footer.jsx";

export default function Site() {
    return <div>
        <Menu />
        <Banner />
        <Features />
        <Testemunho />
        <Precos />
        <Footer />
    </div>
}