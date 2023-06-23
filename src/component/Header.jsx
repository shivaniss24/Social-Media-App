import React from 'react'
// import Nav from './Nav'
import { NavLink } from 'react-router-dom'
import Nav from './Nav';

const Header = ({ isAuthenticated, user, logout }) => {
    return isAuthenticated ? <Nav user={user} logout={logout} /> : null;
}
export default Header;