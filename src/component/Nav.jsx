import React from 'react'

const Nav = ({ user, logout }) => {
    return (
        <nav className='navbar-fixed'>
            <div className="nav-wrapper deep-purple accent-2">
                <a className="left logo-nav">Connect</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><img className='profile-photo' src={user?.picture} alt='profile' /></li>
                    <li>{user?.name}</li>
                    <li><a onClick={logout} className="waves-effect waves-light btn black">Logout</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav