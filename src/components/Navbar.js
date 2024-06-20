import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.tittle}</Link>
            <ul className="nav navbar-nav me-auto d-flex flex-row">
                <li className="nav-item me-3">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">{props.aboutText}</Link>
                </li>
            </ul>
                {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
            <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
                <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="mySwitch"/>
                <label className="form-check-label" htmlFor="mySwitch">{props.mode}</label>
            </div>
        </div>
    </nav>
  )
}

Navbar.propTypes = {
    tittle: PropTypes.string,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    tittle: 'Set Your Tittle',
    aboutText: 'Set About Text'
}