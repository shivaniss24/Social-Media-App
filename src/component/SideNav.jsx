import React from 'react'
import { FaBookmark, FaHome, FaSearch, FaUser } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const SideNav = () => {
    return (
        <div className='col s2'>
            < ul className='sidenav sidenav-fixed sidenav-align' >
                <NavLink to="/profile">
                    <li className='text-black'><a className='waves-effect waves-deep-purple accent-2'>
                        <a className='icon black-text nav-icon right'>
                            <FaUser className="icons" />
                        </a>
                        <b className='right'>Profile</b></a>
                    </li>
                </NavLink>
                <NavLink to="/">
                    <li className='text-black'><a className='waves-effect waves-deep-purple accent-2'>
                        <a className='icon black-text nav-icon right'>
                            <FaHome className="icons" />
                        </a>
                        <b className='right'>Feed</b></a>
                    </li>
                </NavLink>
                <NavLink to="/explore">
                    <li className='text-black'><a className='waves-effect waves-deep-purple accent-2'>
                        <a className='icon black-text nav-icon right'>
                            <FaSearch className="icons" />
                        </a>
                        <b className='right'>Explore</b></a>
                    </li>
                </NavLink>
                <NavLink to="/bookmark">
                    <li className='text-black'><a className='waves-effect waves-deep-purple accent-2'>
                        <a className='icon black-text nav-icon right'>
                            <FaBookmark className="icons" />
                        </a>
                        <b className='right'>Bookmark</b></a>
                    </li>
                </NavLink>
            </ul >
        </div >
    )
}

export default SideNav