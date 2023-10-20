import React from 'react';
import {Link} from "react-router-dom";


const Header = () => {
  return (
    <header className='header'>
        <div className='container'>
            <ul>
                <li>
                  <Link to="/">Home</Link> 
                </li>
                <li>
                  <Link to="/counterpage">Counter</Link> 
                </li>
                <li>
                  <Link to="/contact">Form</Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header
