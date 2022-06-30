// import { Link } from 'react-router-dom';

import './index.css';

const Header = () => (
    <header>
        <nav className='header-container'>
            <div>
                <a href='/'>
                    <h1 className='header-heading'>TRUC-COLORS</h1>
                </a>
            </div>
            <div className='nav-menu'>
                <a href='/'>
                    <button type='button' className='nav-menu-item'>
                        Colors
                    </button>
                </a>
                <a href='/info-colors'>
                    <button type='button' className='nav-menu-item'>
                        InfoColors
                    </button>
                </a>
            </div>
        </nav>
    </header>
);

export default Header;
