

import React, { useState } from 'react';
import './Navbar.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { BiSearchAlt } from 'react-icons/bi'

function Navbar() {
    const [menu, setMenu] = useState('')
    return (
        <header className="Header">
            <a href="/">
                <h1>Logo</h1>
            </a>
            <nav className="Navbar">
                <div className="search">
                    <input className="SearchBox" type="search" />
                    <button ><BiSearchAlt /></button>
                </div>
                <button className="Btn-Mobile" onClick={() => { menu === '' ? setMenu('Active') : setMenu('') }} >
                    {!menu ? <AiOutlineMenu size={29} /> : <AiOutlineClose size={29} />}
                </button>
                <ul className={`Menu ${menu}`} >
                    <li><a href="/">Characters</a></li>
                    <li><a href="/">Comics</a></li>
                    <li><a href="/">Creators</a></li>
                    <li><a href="/">Events</a></li>
                    <li><a href="/">Series</a></li>

                </ul>

            </nav>
        </header>
    );
}


export default Navbar;