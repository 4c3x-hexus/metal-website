import { useState } from 'react';

function Navbar({ setPage }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavigation = (page) => {
        setPage(page);
        setMenuOpen(false);
    };

    return (
        <header>
            <div className="navbar">

                <div
                    className="logo"
                    onClick={() => handleNavigation('home')}
                    style={{ cursor: 'pointer' }}
                >
                    <i className="fa-solid fa-bolt-lightning"></i>
                    METAL
                    <span>STRINGS</span>
                </div>

                <button
                    className="menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

                <ul className={`sections ${menuOpen ? 'active' : ''}`}>
                    <li>
                        <a href="#home" onClick={() => handleNavigation('home')}>
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="#gear" onClick={() => handleNavigation('gear')}>
                            Gear
                        </a>
                    </li>

                    <li>
                        <a href="#theory" onClick={() => handleNavigation('theory')}>
                            Metal Theory
                        </a>
                    </li>

                    <li>
                        <a href="#contact" onClick={() => handleNavigation('contact')}>
                            Feedback
                        </a>
                    </li>
                </ul>

            </div>
        </header>
    );
}

export default Navbar;