import React from 'react';
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/ranking">Ranking</Link>
                    </li>
                    <li>
                        <Link to="/guild">Guild</Link>
                    </li>
                </ul>
            </div>
        </div>        
    )
}

export default Navbar;