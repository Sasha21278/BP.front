import React from "react";
import "./Header.css";
import logo from "../assets/logo1.png"; // Убедись, что путь правильный

const Header = () => (
    <header className="header">
        <img src={logo} alt="University Logo" className="logo" />
    </header>
);

export default Header;
