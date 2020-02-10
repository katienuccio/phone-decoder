import icon from "./icon.png";
import './Header.css';
import React from "react";
import {NavLink} from "react-router-dom";


class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="navbar-brand">
                    <img src={icon} width='30' height='30' alt='' className={'invert'}/>
                    &nbsp;Phone Number Decoder</div>

                <div className="collapse navbar-collapse" id="navbarToggler">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink exact className='nav-link' to={"/encode"} activeClassName="active">Encode</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className='nav-link' to={"/decode"} activeClassName="active">Decode</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;