import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import SearchIcon from '@mui/icons-material/Search'
const Header = () => {
    return (
        <nav className="header">
            <Link to='/'>
                <img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div>

            <div className="header__nav">
                <Link to="/login" className='header__link'>
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello,</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>
                <Link to="/login" className='header__link'>
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                <Link to="/login" className='header__link'>
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

            </div>
        </nav>
    )
}

export default Header