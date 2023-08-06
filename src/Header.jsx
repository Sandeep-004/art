import React, {useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Logo from './Images/logo.png';
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {

    const [isMobile, setIsMobile] = useState(false);
    
    return (
        <>
        <div className="row upper">
            <div className="col-6 upper_col">
                <img className="logo" src={Logo} alt="my_logo" />
            </div>
            <div className="col-6">
          
                <ul className={isMobile ? 'menu-mobile' : 'menu'} onClick={()=>setIsMobile(false    )}>
                    <NavLink to="/" className="link"><li>Home</li></NavLink>
                    <NavLink to="/about" className="link"><li>About</li></NavLink>
                    <NavLink to="/art" className="link"><li>Art</li></NavLink>
                    <span className="link"><li><a href="https://myportfolio004.herokuapp.com/" rel="noreferrer" target="_blank" >Web</a></li></span>
                    <NavLink to="/contact" className="link"><li>Contact</li></NavLink>
                </ul>
                <button className="mobile-menu-icon" onClick={()=>setIsMobile(!isMobile)}>
                    {isMobile ? (
                        <CloseIcon />
                    ): (
                        <MenuIcon />
                    )}
                </button>
            </div>
        </div>   
        </>
    )
}

export default Header;
