

import React, { useState } from 'react';
import './Navbar.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { BiSearchAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom';

function Navbar() {
    const [menu, setMenu] = useState('')
    return (
        <header className="Header">
            <Link to ="/">
               <img src="../marvel.png" alt="logo marvel" width="120px" />
            </Link>
            <nav className="Navbar">
                <div className="search">
                    <input className="SearchBox" type="search" />
                    <button ><BiSearchAlt /></button>
                </div>
                <button className="Btn-Mobile" onClick={() => { menu === '' ? setMenu('Active') : setMenu('') }} >
                    {!menu ? <AiOutlineMenu size={29} /> : <AiOutlineClose size={29} />}
                </button>
                <ul className={`Menu ${menu}`} >

                    <li><Link to="/character/123">Characters</Link></li>
                    <li><Link to="/">Comics</Link></li>
                    <li><Link to="/">Creators</Link></li>
                    <li><Link to="/">Events</Link></li>
                    <li><Link to="/">Series</Link></li>

                </ul>

            </nav>
        </header>
    );
}


export default Navbar;