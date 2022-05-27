import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <h1>This is the Header</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/pizza">Order</Link>
                <Link to="/confirm">Confirmation</Link>
            </nav>
        </header>
    )
}