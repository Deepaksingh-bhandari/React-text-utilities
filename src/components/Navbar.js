import React from 'react';
import PropTypes from 'prop-types';

import {Link} from "react-router-dom";
export const Navbar = (props) => {

    
    const toggleMode=(e)=>{
        console.log("toggleMode is called",e)
        e.target.checked?props.onModeChange("dark"):props.onModeChange("light")
    }

    return (<><nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <img src="/android-chrome-192x192.png" alt="Text Utilities image"  width="30" height="24" class="d-inline-block align-text-top"/>
                {props.title}
                </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        {/* <button className={`btn btn-${props.mode}`}> */}
                        <Link className="nav-link " to="/" aria-current="page" >Home</Link>
                        {/* </button> */}
                    </li>
                    <li className="nav-item">
                        {/* <button className={`btn btn-${props.mode}`}> */}
                        <Link className="nav-link" to="/about"  >About</Link>
                        {/* </button> */}
                    </li>
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" >Action</a></li>
                            <li><a className="dropdown-item" >Another action</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" >Something else here</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Disabled</a>
                    </li> */}
                </ul>
                <form className="d-flex">
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch"  id="flexSwitchCheckDefault" onChange={toggleMode}/>
                            <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">{props.mode} mode</label>
                    </div>
                </form>
            </div>
        </div>
    </nav></>)
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}
Navbar.defaultProps = {
    title: "Default Title"
}


