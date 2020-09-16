import React from 'react';
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <div>
            <h1>React #7</h1>
            <nav>
            <ul>
                <div><Link to ='/'>Home</Link>></div>
                <div><Link to='/regist'>Regsiter Form</Link></div>
                <div><Link to='/to-uppercase'></Link></div>
                <div><Link to='/bmi-calculator'></Link></div>
                <div><Link to='/to-do-list'></Link></div>
            </ul>
            </nav>
        </div>
    );
}

export default Navbar;
