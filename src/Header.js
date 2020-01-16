import icon from "./icon.png";
import './Header.css';
import React from "react";

class Header extends React.Component {
    render() {
        return (
            <nav className='navbar navbar-dark'>
                <a className='navbar-brand' href='/'>
                    <img src={icon} width='30' height='30' alt='' className={'invert'}/>
                    &nbsp;Phone Number Decoder
                </a>
            </nav>
        )
    }
}

export default Header;