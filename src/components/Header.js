import { React } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import headerLogo from "../images/logo.svg";

function Header({onPopupMenu, isLoggedIn}) {    
    

    return (
            <header className="header-menu page__header-menu">
              <Link to="/" className="header-menu__logo"><img src={headerLogo} alt="Логотип: Movies"/></Link>
              <Navigation isLogin={isLoggedIn} isPopupMenuOpen={onPopupMenu}/>
            </header>
          )   
    }
    

export default Header;
