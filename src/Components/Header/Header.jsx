import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { ShoppingBasketOutlined, Search } from '@mui/icons-material'
import { useStateValue } from '../../Context/StateProvider'
const Header = () => {
    const [{ basket }, dispatch] = useStateValue()
    return (
        <nav className="header">
            <Link to='/'>
                <img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <Search className="header__searchIcon"></Search>
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
                <Link to="/checkout" className='header__link'>
                    <div className="header__optionBasket">
                        <ShoppingBasketOutlined />
                        <span className="header__optionLineTwo header_basketCount">{basket.length ? basket.length : 0}</span>
                    </div>
                </Link>

            </div>
        </nav>
    )
}

export default Header