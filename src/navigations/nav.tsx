import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
    return (
        <nav className="nav nav-pills nav-fill">
            <Link to="/home"> <a className="nav-item nav-link active" >Home</a></Link>
            <Link to="/list"> <a className="nav-item nav-link active" >List</a></Link>
        </nav>
    )
}