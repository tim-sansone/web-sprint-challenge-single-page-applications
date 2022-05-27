import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
       
        <div className="container">
            <h1>This is the Home Page</h1>
            <Link to="/pizza">
                <button id="order-pizza">Place An Order!</button>
            </Link>
        </div>

    )
}